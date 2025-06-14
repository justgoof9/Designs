import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  X,
  Calendar,
  Cigarette,
  DollarSign,
  Clock,
  TrendingUp,
  Target,
  Wind,
  Pill,
  BarChart3,
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

  // Dynamic data for each metric type - unique and realistic patterns
  const getMetricData = () => {
    switch (metricType) {
      case "days-to-zero":
        return {
          title: "Days to 0mg",
          chartData: [4.2, 3.8, 3.5, 3.1, 2.9, 2.5, 2.3], // Decreasing nicotine intake (mg)
          chartLabel: "Daily nicotine intake (mg)",
          chartColor: "bg-[#8B5CF6]",
          items: [
            {
              icon: <Target className="w-5 h-5" />,
              label: "Target Date",
              value: "17 days left",
            },
            {
              icon: <TrendingUp className="w-5 h-5" />,
              label: "Daily Progress",
              value: "2.3mg today",
            },
            {
              icon: <Calendar className="w-5 h-5" />,
              label: "Days Completed",
              value: "8 days",
            },
          ],
        };
      case "units-avoided":
        return {
          title: "Units Avoided",
          chartData: [1, 2, 3, 4, 6, 8, 12], // Increasing units avoided per day
          chartLabel: "Units avoided per day",
          chartColor: "bg-[#22C55E]",
          items: [
            {
              icon: <Cigarette className="w-5 h-5" />,
              label: "Cigarettes",
              value: "12",
            },
            { icon: <Wind className="w-5 h-5" />, label: "Vapes", value: "8" },
            {
              icon: <Pill className="w-5 h-5" />,
              label: "Pouches",
              value: "4",
            },
          ],
        };
      case "money-saved":
        return {
          title: "Money Saved",
          chartData: [14, 28, 45, 62, 83, 105, 127], // Cumulative savings growing ($)
          chartLabel: "Total savings ($)",
          chartColor: "bg-[#22C55E]",
          items: [
            {
              icon: <DollarSign className="w-5 h-5" />,
              label: "Total Saved",
              value: "$127.50",
            },
            {
              icon: <Calendar className="w-5 h-5" />,
              label: "Daily Average",
              value: "$15.95",
            },
            {
              icon: <TrendingUp className="w-5 h-5" />,
              label: "Monthly Goal",
              value: "$478.50",
            },
          ],
        };
      case "time-saved":
        return {
          title: "Time Saved",
          chartData: [25, 35, 42, 48, 58, 65, 75], // Minutes saved per day (growing trend)
          chartLabel: "Daily time saved (minutes)",
          chartColor: "bg-[#3B82F6]",
          items: [
            {
              icon: <Clock className="w-5 h-5" />,
              label: "Total Time",
              value: "6h 45m",
            },
            {
              icon: <Calendar className="w-5 h-5" />,
              label: "Daily Average",
              value: "52 mins",
            },
            {
              icon: <TrendingUp className="w-5 h-5" />,
              label: "Weekly Total",
              value: "6.1 hours",
            },
          ],
        };
      default:
        return null;
    }
  };

  const data = getMetricData();
  if (!data) return null;

  // Handle backdrop click to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Simple mini chart component with fixed rendering
  const MiniChart = ({
    data,
    color,
    label,
  }: {
    data: number[];
    color: string;
    label: string;
  }) => {
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);

    return (
      <div className="bg-gray-50/80 dark:bg-[#2A2038]/40 rounded-2xl p-4 border border-gray-200/50 dark:border-[#3A2A48]/50">
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="w-4 h-4 text-[#8B5CF6]" />
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {label}
          </span>
        </div>

        {/* Chart Container with fixed height */}
        <div className="h-16 flex items-end justify-between gap-1 mb-3">
          {data.map((value, index) => {
            // Calculate height percentage - ensure visibility
            const range = maxValue - minValue;
            const heightPercent =
              range === 0 ? 70 : ((value - minValue) / range) * 100;
            const finalHeight = Math.max(heightPercent, 15); // Minimum 15% height

            return (
              <div key={index} className="flex flex-col items-center flex-1">
                {/* Value label on top */}
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 h-4">
                  {value}
                </div>
                {/* Bar */}
                <div className="w-full flex flex-col justify-end h-12">
                  <div
                    className={cn(
                      "w-full rounded-t transition-all duration-500",
                      color,
                    )}
                    style={{
                      height: `${finalHeight}%`,
                      minHeight: "8px",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
                {/* Day label */}
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  D{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Range indicators */}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-[#3A2A48] pt-2">
          <span>Min: {minValue}</span>
          <span>Max: {maxValue}</span>
        </div>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-['Inter',sans-serif]"
      onClick={handleBackdropClick}
    >
      <Card className="bg-white/95 dark:bg-[#1A1426]/95 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-2xl rounded-3xl w-full max-w-xs">
        {/* Header */}
        <CardHeader className="pb-4 text-center">
          <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
            {data.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Mini Chart */}
          <MiniChart
            data={data.chartData}
            color={data.chartColor}
            label={data.chartLabel}
          />

          {/* Items */}
          {data.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-purple-50/80 dark:bg-[#2A2038]/60 rounded-2xl border border-purple-200/50 dark:border-[#3A2A48]/50"
            >
              <div className="flex items-center gap-3">
                <div className="text-[#8B5CF6]">{item.icon}</div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  {item.label}
                </span>
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                {item.value}
              </div>
            </div>
          ))}

          {/* Close Button */}
          <div className="pt-2">
            <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] text-white rounded-2xl shadow-lg border-0 transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ProgressDetailModal };
