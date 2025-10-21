import React from "react";
import { cn } from "@/lib/utils"; // optional helper if you use className merging

export function Button({ 
  children, 
  className = "", 
  variant = "default", 
  ...props 
}) {
  const baseStyles =
    "rounded-2xl px-4 py-2 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-black text-white hover:bg-gray-900 focus:ring-gray-800",
    yellow: "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
