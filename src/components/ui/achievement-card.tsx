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
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A259FF] to-[#B85FFF] shadow-[0_0_20px_rgba(162,89,255,0.5)] backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-lg font-bold">
          {icon}
        </div>
        <span className="text-xs text-[#B0B0B0] font-medium">{title}</span>
      </div>
    );
  },
);
AchievementCard.displayName = "AchievementCard";

export { AchievementCard };
