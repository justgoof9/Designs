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
              "w-3 h-3 rounded-full transition-all duration-500",
              index < filledDots
                ? "bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] dark:bg-gradient-to-r dark:from-[#8B5CF6] dark:to-[#A855F7] scale-110"
                : "bg-gray-300 dark:bg-[#3A2A48] border-2 border-gray-400 dark:border-[#4A3A58]",
            )}
          />
        ))}
      </div>
    );
  },
);
ProgressDots.displayName = "ProgressDots";

export { ProgressDots };
