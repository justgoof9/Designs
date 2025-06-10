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
              "w-3 h-3 rounded-full transition-all duration-300",
              index < filledDots
                ? "bg-gradient-to-r from-[#A259FF] to-[#B85FFF] shadow-[0_0_12px_rgba(162,89,255,0.6)]" // Neon purple with glow for filled dots
                : "bg-[#2A2A3A] border border-[#555555]", // Dark gray for empty dots
            )}
          />
        ))}
      </div>
    );
  },
);
ProgressDots.displayName = "ProgressDots";

export { ProgressDots };
