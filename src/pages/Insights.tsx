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
        "min-h-screen bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] dark:bg-[#000000] transition-colors duration-500 font-['Inter',sans-serif]",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Header */}
      <div className="bg-white/70 dark:bg-[#1A1A1A] border-b border-gray-200/50 dark:border-[#333333] px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500 dark:text-[#8A8A8A]" />
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
              <Card className="bg-white/80 dark:bg-[#1A1A1A] border border-gray-200/50 dark:border-[#333333] shadow-xl dark:shadow-none rounded-3xl hover:shadow-2xl overflow-hidden">
                <CardContent className="p-4 text-center relative z-10">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-2xl bg-gray-100/80 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-white/10">
                      {stat.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-[#EDEDED] mb-1">
                    {stat.title}
                  </h4>
                  <p className="text-lg font-bold text-[#6B46FF] dark:text-[#A259FF] mb-1 drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(162,89,255,0.4)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-[#8A8A8A]">
                    {stat.subtitle}
                  </p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* AI Analysis Card */}
        <Card className="bg-white/80 dark:bg-[#1A1A1A] border border-gray-200/50 dark:border-[#333333] shadow-xl dark:shadow-none rounded-3xl overflow-hidden">
          <CardContent className="p-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-[#6B46FF] to-[#8B5CF6] dark:from-[#A259FF] dark:to-[#B85FFF] rounded-2xl shadow-lg dark:shadow-[0_0_20px_rgba(162,89,255,0.4)]">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-[#FFFFFF]">
                  AI Reflection
                </h3>
                <p className="text-gray-700 dark:text-[#B0B0B0] text-sm leading-relaxed mb-3">
                  You're at the beginning of your journey! Based on similar
                  success stories, the first week is crucial. Your commitment to
                  tracking shows great dedication.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#6B46FF] dark:bg-[#A259FF] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#0B8FD9] dark:bg-[#4EDCFF] rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-[#00B976] dark:bg-[#00FF9D] rounded-full animate-pulse delay-200"></div>
                  <span className="text-gray-500 dark:text-[#8A8A8A] text-xs ml-2">
                    Analyzing patterns...
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Quote */}
        <Card className="bg-white/80 dark:bg-[#1A1A1A] border border-gray-200/50 dark:border-[#333333] shadow-xl dark:shadow-none rounded-3xl overflow-hidden">
          <CardContent className="p-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-[#0B8FD9] to-[#3B82F6] dark:from-[#4EDCFF] dark:to-[#3A9BDC] rounded-2xl shadow-lg dark:shadow-[0_0_20px_rgba(78,220,255,0.4)]">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-[#FFFFFF] mb-2">
                  Daily Inspiration
                </h3>
                <blockquote className="text-gray-700 dark:text-[#B0B0B0] text-sm leading-relaxed italic mb-3">
                  "Every small step forward is a victory. The courage to begin
                  is often the hardest part, and you've already taken it."
                </blockquote>
                <p className="text-xs text-gray-500 dark:text-[#555555]">
                  — Your quit journey companion
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Progress Summary */}
        <Card className="bg-white/80 dark:bg-[#1A1A1A] border border-gray-200/50 dark:border-[#333333] shadow-xl dark:shadow-none rounded-3xl overflow-hidden">
          <CardHeader className="relative z-10">
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-[#FFFFFF]">
              Quick Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-100/80 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl">
                <span className="text-sm font-medium text-gray-800 dark:text-[#EDEDED]">
                  Days completed
                </span>
                <span className="text-lg font-bold text-[#6B46FF] dark:text-[#A259FF] drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(162,89,255,0.4)]">
                  0
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-100/80 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl">
                <span className="text-sm font-medium text-gray-800 dark:text-[#EDEDED]">
                  Money saved
                </span>
                <span className="text-lg font-bold text-[#00B976] dark:text-[#00FF9D] drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(0,255,157,0.4)]">
                  $0.00
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-100/80 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl">
                <span className="text-sm font-medium text-gray-800 dark:text-[#EDEDED]">
                  Health score
                </span>
                <span className="text-lg font-bold text-[#0B8FD9] dark:text-[#4EDCFF] drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(78,220,255,0.4)]">
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
