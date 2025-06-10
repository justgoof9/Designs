import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Clock, DollarSign, Heart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  statType: "time" | "money" | "health" | "streak" | null;
}

const StatDetailModal: React.FC<StatDetailModalProps> = ({
  isOpen,
  onClose,
  statType,
}) => {
  if (!isOpen || !statType) return null;

  const getStatDetails = () => {
    switch (statType) {
      case "time":
        return {
          icon: <Clock className="w-8 h-8 text-[#5B8DEF]" />,
          title: "Time Smoke-Free",
          currentValue: "0 days, 0 hours, 0 minutes",
          milestones: [
            { time: "20 minutes", benefit: "Heart rate normalizes" },
            { time: "12 hours", benefit: "Carbon monoxide clears" },
            { time: "2 weeks", benefit: "Circulation improves" },
            { time: "1 month", benefit: "Lung function increases by 30%" },
            { time: "1 year", benefit: "Heart disease risk drops by 50%" },
          ],
          color: "bg-[#5B8DEF]",
        };
      case "money":
        return {
          icon: <DollarSign className="w-8 h-8 text-[#7ED6A3]" />,
          title: "Money Saved",
          currentValue: "$0.00",
          breakdown: [
            { period: "Per day", amount: "$12.00", note: "Average pack cost" },
            { period: "Per week", amount: "$84.00", note: "Weekly savings" },
            { period: "Per month", amount: "$360.00", note: "Monthly savings" },
            { period: "Per year", amount: "$4,380.00", note: "Annual savings" },
          ],
          tip: "What could you buy with your savings? A vacation, new gadget, or invest in your future!",
          color: "bg-[#7ED6A3]",
        };
      case "health":
        return {
          icon: <Heart className="w-8 h-8 text-red-500" />,
          title: "Health Improvements",
          currentValue: "Just Getting Started",
          benefits: [
            {
              timeframe: "Within 20 minutes",
              changes: ["Heart rate drops", "Blood pressure decreases"],
            },
            {
              timeframe: "Within 12 hours",
              changes: ["Carbon monoxide levels normalize"],
            },
            {
              timeframe: "Within 2 weeks",
              changes: ["Circulation improves", "Walking becomes easier"],
            },
            {
              timeframe: "Within 3 months",
              changes: ["Lung function increases", "Coughing decreases"],
            },
          ],
          color: "bg-red-500",
        };
      case "streak":
        return {
          icon: <TrendingUp className="w-8 h-8 text-[#70D6FF]" />,
          title: "Current Streak",
          currentValue: "0 days",
          streakInfo: {
            longestStreak: "0 days",
            totalAttempts: "1",
            averageStreak: "Starting fresh",
          },
          tips: [
            "Take it one day at a time",
            "Identify your triggers",
            "Find healthy alternatives",
            "Celebrate small wins",
            "Build a support network",
          ],
          color: "bg-[#70D6FF]",
        };
      default:
        return null;
    }
  };

  const details = getStatDetails();
  if (!details) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl w-full max-w-sm max-h-[80vh] overflow-y-auto">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {details.icon}
              <CardTitle className="text-lg font-semibold text-[#2D2D2D] dark:text-white">
                {details.title}
              </CardTitle>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Value */}
          <div className="text-center p-4 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl">
            <p className="text-2xl font-bold text-[#5B8DEF] mb-1">
              {details.currentValue}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Since you started
            </p>
          </div>

          {/* Time-specific content */}
          {statType === "time" && details.milestones && (
            <div>
              <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                Upcoming Milestones
              </h3>
              <div className="space-y-3">
                {details.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl"
                  >
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                        {milestone.time}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {milestone.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Money-specific content */}
          {statType === "money" && details.breakdown && (
            <div>
              <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                Potential Savings
              </h3>
              <div className="space-y-2">
                {details.breakdown.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                        {item.period}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {item.note}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-[#7ED6A3]">
                      {item.amount}
                    </p>
                  </div>
                ))}
              </div>
              {details.tip && (
                <div className="mt-4 p-3 bg-[#7ED6A3]/10 rounded-xl">
                  <p className="text-sm text-[#2D2D2D] dark:text-white">
                    💡 {details.tip}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Health-specific content */}
          {statType === "health" && details.benefits && (
            <div>
              <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                Health Recovery Timeline
              </h3>
              <div className="space-y-3">
                {details.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl"
                  >
                    <p className="text-sm font-medium text-[#2D2D2D] dark:text-white mb-2">
                      {benefit.timeframe}
                    </p>
                    <ul className="space-y-1">
                      {benefit.changes.map((change, changeIndex) => (
                        <li
                          key={changeIndex}
                          className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Streak-specific content */}
          {statType === "streak" && details.streakInfo && details.tips && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                  Streak Statistics
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between items-center p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl">
                    <span className="text-sm text-[#2D2D2D] dark:text-white">
                      Longest streak
                    </span>
                    <span className="font-bold text-[#70D6FF]">
                      {details.streakInfo.longestStreak}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl">
                    <span className="text-sm text-[#2D2D2D] dark:text-white">
                      Total attempts
                    </span>
                    <span className="font-bold text-[#70D6FF]">
                      {details.streakInfo.totalAttempts}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                  Success Tips
                </h3>
                <div className="space-y-2">
                  {details.tips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 bg-[#F4F6FA] dark:bg-gray-700 rounded-lg"
                    >
                      <div className="w-1.5 h-1.5 bg-[#70D6FF] rounded-full"></div>
                      <p className="text-sm text-[#2D2D2D] dark:text-white">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Close Button */}
          <Button
            onClick={onClose}
            className="w-full bg-[#5B8DEF] hover:bg-[#5B8DEF]/90 text-white rounded-xl"
          >
            Got it!
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export { StatDetailModal };
