import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { ArrowLeft, Plus, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Log = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [selectedCraving, setCraving] = useState<string>("");

  const moodOptions = [
    { emoji: "😊", label: "Great", value: "great" },
    { emoji: "😌", label: "Good", value: "good" },
    { emoji: "😐", label: "Okay", value: "okay" },
    { emoji: "😔", label: "Struggling", value: "struggling" },
  ];

  const cravingLevels = [
    { label: "None", value: "none", color: "bg-[#7ED6A3]" },
    { label: "Low", value: "low", color: "bg-yellow-500" },
    { label: "Medium", value: "medium", color: "bg-orange-500" },
    { label: "High", value: "high", color: "bg-red-500" },
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
            Daily Log
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Today's Entry */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#2D2D2D] dark:text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-[#5B8DEF]" />
              Today's Entry
            </CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mood Selection */}
            <div>
              <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                How are you feeling today?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.value)}
                    className={cn(
                      "p-3 rounded-xl border-2 transition-all duration-200 text-center",
                      selectedMood === mood.value
                        ? "border-[#5B8DEF] bg-[#5B8DEF]/10"
                        : "border-gray-200 dark:border-gray-600 hover:border-gray-300",
                    )}
                  >
                    <div className="text-2xl mb-1">{mood.emoji}</div>
                    <div className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                      {mood.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Craving Level */}
            <div>
              <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                Craving Level
              </h3>
              <div className="space-y-2">
                {cravingLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setCraving(level.value)}
                    className={cn(
                      "w-full p-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3",
                      selectedCraving === level.value
                        ? "border-[#5B8DEF] bg-[#5B8DEF]/10"
                        : "border-gray-200 dark:border-gray-600 hover:border-gray-300",
                    )}
                  >
                    <div className={cn("w-4 h-4 rounded-full", level.color)} />
                    <span className="font-medium text-[#2D2D2D] dark:text-white">
                      {level.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full bg-[#5B8DEF] hover:bg-[#5B8DEF]/90 text-white rounded-xl py-3"
                disabled={!selectedMood || !selectedCraving}
              >
                Save Entry
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Entries */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#2D2D2D] dark:text-white">
              Recent Entries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                No entries yet. Start logging your journey today!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[#7ED6A3]/10 dark:bg-[#7ED6A3]/20 border-[#7ED6A3]/30 dark:border-[#7ED6A3]/40 rounded-2xl">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-[#7ED6A3] mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-[#2D2D2D] dark:text-white mb-1">
                Smoke-Free Day
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Mark today as success
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 rounded-2xl">
            <CardContent className="p-4 text-center">
              <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-red-700 dark:text-red-300 mb-1">
                Had a Slip
              </h4>
              <p className="text-xs text-red-600 dark:text-red-400">
                Reset and continue
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Log;
