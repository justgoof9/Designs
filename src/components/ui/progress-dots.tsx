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
                ? "bg-gradient-to-r from-[#00B976] to-[#2DD4BF] dark:bg-[#22C55E] scale-110"
                : "bg-gray-300 dark:bg-[#444444] border-2 border-gray-400 dark:border-[#555555]",
            )}
          />
        ))}
      </div>
    );
  },
);
ProgressDots.displayName = "ProgressDots";

export { ProgressDots };
