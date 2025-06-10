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
        "min-h-screen bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] dark:bg-gradient-to-br dark:from-[#0F0B1C] dark:to-[#1A0D2E] transition-colors duration-500 font-['Inter',sans-serif]",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Header */}
      <div className="bg-white/70 dark:bg-[#1A1426]/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-[#2A2038] px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Achievements
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Progress Overview */}
        <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-6 text-center">
            <div className="text-5xl mb-3">🏆</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              {earnedAchievements.length} of {achievements.length} Earned
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Keep going to unlock more achievements and celebrate your
              progress!
            </p>
          </CardContent>
        </Card>

        {/* Earned Achievements */}
        {earnedAchievements.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#22C55E]" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Earned Achievements
              </h2>
            </div>
            <div className="space-y-3">
              {earnedAchievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden border-l-4 border-l-[#22C55E]"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl p-2 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl shadow-md">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          {achievement.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-100 dark:bg-[#2A2038] text-[#22C55E] px-2 py-1 rounded-full border border-green-200 dark:border-[#3A2A48]">
                            {achievement.category}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
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
            <Lock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Upcoming Achievements
            </h2>
          </div>
          <div className="space-y-3">
            {lockedAchievements.map((achievement) => (
              <Card
                key={achievement.id}
                className="bg-gray-100/80 dark:bg-[#0F0B1C]/60 border border-gray-300/50 dark:border-[#1A1426] shadow-lg rounded-3xl overflow-hidden opacity-75"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl grayscale p-2 bg-gray-200/80 dark:bg-[#2A2038] border border-gray-300/50 dark:border-[#3A2A48] rounded-2xl">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-200 dark:bg-[#2A2038] text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full border border-gray-300 dark:border-[#3A2A48]">
                          {achievement.category}
                        </span>
                        <Lock className="w-3 h-3 text-gray-400 dark:text-gray-500" />
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
