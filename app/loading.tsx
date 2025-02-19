/* eslint-disable prefer-const */
"use client";
import React, { useState, useEffect, useCallback } from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = React.memo(({ progress }) => (
  <div className="h-1 w-full bg-gray-200">
    <div
      className="h-full bg-red-600 transition-all duration-200 ease-out"
      style={{ width: `${progress}%` }}
    />
  </div>
));

ProgressBar.displayName = "ProgressBar";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const calculateProgress = useCallback((prev: number) => {
    if (prev < 50) {
      return Math.min(50, prev + Math.random() * 4);
    }
    if (prev < 80) {
      return prev + Math.random() * 2;
    }
    return Math.min(90, prev + Math.random() * 1);
  }, []);

  useEffect(() => {
    let progressTimer: NodeJS.Timeout;
    let mounted = true;

    // Start progress animation
    progressTimer = setInterval(() => {
      if (mounted) {
        setProgress((prev) => calculateProgress(prev));
      }
    }, 100); // Increase interval duration

    // Cleanup
    return () => {
      mounted = false;
      clearInterval(progressTimer);
    };
  }, [calculateProgress]);

  // When component is about to unmount, complete the progress
  useEffect(() => {
    const handleBeforeUnmount = () => {
      setProgress(100);
      setOpacity(0);
    };

    window.addEventListener("beforeunload", handleBeforeUnmount);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnmount);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
      style={{ opacity }}
    >
      <div className="w-64">
        <ProgressBar progress={progress} />
      </div>
      <div className="mt-4 text-gray-600 animate-pulse">Loading...</div>
    </div>
  );
}
