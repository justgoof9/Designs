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
          "flex flex-col items-center gap-2 min-w-[80px] text-center",
          className,
        )}
        {...props}
      >
        <div className="w-12 h-12 rounded-full bg-[#5B8DEF] flex items-center justify-center text-white text-lg">
          {icon}
        </div>
        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
          {title}
        </span>
      </div>
    );
  },
);
AchievementCard.displayName = "AchievementCard";

export { AchievementCard };
