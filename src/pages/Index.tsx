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
  const [isDark, setIsDark] = useState(false);
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
    document.documentElement.classList.toggle("dark");
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

  // Overall progress metrics with new theme colors
  const progressMetrics = [
    {
      icon: Calendar,
      label: "Days to 0mg",
      value: "17 days left",
      color: "text-[#4D7EFF]", // Primary indigo blue
    },
    {
      icon: Cigarette,
      label: "Units Avoided",
      value: "12 cigarettes / 8 vapes",
      color: "text-[#3FBF7D]", // Fresh green for success
    },
    {
      icon: DollarSign,
      label: "Money Saved",
      value: "$32.50",
      color: "text-[#3FBF7D]", // Fresh green for success
    },
    {
      icon: Clock,
      label: "Time Saved",
      value: "3 hrs 45 mins",
      color: "text-[#FF9E45]", // Vibrant orange for time
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen bg-[#F7F9FB] dark:bg-gray-900 transition-colors duration-200",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Top Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        {/* iOS Status Bar */}
        <div className="flex items-center justify-between text-sm font-semibold text-[#1E1E1E] dark:text-white mb-2">
          <span>{formatTime(currentTime)}</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-[#1E1E1E] dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-[#1E1E1E] dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-[#1E1E1E] dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
            <span className="ml-2">100%</span>
          </div>
        </div>

        {/* Header Content */}
        <div className="flex items-center justify-between">
          <div></div>
          <h1 className="text-lg font-semibold text-[#1E1E1E] dark:text-white">
            NicotineFree
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/achievements")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Trophy className="w-5 h-5 text-[#4D7EFF]" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Combined Progress + Inspiration Card */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-[#1E1E1E] dark:text-white">
              Today's Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Nicotine Reduction Message */}
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-2xl font-bold text-[#4D7EFF] mb-2">
                  You've used 2.3 mg today – down 15% from your average.
                </p>

                {/* Days until 0mg target */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#4D7EFF]" />
                    <span className="text-sm font-medium text-[#1E1E1E] dark:text-white">
                      Days until 0mg target:
                    </span>
                  </div>
                  <div className="bg-[#F0F4FF] px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-[#4D7EFF]">
                      {daysUntilZero} days left
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#555C67] dark:text-gray-300">
                  Great progress! You're successfully reducing your nicotine
                  intake.
                </p>
              </div>

              {/* Progress Visual - 7 dots for trend/streak */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#1E1E1E] dark:text-gray-300">
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
                  "px-8 py-3 rounded-xl text-white font-medium transition-all duration-200",
                  hasLoggedToday
                    ? "bg-[#3FBF7D] hover:bg-[#3FBF7D]/90"
                    : "bg-[#4D7EFF] hover:bg-[#4D7EFF]/90",
                )}
              >
                <Plus className="w-5 h-5 mr-2" />
                {hasLoggedToday ? "Update Today's Use" : "Log Today's Use"}
              </Button>
            </div>

            {/* Light Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-gray-600"></div>

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
                <Quote className="w-4 h-4 text-[#4D7EFF]" />
                <span className="text-sm font-medium text-[#1E1E1E] dark:text-white opacity-70">
                  Daily Inspiration
                </span>
              </div>
              <blockquote className="text-[#1E1E1E] dark:text-white text-sm leading-relaxed italic font-medium opacity-80">
                "{todaysQuote}"
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Overall Progress Summary Card - New Theme */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-[#1E1E1E] dark:text-white flex items-center gap-2">
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
                        "border-r border-gray-200 dark:border-gray-600",
                      // Add bottom border for top row items
                      !isBottomRow &&
                        "border-b border-gray-200 dark:border-gray-600",
                    )}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <div
                        className={cn(
                          "p-2 rounded-lg bg-[#F0F4FF] dark:bg-gray-700",
                        )}
                      >
                        <Icon className={cn("w-5 h-5", metric.color)} />
                      </div>
                    </div>

                    {/* Label - Above Value */}
                    <div className="text-xs font-medium text-[#555C67] dark:text-gray-400 mb-2 leading-tight">
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
