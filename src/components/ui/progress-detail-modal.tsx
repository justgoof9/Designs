import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  X,
  Calendar,
  Cigarette,
  DollarSign,
  Clock,
  TrendingUp,
  Target,
  Award,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  metricType: string | null;
}

const ProgressDetailModal: React.FC<ProgressDetailModalProps> = ({
  isOpen,
  onClose,
  metricType,
}) => {
  if (!isOpen || !metricType) return null;

  // Mock data for each metric type
  const getMetricData = () => {
    switch (metricType) {
      case "days-to-zero":
        return {
          title: "Days to 0mg Target",
          icon: <Calendar className="w-8 h-8 text-white" />,
          mainValue: "17 days left",
          subtitle: "Based on your current reduction plan",
          stats: [
            { label: "Current daily intake", value: "2.3 mg", trend: "down" },
            {
              label: "Weekly reduction goal",
              value: "0.5 mg",
              trend: "neutral",
            },
            { label: "Days completed", value: "8 days", trend: "up" },
            { label: "Success rate", value: "94%", trend: "up" },
          ],
          chartData: [3.8, 3.5, 3.2, 2.9, 2.7, 2.5, 2.3, 2.0], // Weekly progress
          insights: [
            "You're ahead of schedule by 2 days",
            "Your reduction rate is consistent",
            "Weekend patterns show good control",
          ],
        };
      case "units-avoided":
        return {
          title: "Units Avoided",
          icon: <Cigarette className="w-8 h-8 text-white" />,
          mainValue: "47 units total",
          subtitle: "Since starting your journey",
          stats: [
            { label: "Cigarettes avoided", value: "23", trend: "up" },
            { label: "Vapes avoided", value: "18", trend: "up" },
            { label: "Pouches avoided", value: "6", trend: "up" },
            { label: "Today's progress", value: "3 units", trend: "up" },
          ],
          chartData: [2, 4, 3, 5, 6, 7, 8, 12], // Daily avoided units
          insights: [
            "Cigarettes are your main avoided type",
            "Weekends show higher avoidance",
            "You're building strong habits",
          ],
        };
      case "money-saved":
        return {
          title: "Money Saved",
          icon: <DollarSign className="w-8 h-8 text-white" />,
          mainValue: "$127.50",
          subtitle: "Total savings since starting",
          stats: [
            { label: "Daily average saved", value: "$15.95", trend: "up" },
            { label: "Weekly projection", value: "$111.65", trend: "up" },
            { label: "Monthly projection", value: "$478.50", trend: "up" },
            { label: "Yearly projection", value: "$5,822", trend: "up" },
          ],
          chartData: [12, 15, 18, 22, 28, 35, 42, 48], // Cumulative savings
          insights: [
            "You could buy a nice dinner each week",
            "Annual savings = vacation fund",
            "Consistent saving pattern",
          ],
        };
      case "time-saved":
        return {
          title: "Time Saved",
          icon: <Clock className="w-8 h-8 text-white" />,
          mainValue: "6 hrs 45 mins",
          subtitle: "Time not spent smoking/vaping",
          stats: [
            { label: "Daily time saved", value: "52 mins", trend: "up" },
            { label: "Weekly time saved", value: "6.1 hours", trend: "up" },
            { label: "Monthly projection", value: "26 hours", trend: "up" },
            { label: "Yearly projection", value: "13 days", trend: "up" },
          ],
          chartData: [35, 45, 52, 58, 65, 72, 78, 85], // Minutes saved daily
          insights: [
            "That's almost a full day per month",
            "You could learn a new skill",
            "More time for family & hobbies",
          ],
        };
      default:
        return null;
    }
  };

  const data = getMetricData();
  if (!data) return null;

  // Simple bar chart component
  const SimpleChart = ({ data, color }: { data: number[]; color: string }) => {
    const maxValue = Math.max(...data);
    return (
      <div className="flex items-end gap-2 h-24 px-4">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={cn(
                "w-full rounded-t-lg transition-all duration-500",
                color,
              )}
              style={{
                height: `${(value / maxValue) * 100}%`,
                minHeight: "8px",
              }}
            />
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-3 h-3 text-[#22C55E]" />;
      case "down":
        return <TrendingUp className="w-3 h-3 text-[#EF4444] rotate-180" />;
      default:
        return <Target className="w-3 h-3 text-[#8B5CF6]" />;
    }
  };

  const getChartColor = () => {
    switch (metricType) {
      case "days-to-zero":
        return "bg-gradient-to-t from-[#8B5CF6] to-[#A855F7]";
      case "units-avoided":
        return "bg-gradient-to-t from-[#22C55E] to-[#16A34A]";
      case "money-saved":
        return "bg-gradient-to-t from-[#22C55E] to-[#16A34A]";
      case "time-saved":
        return "bg-gradient-to-t from-[#3B82F6] to-[#1D4ED8]";
      default:
        return "bg-gradient-to-t from-[#8B5CF6] to-[#A855F7]";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4 font-['Inter',sans-serif]">
      <Card className="bg-white/90 dark:bg-[#1A1426]/90 backdrop-blur-2xl border border-gray-200/50 dark:border-[#2A2038] shadow-2xl rounded-3xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-2xl shadow-lg">
                {data.icon}
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  {data.title}
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {data.subtitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Main Value */}
          <div className="text-center p-6 bg-gray-100/80 dark:bg-[#2A2038] rounded-2xl border border-gray-200/50 dark:border-[#3A2A48]">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent mb-2">
              {data.mainValue}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-[#22C55E]" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Keep up the great work!
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#8B5CF6]" />
              <h3 className="font-bold text-gray-900 dark:text-white">
                Progress Chart
              </h3>
            </div>
            <div className="bg-gray-100/80 dark:bg-[#2A2038] rounded-2xl border border-gray-200/50 dark:border-[#3A2A48] p-4">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">
                Last 8 days
              </div>
              <SimpleChart data={data.chartData} color={getChartColor()} />
            </div>
          </div>

          {/* Detailed Stats */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 dark:text-white">
              Detailed Breakdown
            </h3>
            <div className="space-y-2">
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-100/80 dark:bg-[#2A2038] rounded-2xl border border-gray-200/50 dark:border-[#3A2A48]"
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    {stat.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </span>
                    {getTrendIcon(stat.trend)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 dark:text-white">
              Key Insights
            </h3>
            <div className="space-y-2">
              {data.insights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-purple-50/80 dark:bg-[#2A2038] rounded-2xl border border-purple-200/50 dark:border-[#3A2A48]"
                >
                  <div className="w-2 h-2 bg-[#8B5CF6] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {insight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Motivation */}
          <div className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-2xl p-4 text-center">
            <div className="text-white font-bold mb-1">
              You're doing amazing! 🎉
            </div>
            <div className="text-white/90 text-sm">
              Every step forward is a victory worth celebrating
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ProgressDetailModal };
