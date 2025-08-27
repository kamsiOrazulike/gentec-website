import React from "react";
import { MapPin } from "lucide-react";
import { TimelineItem, sortedTimelineData } from "./projects.data";

const TimelineContent: React.FC = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sortedTimelineData.map((item: TimelineItem, index: number) => (
          <div
            key={index}
            className="bg-white/20 border border-white/30 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
          >
            {/* Card Header */}
            <div className={`${item.type === "achievement" ? "bg-amber-800" : "bg-amber-700"} text-white p-4 flex justify-between items-center`}>
              <div>
                <span className="text-sm font-medium">{item.year}</span>
                <h3 className="text-lg font-bold">
                  {item.type === "project" ? item.client : item.organization}
                </h3>
              </div>
              <div className="bg-amber-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-amber-800" />
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-white mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Location for projects */}
              {item.type === "project" && item.location && (
                <div className="flex items-center text-white">
                  <MapPin className="w-4 h-4 mr-2 text-amber-300" />
                  <span>{item.location}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineContent;
