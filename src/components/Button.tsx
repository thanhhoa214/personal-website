import React from 'react';

export default function Button({
  children,
  size = "md",
}: {
  children: string;
  size?: "lg" | "md";
}) {
  return (
    <button
      className={`border border-solid border-neon-400 rounded text-neon-500 hover:bg-opacity-30 hover:bg-neon-200 hover:shadow-md transition-colors font-ubuntu 
        ${size === "md" ? "py-1.5 px-3" : "py-2 px-4 text-lg"}
          `}
    >
      {children}
    </button>
  );
}
