import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, BarChart3, MessageCircle, Trophy, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/insights", icon: BarChart3, label: "Insights" },
  { path: "/community", icon: MessageCircle, label: "Chat" },
  { path: "/achievements", icon: Trophy, label: "Achievements" },
  { path: "/more", icon: Menu, label: "More" },
];

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-black/30 backdrop-blur-xl border-t border-gray-200/50 dark:border-white/10">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 transition-all duration-300 rounded-2xl",
                isActive
                  ? "text-[#6B46FF] dark:text-[#A259FF] bg-purple-50 dark:bg-white/10 backdrop-blur-sm"
                  : "text-gray-500 dark:text-[#8A8A8A] hover:text-gray-700 dark:hover:text-[#B0B0B0] hover:bg-gray-100 dark:hover:bg-white/5",
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive &&
                    "drop-shadow-md dark:drop-shadow-[0_0_8px_rgba(162,89,255,0.8)]",
                )}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { BottomNavigation };
