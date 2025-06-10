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

  // Overall progress metrics
  const progressMetrics = [
    {
      icon: Calendar,
      label: "Days to 0mg",
      value: "17 days left",
      color: "text-[#6B46FF] dark:text-[#8B5CF6]",
    },
    {
      icon: Cigarette,
      label: "Units Avoided",
      value: "12 cigarettes / 8 vapes",
      color: "text-[#00B976] dark:text-[#22C55E]",
    },
    {
      icon: DollarSign,
      label: "Money Saved",
      value: "$32.50",
      color: "text-[#00B976] dark:text-[#22C55E]",
    },
    {
      icon: Clock,
      label: "Time Saved",
      value: "3 hrs 45 mins",
      color: "text-[#0B8FD9] dark:text-[#3B82F6]",
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] dark:bg-gradient-to-br dark:from-[#0F0B1C] dark:to-[#1A0D2E] transition-colors duration-200 font-['Inter',sans-serif]",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Top Header */}
      <div className="bg-white/70 dark:bg-[#1A1426]/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-[#2A2038] px-4 py-3">
        {/* iOS Status Bar */}
        <div className="flex items-center justify-between text-sm font-semibold text-gray-800 dark:text-white mb-2">
          <span>{formatTime(currentTime)}</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-gray-800 dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-gray-800 dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-gray-800 dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
            </div>
            <span className="ml-2">100%</span>
          </div>
        </div>

        {/* Header Content */}
        <div className="flex items-center justify-between">
          <div></div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">
            NicotineFree
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/achievements")}
              className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
            >
              <Trophy className="w-5 h-5 text-[#6B46FF] dark:text-[#8B5CF6]" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-[#6B46FF]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Combined Progress + Inspiration Card */}
        <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
              Today's Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Nicotine Reduction Message */}
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] dark:from-[#8B5CF6] dark:to-[#A855F7] bg-clip-text text-transparent mb-2">
                  You've used 2.3 mg today – down 15% from your average.
                </p>

                {/* Days until 0mg target */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#6B46FF] dark:text-[#8B5CF6]" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                      Days until 0mg target:
                    </span>
                  </div>
                  <div className="bg-purple-100/80 dark:bg-[#2A2038] border border-purple-200/50 dark:border-[#3A2A48] px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-[#6B46FF] dark:text-[#8B5CF6]">
                      {daysUntilZero} days left
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Great progress! You're successfully reducing your nicotine
                  intake.
                </p>
              </div>

              {/* Progress Visual - 7 dots for trend/streak */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
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
                    ? "bg-gradient-to-r from-[#00B976] to-[#2DD4BF] dark:bg-gradient-to-r dark:from-[#22C55E] dark:to-[#10B981] shadow-lg"
                    : "bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] dark:bg-gradient-to-r dark:from-[#8B5CF6] dark:to-[#A855F7] shadow-lg",
                )}
              >
                <Plus className="w-5 h-5 mr-2" />
                {hasLoggedToday ? "Update Today's Use" : "Log Today's Use"}
              </Button>
            </div>

            {/* Light Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-[#2A2038] to-transparent"></div>

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
                <Quote className="w-4 h-4 text-[#0B8FD9] dark:text-[#3B82F6]" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-400 opacity-70">
                  Daily Inspiration
                </span>
              </div>
              <blockquote className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed italic font-medium opacity-90">
                "{todaysQuote}"
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Overall Progress Summary Card */}
        <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              📊 Your Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
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
                        "border-r border-gray-200 dark:border-[#2A2038]",
                      // Add bottom border for top row items
                      !isBottomRow &&
                        "border-b border-gray-200 dark:border-[#2A2038]",
                    )}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-2xl bg-gray-100/80 dark:bg-[#2A2038] border border-gray-200/50 dark:border-[#3A2A48] shadow-sm">
                        <Icon className={cn("w-5 h-5", metric.color)} />
                      </div>
                    </div>

                    {/* Label - Above Value */}
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 leading-tight">
                      {metric.label}
                    </div>

                    {/* Value - Uniform Font Weight and Size */}
                    <div
                      className={cn(
                        "text-sm font-bold leading-tight",
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
