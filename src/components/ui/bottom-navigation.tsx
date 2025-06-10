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
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1C24] border-t border-[#2A2E39]">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 transition-all duration-200",
                isActive
                  ? "text-[#4F7BFF]"
                  : "text-[#6C7387] hover:text-[#A0A3B1]",
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-all duration-200",
                  isActive && "drop-shadow-[0_0_6px_rgba(79,123,255,0.6)]",
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
