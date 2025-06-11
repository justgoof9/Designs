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

  // Mock data for each metric type - simplified for small popup
  const getMetricData = () => {
    switch (metricType) {
      case "days-to-zero":
        return {
          title: "Days to 0mg",
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
