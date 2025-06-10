import React, { useState, useEffect } from "react";
import { Moon, Sun, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressDots } from "@/components/ui/progress-dots";
import { AchievementCard } from "@/components/ui/achievement-card";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
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

  // Sample achievements data
  const achievements = [
    { icon: "🌟", title: "Started Journey" },
    { icon: "🎯", title: "Tracker Created" },
    { icon: "🏁", title: "Quit Date Set" },
  ];

  return (
    <div
      className={cn(
        "min-h-screen bg-[#F2F2F7] dark:bg-gray-900 transition-colors duration-200",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Top Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        {/* iOS Status Bar */}
        <div className="flex items-center justify-between text-sm font-semibold text-black dark:text-white mb-2">
          <span>{formatTime(currentTime)}</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-black dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-black dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-black dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
            <span className="ml-2">100%</span>
          </div>
        </div>

        {/* Header Content */}
        <div className="flex items-center justify-between">
          <div></div>
          <h1 className="text-lg font-semibold text-black dark:text-white">
            NicotineFree
          </h1>
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

      {/* Main Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Progress Tracker Card */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
              Today's Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-2xl font-bold text-[#007AFF] mb-2">
                Day 0 – Starting Your Journey
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Every journey begins with a single step. You've got this!
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Progress
              </span>
              <ProgressDots totalDots={7} filledDots={1} />
            </div>
          </CardContent>
        </Card>

        {/* Achievements Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Achievements
            </h2>
            <button className="text-[#007AFF] text-sm font-medium flex items-center gap-1">
              See All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                icon={achievement.icon}
                title={achievement.title}
              />
            ))}
          </div>
        </div>

        {/* Daily Tips Card */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-2xl">💧</div>
              <div className="flex-1">
                <p className="text-gray-900 dark:text-white font-medium mb-2">
                  Daily Tip
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Drink plenty of water to help flush out toxins and keep your
                  body hydrated during your quit journey.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF] hover:text-white rounded-xl"
              >
                See More
              </Button>
              <Button className="flex-1 bg-[#007AFF] hover:bg-[#007AFF]/90 text-white rounded-xl">
                Track Progress
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Motivation Card */}
        <Card className="bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg mb-2">You're in Control</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Remember why you started this journey. Each day smoke-free is a
              victory worth celebrating.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
