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
      icon: <Clock className="w-6 h-6 text-[#A259FF]" />,
      title: "Time Smoke-Free",
      value: "0 days",
      subtitle: "Keep going!",
    },
    {
      id: "money" as const,
      icon: <DollarSign className="w-6 h-6 text-[#00FF9D]" />,
      title: "Money Saved",
      value: "$0.00",
      subtitle: "Start saving today",
    },
    {
      id: "health" as const,
      icon: <Heart className="w-6 h-6 text-[#4EDCFF]" />,
      title: "Health Improvements",
      value: "Just Started",
      subtitle: "Benefits coming soon",
    },
    {
      id: "streak" as const,
      icon: <TrendingUp className="w-6 h-6 text-[#00FFAA]" />,
      title: "Current Streak",
      value: "0 days",
      subtitle: "Your journey begins",
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen bg-[#0D0C1D] transition-colors duration-200 font-['Inter',sans-serif]",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-[#2A2A3A] px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-[#8A8A8A]" />
          </button>
          <h1 className="text-lg font-bold text-[#FFFFFF]">Your Insights</h1>
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
              <Card className="bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl hover:shadow-[0_0_32px_rgba(162,89,255,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 pointer-events-none" />
                <CardContent className="p-4 text-center relative z-10">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                      {stat.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm text-[#EDEDED] mb-1">
                    {stat.title}
                  </h4>
                  <p className="text-lg font-bold text-[#A259FF] mb-1 drop-shadow-[0_0_8px_rgba(162,89,255,0.4)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#8A8A8A]">{stat.subtitle}</p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* AI Analysis Card */}
        <Card className="bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 pointer-events-none" />
          <CardContent className="p-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-[#A259FF] to-[#B85FFF] rounded-2xl shadow-[0_0_20px_rgba(162,89,255,0.4)]">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-[#FFFFFF]">
                  AI Reflection
                </h3>
                <p className="text-[#B0B0B0] text-sm leading-relaxed mb-3">
                  You're at the beginning of your journey! Based on similar
                  success stories, the first week is crucial. Your commitment to
                  tracking shows great dedication.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#A259FF] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#4EDCFF] rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse delay-200"></div>
                  <span className="text-[#8A8A8A] text-xs ml-2">
                    Analyzing patterns...
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Quote */}
        <Card className="bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />
          <CardContent className="p-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-[#4EDCFF] to-[#3A9BDC] rounded-2xl shadow-[0_0_20px_rgba(78,220,255,0.4)]">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#FFFFFF] mb-2">
                  Daily Inspiration
                </h3>
                <blockquote className="text-[#B0B0B0] text-sm leading-relaxed italic mb-3">
                  "Every small step forward is a victory. The courage to begin
                  is often the hardest part, and you've already taken it."
                </blockquote>
                <p className="text-xs text-[#555555]">
                  — Your quit journey companion
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Progress Summary */}
        <Card className="bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-purple-500/5 pointer-events-none" />
          <CardHeader className="relative z-10">
            <CardTitle className="text-lg font-bold text-[#FFFFFF]">
              Quick Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                <span className="text-sm font-medium text-[#EDEDED]">
                  Days completed
                </span>
                <span className="text-lg font-bold text-[#A259FF] drop-shadow-[0_0_8px_rgba(162,89,255,0.4)]">
                  0
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                <span className="text-sm font-medium text-[#EDEDED]">
                  Money saved
                </span>
                <span className="text-lg font-bold text-[#00FF9D] drop-shadow-[0_0_8px_rgba(0,255,157,0.4)]">
                  $0.00
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                <span className="text-sm font-medium text-[#EDEDED]">
                  Health score
                </span>
                <span className="text-lg font-bold text-[#4EDCFF] drop-shadow-[0_0_8px_rgba(78,220,255,0.4)]">
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
