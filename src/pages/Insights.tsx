import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { StatDetailModal } from "@/components/ui/stat-detail-modal";
import {
  ArrowLeft,
  TrendingUp,
  Clock,
  DollarSign,
  Heart,
  Brain,
  Quote,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Insights = () => {
  const navigate = useNavigate();
  const [selectedStat, setSelectedStat] = useState<
    "time" | "money" | "health" | "streak" | null
  >(null);

  const stats = [
    {
      id: "time" as const,
      icon: <Clock className="w-6 h-6 text-[#5B8DEF]" />,
      title: "Time Smoke-Free",
      value: "0 days",
      subtitle: "Keep going!",
    },
    {
      id: "money" as const,
      icon: <DollarSign className="w-6 h-6 text-[#7ED6A3]" />,
      title: "Money Saved",
      value: "$0.00",
      subtitle: "Start saving today",
    },
    {
      id: "health" as const,
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Health Improvements",
      value: "Just Started",
      subtitle: "Benefits coming soon",
    },
    {
      id: "streak" as const,
      icon: <TrendingUp className="w-6 h-6 text-[#70D6FF]" />,
      title: "Current Streak",
      value: "0 days",
      subtitle: "Your journey begins",
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen bg-[#F4F6FA] dark:bg-gray-900 transition-colors duration-200",
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
          <h1 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">
            Your Insights
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Stats Grid - Now Clickable */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <button
              key={stat.id}
              onClick={() => setSelectedStat(stat.id)}
              className="text-left transition-all duration-200 hover:scale-105"
            >
              <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl hover:shadow-xl">
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <h4 className="font-semibold text-sm text-[#2D2D2D] dark:text-white mb-1">
                    {stat.title}
                  </h4>
                  <p className="text-lg font-bold text-[#5B8DEF] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {stat.subtitle}
                  </p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* AI Analysis Card */}
        <Card className="bg-gradient-to-r from-[#5B8DEF] to-[#70D6FF] text-white shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">AI Reflection</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-3">
                  You're at the beginning of your journey! Based on similar
                  success stories, the first week is crucial. Your commitment to
                  tracking shows great dedication.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse delay-200"></div>
                  <span className="text-white/70 text-xs ml-2">
                    Analyzing patterns...
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Quote */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#5B8DEF]/10 rounded-full">
                <Quote className="w-6 h-6 text-[#5B8DEF]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-2">
                  Daily Inspiration
                </h3>
                <blockquote className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic mb-3">
                  "Every small step forward is a victory. The courage to begin
                  is often the hardest part, and you've already taken it."
                </blockquote>
                <p className="text-xs text-gray-500">
                  — Your quit journey companion
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Progress Summary */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#2D2D2D] dark:text-white">
              Quick Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl">
                <span className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                  Days completed
                </span>
                <span className="text-lg font-bold text-[#5B8DEF]">0</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl">
                <span className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                  Money saved
                </span>
                <span className="text-lg font-bold text-[#7ED6A3]">$0.00</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl">
                <span className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                  Health score
                </span>
                <span className="text-lg font-bold text-red-500">
                  Improving
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stat Detail Modal */}
      <StatDetailModal
        isOpen={selectedStat !== null}
        onClose={() => setSelectedStat(null)}
        statType={selectedStat}
      />

      <BottomNavigation />
    </div>
  );
};

export default Insights;
