import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Trophy,
  Plus,
  Quote,
  Calendar,
  Clock,
  DollarSign,
  Cigarette,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressDots } from "@/components/ui/progress-dots";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { LogTodayModal, LogData } from "@/components/ui/log-today-modal";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [hasLoggedToday, setHasLoggedToday] = useState(false);
  const [showInspiration, setShowInspiration] = useState(false);
  const navigate = useNavigate();

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Fade in inspiration quote on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInspiration(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Format time for iOS style
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  };

  // Handle log save
  const handleLogSave = (data: LogData) => {
    console.log("Log saved:", data);
    setHasLoggedToday(true);
    // In a real app, this would save to backend/storage
  };

  // Daily quotes - could be rotated or AI-curated
  const dailyQuotes = [
    "Recovery is not one big step. It's lots of little steps.",
    "Every small step forward is a victory worth celebrating.",
    "The courage to begin is often the hardest part, and you've already taken it.",
    "Progress, not perfection, is the goal of your journey.",
    "Each day you choose health, you're choosing your future self.",
  ];

  const todaysQuote = dailyQuotes[0]; // In a real app, this could rotate daily

  // Calculate days until 0mg target (this would be dynamic based on user's plan)
  const daysUntilZero = 17; // This would be calculated from user's reduction plan

  // Overall progress metrics with theme-aware colors
  const progressMetrics = [
    {
      icon: Calendar,
      label: "Days to 0mg",
      value: "17 days left",
      color: "text-[#6B46FF] dark:text-[#A259FF]", // Darker purple for light mode
    },
    {
      icon: Cigarette,
      label: "Units Avoided",
      value: "12 cigarettes / 8 vapes",
      color: "text-[#00B976] dark:text-[#00FF9D]", // Darker green for light mode
    },
    {
      icon: DollarSign,
      label: "Money Saved",
      value: "$32.50",
      color: "text-[#00B976] dark:text-[#00FF9D]", // Darker green for light mode
    },
    {
      icon: Clock,
      label: "Time Saved",
      value: "3 hrs 45 mins",
      color: "text-[#0B8FD9] dark:text-[#4EDCFF]", // Darker blue for light mode
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] dark:bg-[#0D0C1D] transition-colors duration-500 font-['Inter',sans-serif]",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Top Header */}
      <div className="bg-white/70 dark:bg-black/20 backdrop-blur-lg border-b border-gray-200/50 dark:border-[#2A2A3A] px-4 py-3">
        {/* iOS Status Bar */}
        <div className="flex items-center justify-between text-sm font-semibold text-gray-800 dark:text-[#EDEDED] mb-2">
          <span>{formatTime(currentTime)}</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-gray-800 dark:bg-[#EDEDED] rounded-full"></div>
              <div className="w-1 h-3 bg-gray-800 dark:bg-[#EDEDED] rounded-full"></div>
              <div className="w-1 h-3 bg-gray-800 dark:bg-[#EDEDED] rounded-full"></div>
              <div className="w-1 h-3 bg-gray-400 dark:bg-[#555555] rounded-full"></div>
            </div>
            <span className="ml-2">100%</span>
          </div>
        </div>

        {/* Header Content */}
        <div className="flex items-center justify-between">
          <div></div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-[#FFFFFF] tracking-wide">
            NicotineFree
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/achievements")}
              className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Trophy className="w-5 h-5 text-[#6B46FF] dark:text-[#A259FF] drop-shadow-[0_0_8px_rgba(107,70,255,0.3)] dark:drop-shadow-[0_0_8px_rgba(162,89,255,0.6)]" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-[#FFA726] dark:text-[#4EDCFF]" />
              ) : (
                <Moon className="w-5 h-5 text-[#6B46FF] dark:text-[#555555]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Combined Progress + Inspiration Card */}
        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-xl dark:shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-500/5 dark:to-blue-500/5 pointer-events-none" />
          <CardHeader className="pb-4 relative z-10">
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-[#FFFFFF]">
              Today's Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 relative z-10">
            {/* Nicotine Reduction Message */}
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-2xl font-bold text-[#6B46FF] dark:text-[#A259FF] mb-2 drop-shadow-[0_0_8px_rgba(107,70,255,0.2)] dark:drop-shadow-[0_0_12px_rgba(162,89,255,0.4)]">
                  You've used 2.3 mg today – down 15% from your average.
                </p>

                {/* Days until 0mg target */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#6B46FF] dark:text-[#A259FF]" />
                    <span className="text-sm font-medium text-gray-800 dark:text-[#EDEDED]">
                      Days until 0mg target:
                    </span>
                  </div>
                  <div className="bg-purple-100/80 dark:bg-[#A259FF]/20 backdrop-blur-sm border border-purple-200/50 dark:border-[#A259FF]/30 px-3 py-1 rounded-full shadow-md dark:shadow-[0_0_16px_rgba(162,89,255,0.25)]">
                    <span className="text-sm font-bold text-[#6B46FF] dark:text-[#A259FF]">
                      {daysUntilZero} days left
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-[#B0B0B0]">
                  Great progress! You're successfully reducing your nicotine
                  intake.
                </p>
              </div>

              {/* Progress Visual - 7 dots for trend/streak */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800 dark:text-[#EDEDED]">
                  Reduction Progress
                </span>
                <ProgressDots totalDots={7} filledDots={5} />
              </div>
            </div>

            {/* Log Today's Use Button */}
            <div className="flex justify-center">
              <Button
                onClick={() => setIsLogModalOpen(true)}
                className={cn(
                  "px-8 py-3 rounded-2xl text-white font-bold transition-all duration-300 border-0",
                  hasLoggedToday
                    ? "bg-gradient-to-r from-[#00B976] to-[#2DD4BF] dark:from-[#00FF9D] dark:to-[#3AFF7C] shadow-lg dark:shadow-[0_0_24px_rgba(0,255,157,0.4)] hover:shadow-xl dark:hover:shadow-[0_0_32px_rgba(0,255,157,0.6)]"
                    : "bg-gradient-to-r from-[#6B46FF] to-[#8B5CF6] dark:from-[#A259FF] dark:to-[#B85FFF] shadow-lg dark:shadow-[0_0_24px_rgba(162,89,255,0.4)] hover:shadow-xl dark:hover:shadow-[0_0_32px_rgba(162,89,255,0.6)]",
                )}
              >
                <Plus className="w-5 h-5 mr-2" />
                {hasLoggedToday ? "Update Today's Use" : "Log Today's Use"}
              </Button>
            </div>

            {/* Light Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-[#2A2A3A] to-transparent"></div>

            {/* Daily Inspiration (at bottom of card) */}
            <div
              className={cn(
                "text-center transition-all duration-1000",
                showInspiration
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-2",
              )}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Quote className="w-4 h-4 text-[#0B8FD9] dark:text-[#4EDCFF]" />
                <span className="text-sm font-medium text-gray-700 dark:text-[#EDEDED] opacity-70">
                  Daily Inspiration
                </span>
              </div>
              <blockquote className="text-gray-800 dark:text-[#FFFFFF] text-sm leading-relaxed italic font-medium opacity-90">
                "{todaysQuote}"
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Overall Progress Summary Card */}
        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-xl dark:shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-cyan-50/30 dark:from-purple-500/5 dark:to-cyan-500/5 pointer-events-none" />
          <CardHeader className="pb-4 relative z-10">
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-[#FFFFFF] flex items-center gap-2">
              📊 Your Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            {/* 2x2 Grid Layout with Separators */}
            <div className="grid grid-cols-2 gap-0">
              {progressMetrics.map((metric, index) => {
                const Icon = metric.icon;
                const isRightColumn = index % 2 === 1;
                const isBottomRow = index >= 2;

                return (
                  <div
                    key={index}
                    className={cn(
                      "relative p-4 text-center",
                      // Add right border for left column items
                      !isRightColumn &&
                        "border-r border-gray-200 dark:border-[#2A2A3A]",
                      // Add bottom border for top row items
                      !isBottomRow &&
                        "border-b border-gray-200 dark:border-[#2A2A3A]",
                    )}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-2xl bg-gray-100/80 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 shadow-sm dark:shadow-[0_0_16px_rgba(162,89,255,0.15)]">
                        <Icon className={cn("w-5 h-5", metric.color)} />
                      </div>
                    </div>

                    {/* Label - Above Value */}
                    <div className="text-xs font-medium text-gray-500 dark:text-[#8A8A8A] mb-2 leading-tight">
                      {metric.label}
                    </div>

                    {/* Value - Uniform Font Weight and Size */}
                    <div
                      className={cn(
                        "text-sm font-bold leading-tight drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(162,89,255,0.3)]",
                        metric.color,
                      )}
                    >
                      {metric.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Log Today Modal */}
      <LogTodayModal
        isOpen={isLogModalOpen}
        onClose={() => setIsLogModalOpen(false)}
        onSave={handleLogSave}
      />

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
