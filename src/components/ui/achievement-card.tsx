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
        <div className="w-12 h-12 rounded-full bg-[#4F7BFF] shadow-[0_0_16px_rgba(79,123,255,0.4)] flex items-center justify-center text-white text-lg">
          {icon}
        </div>
        <span className="text-xs text-[#A0A3B1] font-medium">{title}</span>
      </div>
    );
  },
);
AchievementCard.displayName = "AchievementCard";

export { AchievementCard };
