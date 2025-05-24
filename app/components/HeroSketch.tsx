/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { countryPoints } from "./countries";
import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from "react";

type VertexCommand = "m" | "M";
type VertexCoordinate = [number, number];
type VertexMoveCommand = [VertexCommand, number, number];
type VertexPoint =
  | VertexMoveCommand
  | VertexCoordinate
  | "z"
  | string
  | (string | number)[];

interface Point {
  x: number;
  y: number;
}

interface Bounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

interface CountryPoint {
  name: string;
  vertexPoint: VertexPoint[];
  colour?: string;
}

const GlobeComponent: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);

  useEffect(() => {
    let p5: any;

    import("p5").then((p5Module) => {
      p5 = p5Module.default;

      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }

      class Globe {
        private p: any;
        private size: number;
        private rotationY: number = 0;
        private rotationX: number;
        private texture: any;

        constructor(p: any, size: number) {
          this.p = p;
          this.size = size;
          this.rotationX = p.radians(-10);
          this.rotationY = p.radians(160);
          this.texture = this.createGlobeTexture();
        }

        private calculateBounds(points: CountryPoint[]): Bounds {
          return points.reduce(
            (bounds, country) => {
              if (!country.vertexPoint) return bounds;
              let coordPoint: [number, number] = [0, 0];

              country.vertexPoint.forEach((point) => {
                if (Array.isArray(point)) {
                  const [first, second, third] = point;
                  if (first === "m" || first === "M") {
                    coordPoint =
                      first === "m"
                        ? [
                            coordPoint[0] + (second as number),
                            coordPoint[1] + (third as number),
                          ]
                        : [second as number, third as number];
                  } else {
                    coordPoint[0] += point[0] as number;
                    coordPoint[1] += point[1] as number;
                  }
                  bounds.minX = Math.min(bounds.minX, coordPoint[0]);
                  bounds.maxX = Math.max(bounds.maxX, coordPoint[0]);
                  bounds.minY = Math.min(bounds.minY, coordPoint[1]);
                  bounds.maxY = Math.max(bounds.maxY, coordPoint[1]);
                }
              });
              return bounds;
            },
            { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
          );
        }

        private calculateScale(bounds: Bounds): number {
          const width = bounds.maxX - bounds.minX;
          const height = bounds.maxY - bounds.minY;
          return Math.min(1800 / width, 900 / height);
        }

        private calculatePoint(
          coordPoint: [number, number],
          bounds: Bounds,
          scale: number
        ): Point {
          return {
            x: (coordPoint[0] - bounds.minX) * scale + 124,
            y: (coordPoint[1] - bounds.minY) * scale + 62,
          };
        }

        private drawCountry(
          graphics: any,
          country: CountryPoint,
          bounds: Bounds,
          scale: number
        ): void {
          let coordPoint: [number, number] = [0, 0];
          let startPoint: Point | null = null;

          country.vertexPoint.forEach((point) => {
            if (Array.isArray(point)) {
              const [first, second, third] = point;
              if (first === "m" || first === "M") {
                if (startPoint) {
                  graphics.vertex(startPoint.x, startPoint.y);
                  graphics.endShape(graphics.CLOSE);
                }
                graphics.beginShape();
                coordPoint =
                  first === "m"
                    ? [
                        coordPoint[0] + (second as number),
                        coordPoint[1] + (third as number),
                      ]
                    : [second as number, third as number];
                startPoint = this.calculatePoint(coordPoint, bounds, scale);
                graphics.vertex(startPoint.x, startPoint.y);
              } else {
                coordPoint[0] += point[0] as number;
                coordPoint[1] += point[1] as number;
                const { x, y } = this.calculatePoint(coordPoint, bounds, scale);
                graphics.vertex(x, y);
              }
            } else if (point === "z") {
              if (startPoint) {
                graphics.vertex(startPoint.x, startPoint.y);
                graphics.endShape(graphics.CLOSE);
              }
              startPoint = null;
            }
          });

          if (startPoint) {
            graphics.vertex((startPoint as Point).x, (startPoint as Point).y);
            graphics.endShape(graphics.CLOSE);
          }
        }

        private createGlobeTexture(): any {
          const mapGraphics = this.p.createGraphics(2048, 1024);
          mapGraphics.colorMode(this.p.RGB);
          mapGraphics.background(200, 200, 200);
          mapGraphics.strokeWeight(0.5);
          mapGraphics.stroke(0, 0, 0, 60);

          if (countryPoints?.length) {
            const bounds = this.calculateBounds(countryPoints);
            const scale = this.calculateScale(bounds);

            countryPoints.forEach((country) => {
              if (!country.vertexPoint) return;
              const countryName = country.name.toLowerCase();
              let fillColor;

              switch (countryName) {
                case "nigeria":
                  fillColor = this.p.color(34, 139, 34); // Forest Green for sustainability
                  break;
                case "united arab emirates":
                  fillColor = this.p.color(34, 139, 34); // Forest Green for sustainability
                  break;
                case "ghana":
                case "cameroon":
                case "kenya":
                case "south africa":
                  fillColor = this.p.color(46, 125, 50); // Slightly different green for sustainability focus
                  break;
                default:
                  fillColor = this.p.color(180, 180, 180); // Lighter gray for contrast
              }

              mapGraphics.fill(fillColor);
              this.drawCountry(mapGraphics, country, bounds, scale);
            });
          }
          return mapGraphics;
        }

        public draw(): void {
          this.p.push();
          this.p.noStroke();
          this.p.rotateX(this.rotationX);
          this.p.rotateY(this.rotationY);
          this.p.texture(this.texture);
          this.p.sphere(this.size);
          this.p.pop();

          this.rotationY += 0.002;
        }
      }

      const sketch = (p: any) => {
        let globe: Globe;

        p.setup = () => {
          const screenWidth = window.innerWidth;
          let size, globeSize;

          if (screenWidth < 768) {
            // Mobile view
            size = screenWidth * 0.7;
            globeSize = size * 0.25;
          } else if (screenWidth >= 768 && screenWidth < 1024) {
            // Tablet/iPad view
            size = screenWidth * 0.6;
            globeSize = size * 0.25;
          } else {
            // Desktop view
            size = Math.min(screenWidth * 0.9, window.innerHeight * 0.9);
            globeSize = size * 0.25;
          }

          p.createCanvas(size, size, p.WEBGL);
          p.colorMode(p.RGB);

          globe = new Globe(p, globeSize);
        };

        p.draw = () => {
          p.background(0, 0, 0, 0);
          p.ambientLight(180);
          p.pointLight(100, 200, 100, 0, 0, 50); // Green-tinted light
          p.directionalLight(220, 255, 220, 1, 1, -1); // Slight green cast
          globe?.draw();
        };
      };

      if (sketchRef.current) {
        p5InstanceRef.current = new p5(sketch, sketchRef.current);
      }
    });

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      className="w-full flex justify-center items-center min-h-[200px] md:min-h-[300px] lg:min-h-[350px]"
    />
  );
};

const DynamicGlobe = dynamic(() => Promise.resolve(GlobeComponent), {
  ssr: false,
});

const SimpleLoader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600" />
    </div>
  );
};

export default function HeroSketch() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        setShowContent(true);
      } catch (error) {
        console.error("Initialization error:", error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
      {isLoading ? (
        <SimpleLoader />
      ) : (
        <div className="flex justify-center items-center">
          {/* Globe */}
          <div className="overflow-hidden" style={{ maxWidth: "70%", margin: "0 auto" }}>
            {showContent && <DynamicGlobe />}
          </div>
        </div>
      )}
    </div>
  );
}
