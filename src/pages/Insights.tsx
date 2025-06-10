import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { ArrowLeft, TrendingUp, Clock, DollarSign, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Insights = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: <Clock className="w-6 h-6 text-[#5B8DEF]" />,
      title: "Time Smoke-Free",
      value: "0 days",
      subtitle: "Keep going!",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#7ED6A3]" />,
      title: "Money Saved",
      value: "$0.00",
      subtitle: "Start saving today",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Health Improvements",
      value: "Just Started",
      subtitle: "Benefits coming soon",
    },
    {
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
            Insights
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Overview Card */}
        <Card className="bg-gradient-to-r from-[#5B8DEF] to-[#70D6FF] text-white shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-semibold text-xl mb-2">Your Quit Journey</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Track your progress and see how far you've come on your smoke-free
              journey.
            </p>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl"
            >
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
          ))}
        </div>

        {/* Health Benefits Timeline */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#2D2D2D] dark:text-white">
              Health Benefits Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div>
                  <p className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                    20 minutes
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Heart rate and blood pressure drop
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div>
                  <p className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                    12 hours
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Carbon monoxide level normalizes
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div>
                  <p className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                    2 weeks
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Circulation improves, lung function increases
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Insights;
