import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressDotsProps {
  totalDots?: number;
  filledDots?: number;
  className?: string;
}

const ProgressDots = React.forwardRef<HTMLDivElement, ProgressDotsProps>(
  ({ totalDots = 7, filledDots = 1, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-colors duration-200",
              index < filledDots
                ? "bg-[#4F7BFF] shadow-[0_0_8px_rgba(79,123,255,0.4)]" // Electric blue with glow for filled dots
                : "bg-[#2A2E39]", // Dark border color for empty dots
            )}
          />
        ))}
      </div>
    );
  },
);
ProgressDots.displayName = "ProgressDots";

export { ProgressDots };
