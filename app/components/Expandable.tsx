"use client";

import { ReactNode, useState } from "react";

interface ExpandableProps {
  children: ReactNode;
  title?: string;
  defaultExpanded?: boolean;
  className?: string;
}

export default function Expandable({
  children,
  title = "Expand",
  defaultExpanded = false,
  className = "",
}: ExpandableProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`border border-gray-200 rounded-md overflow-hidden ${className}`}
    >
      <div
        className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer"
        onClick={toggleExpand}
      >
        <h3 className="font-medium">{title}</h3>
        <button
          className="px-2 py-1 text-sm rounded-md hover:bg-gray-200 transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Close" : "Expand"}
        </button>
      </div>

      {isExpanded && (
        <div className="p-4 border-t border-gray-200">{children}</div>
      )}
    </div>
  );
}
