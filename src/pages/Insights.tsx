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
      icon: <Clock className="w-6 h-6 text-[#6B46FF] dark:text-[#8B5CF6]" />,
      title: "Time Smoke-Free",
      value: "0 days",
      subtitle: "Keep going!",
    },
    {
      id: "money" as const,
      icon: (
        <DollarSign className="w-6 h-6 text-[#00B976] dark:text-[#22C55E]" />
      ),
      title: "Money Saved",
      value: "$0.00",
      subtitle: "Start saving today",
    },
    {
      id: "health" as const,
      icon: <Heart className="w-6 h-6 text-[#0B8FD9] dark:text-[#3B82F6]" />,
      title: "Health Improvements",
      value: "Just Started",
      subtitle: "Benefits coming soon",
    },
    {
      id: "streak" as const,
      icon: (
        <TrendingUp className="w-6 h-6 text-[#00B976] dark:text-[#22C55E]" />
      ),
      title: "Current Streak",
      value: "0 days",
      subtitle: "Your journey begins",
    },
  ];

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
              className="text-left transition-all duration-300 hover:scale-105"
            >
              <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl hover:shadow-2xl overflow-hidden">
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-2xl bg-gray-100/80 dark:bg-[#2A2038] border border-gray-200/50 dark:border-[#3A2A48]">
                      {stat.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-300 mb-1">
                    {stat.title}
                  </h4>
                  <p className="text-lg font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.subtitle}
                  </p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* AI Analysis Card */}
        <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-2xl shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  AI Reflection
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                  You're at the beginning of your journey! Based on similar
                  success stories, the first week is crucial. Your commitment to
                  tracking shows great dedication.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse delay-200"></div>
                  <span className="text-gray-500 dark:text-gray-400 text-xs ml-2">
                    Analyzing patterns...
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Quote */}
        <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-2xl shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Daily Inspiration
                </h3>
                <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic mb-3">
                  "Every small step forward is a victory. The courage to begin
                  is often the hardest part, and you've already taken it."
                </blockquote>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  — Your quit journey companion
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Progress Summary */}
        <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
              Quick Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-100/80 dark:bg-[#2A2038] border border-gray-200/50 dark:border-[#3A2A48] rounded-2xl">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  Days completed
                </span>
                <span className="text-lg font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                  0
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-100/80 dark:bg-[#2A2038] border border-gray-200/50 dark:border-[#3A2A48] rounded-2xl">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  Money saved
                </span>
                <span className="text-lg font-bold text-[#22C55E]">$0.00</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-100/80 dark:bg-[#2A2038] border border-gray-200/50 dark:border-[#3A2A48] rounded-2xl">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  Health score
                </span>
                <span className="text-lg font-bold text-[#3B82F6]">
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
