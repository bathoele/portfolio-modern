import React from "react";

export default function SectionBorder() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-3 h-2 border-1 border-gray-400 animate-border-left"></div>
      <div className="border-t-1 animate-border-pulse w-2/3 h-0"></div>
      <div className="w-3 h-2 border-1 border-gray-400 animate-border-right"></div>
    </div>
  )
}