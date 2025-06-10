import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { ArrowLeft, Lock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Achievements = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      id: 1,
      icon: "🌟",
      title: "Journey Begins",
      description: "Started your quit smoking journey",
      earned: true,
      date: "Today",
      category: "Milestone",
    },
    {
      id: 2,
      icon: "🎯",
      title: "Tracker Created",
      description: "Set up your progress tracking",
      earned: true,
      date: "Today",
      category: "Setup",
    },
    {
      id: 3,
      icon: "🏁",
      title: "Quit Date Set",
      description: "Committed to a quit date",
      earned: true,
      date: "Today",
      category: "Planning",
    },
    {
      id: 4,
      icon: "⏰",
      title: "First Day",
      description: "Complete your first 24 hours smoke-free",
      earned: false,
      category: "Time",
    },
    {
      id: 5,
      icon: "🗓️",
      title: "One Week Strong",
      description: "Smoke-free for 7 consecutive days",
      earned: false,
      category: "Time",
    },
    {
      id: 6,
      icon: "🏆",
      title: "Monthly Champion",
      description: "30 days without smoking",
      earned: false,
      category: "Time",
    },
    {
      id: 7,
      icon: "💎",
      title: "Quarter Master",
      description: "90 days of freedom",
      earned: false,
      category: "Time",
    },
    {
      id: 8,
      icon: "💪",
      title: "Health Warrior",
      description: "Log 10 healthy days in a row",
      earned: false,
      category: "Health",
    },
    {
      id: 9,
      icon: "💰",
      title: "Money Saver",
      description: "Save your first $100",
      earned: false,
      category: "Financial",
    },
  ];

  const earnedAchievements = achievements.filter((a) => a.earned);
  const lockedAchievements = achievements.filter((a) => !a.earned);

  return (
    <div
      className={cn(
        "min-h-screen bg-[#F2F2F7] dark:bg-gray-900 transition-colors duration-200",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <h1 className="text-lg font-semibold text-black dark:text-white">
            Achievements
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Progress Overview */}
        <Card className="bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-semibold text-xl mb-2">
              {earnedAchievements.length} of {achievements.length} Earned
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Keep going to unlock more achievements and celebrate your
              progress!
            </p>
          </CardContent>
        </Card>

        {/* Earned Achievements */}
        {earnedAchievements.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Earned Achievements
              </h2>
            </div>
            <div className="space-y-3">
              {earnedAchievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl border-l-4 border-l-[#007AFF]"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {achievement.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-[#007AFF]/10 text-[#007AFF] px-2 py-1 rounded-full">
                            {achievement.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            Earned {achievement.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Locked Achievements */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Upcoming Achievements
            </h2>
          </div>
          <div className="space-y-3">
            {lockedAchievements.map((achievement) => (
              <Card
                key={achievement.id}
                className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl opacity-75"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl grayscale">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                          {achievement.category}
                        </span>
                        <Lock className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Achievements;
