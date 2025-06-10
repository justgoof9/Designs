import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Eye, Plus, Trophy, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/insights", icon: Eye, label: "Insights" },
  { path: "/log", icon: Plus, label: "Log" },
  { path: "/achievements", icon: Trophy, label: "Achievements" },
  { path: "/more", icon: Menu, label: "More" },
];

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 transition-colors duration-200",
                isActive
                  ? "text-[#5B8DEF]"
                  : "text-gray-500 dark:text-gray-400",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { BottomNavigation };
