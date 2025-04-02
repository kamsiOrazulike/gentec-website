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
            className="bg-white/10 border border-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* Card Header */}
            <div className="bg-red-600 text-white p-4 flex justify-between items-center">
              <div>
                <span className="text-sm font-medium">{item.year}</span>
                <h3 className="text-lg font-bold">
                  {item.type === "project" ? item.client : item.organization}
                </h3>
              </div>
              <div className="bg-red-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-red-600" />
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
                  <MapPin className="w-4 h-4 mr-2 text-red-500" />
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
