import * as React from "react";
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  icon: string;
  title: string;
  className?: string;
}

const AchievementCard = React.forwardRef<HTMLDivElement, AchievementCardProps>(
  ({ icon, title, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-20 h-20 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 border-2",
          earned
            ? "bg-gradient-to-br from-[#00B976] to-[#2DD4BF] dark:bg-[#22C55E] border-[#00B976] dark:border-[#22C55E] shadow-lg dark:shadow-none hover:scale-105"
            : "bg-gray-200 dark:bg-[#333333] border-gray-300 dark:border-[#444444] opacity-60 grayscale",
        )}
        {...props}
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6B46FF] to-[#8B5CF6] dark:from-[#A259FF] dark:to-[#B85FFF] shadow-lg dark:shadow-[0_0_20px_rgba(162,89,255,0.5)] backdrop-blur-sm border border-purple-200 dark:border-white/20 flex items-center justify-center text-white text-lg font-bold">
          {icon}
        </div>
        <span className="text-xs text-gray-600 dark:text-[#B0B0B0] font-medium">
          {title}
        </span>
      </div>
    );
  },
);
AchievementCard.displayName = "AchievementCard";

export { AchievementCard };
