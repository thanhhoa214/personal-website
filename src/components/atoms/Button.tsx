import React from 'react';

export default function Button({
  children,
  size = "md",
}: {
  children: string;
  size?: "xl" | "lg" | "md";
}) {
  return (
    <button
      className={`btn 
        ${
          size === "md"
            ? "py-1.5 px-3"
            : size === "lg"
            ? "py-2 px-4 text-lg"
            : "py-4 px-16 text-2xl"
        }
          `}
    >
      {children}
    </button>
  );
}
