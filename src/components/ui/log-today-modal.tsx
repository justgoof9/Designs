import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Save } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogTodayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: LogData) => void;
}

interface LogData {
  mood: string;
  cravingLevel: string;
  note: string;
}

const LogTodayModal: React.FC<LogTodayModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [selectedCraving, setSelectedCraving] = useState<string>("");
  const [note, setNote] = useState<string>("");

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

  const handleSave = () => {
    if (selectedMood && selectedCraving) {
      onSave({
        mood: selectedMood,
        cravingLevel: selectedCraving,
        note,
      });
      // Reset form
      setSelectedMood("");
      setSelectedCraving("");
      setNote("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl w-full max-w-sm max-h-[80vh] overflow-y-auto">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-[#2D2D2D] dark:text-white">
              Log Today
            </CardTitle>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
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
              How are you feeling?
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
                  onClick={() => setSelectedCraving(level.value)}
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

          {/* Note */}
          <div>
            <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
              Quick Note (Optional)
            </h3>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="How was your day? Any thoughts or reflections..."
              className="w-full px-4 py-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl border-0 text-[#2D2D2D] dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5B8DEF] resize-none"
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50 rounded-xl"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!selectedMood || !selectedCraving}
              className="flex-1 bg-[#5B8DEF] hover:bg-[#5B8DEF]/90 text-white rounded-xl"
            >
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { LogTodayModal };
export type { LogData };
