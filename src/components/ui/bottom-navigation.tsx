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
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white/80 dark:bg-[#1A1A1A] border-t border-gray-200/50 dark:border-[#333333] px-4 py-2 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300",
                isActive
                  ? "text-[#6B46FF] dark:text-[#8B5CF6] bg-purple-50 dark:bg-[#333333]"
                  : "text-gray-500 dark:text-gray-400 hover:text-[#6B46FF] dark:hover:text-[#8B5CF6] hover:bg-gray-100 dark:hover:bg-[#333333]",
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive && "drop-shadow-md",
                )}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export { BottomNavigation };
