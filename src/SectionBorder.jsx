import React from "react";

export default function SectionBorder() {
  return (
    <div className="flex flex-row items-center">
      <div className="w-5 h-4 bg-gray-400 animate-border-left"></div>
      <div className="border-t-1 animate-border-pulse w-full h-0"></div>
      <div className="w-5 h-4 bg-gray-400 animate-border-right"></div>
    </div>
  )
}