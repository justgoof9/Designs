import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  X,
  Save,
  Cigarette,
  Wind,
  Pill,
  Brain,
  TrendingDown,
  TrendingUp,
  Minus,
} from "lucide-react";
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
  nicotineProduct?: string;
  nicotineAmount?: string;
  usageComparison?: string;
}

const LogTodayModal: React.FC<LogTodayModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [selectedCraving, setSelectedCraving] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [nicotineAmount, setNicotineAmount] = useState<string>("");
  const [usageComparison, setUsageComparison] = useState<string>("");
  const [showAIEncouragement, setShowAIEncouragement] =
    useState<boolean>(false);

  const yesterdaysUse = "3.2 mg"; // This would come from stored data

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

  const nicotineProducts = [
    {
      id: "cigarette",
      label: "Cigarette",
      icon: <Cigarette className="w-6 h-6" />,
      description: "Traditional cigarettes",
    },
    {
      id: "vape",
      label: "Vape",
      icon: <Wind className="w-6 h-6" />,
      description: "E-cigarettes/vaping",
    },
    {
      id: "pouch",
      label: "Nicotine Pouch",
      icon: <Pill className="w-6 h-6" />,
      description: "Pouches/gum/patches",
    },
  ];

  const usageComparisonOptions = [
    {
      id: "reduced",
      label: "Reduced",
      icon: <TrendingDown className="w-5 h-5" />,
      description: "Used less than yesterday",
      color: "text-[#7ED6A3]",
    },
    {
      id: "same",
      label: "Stayed Same",
      icon: <Minus className="w-5 h-5" />,
      description: "Similar to yesterday",
      color: "text-[#70D6FF]",
    },
    {
      id: "increased",
      label: "Increased",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Used more than yesterday",
      color: "text-orange-500",
    },
  ];

  const isNicotineAmountRequired =
    selectedProduct === "vape" || selectedProduct === "pouch";
  const isFormValid =
    selectedMood &&
    selectedCraving &&
    (!selectedProduct ||
      (selectedProduct &&
        (!isNicotineAmountRequired || nicotineAmount.trim())));

  const getAIEncouragement = () => {
    if (usageComparison === "reduced") {
      return "Great job cutting back again today! You're building incredible momentum. 🌟";
    } else if (usageComparison === "same") {
      return "Consistency is key! Maintaining your level shows great self-control. Keep it up! 💪";
    } else if (usageComparison === "increased") {
      return "That's okay - progress isn't always linear. Tomorrow is a new opportunity to reduce again. 🌱";
    }
    return "Every entry helps us understand your patterns better. You're doing great! ✨";
  };

  const handleSave = () => {
    if (isFormValid) {
      onSave({
        mood: selectedMood,
        cravingLevel: selectedCraving,
        note,
        nicotineProduct: selectedProduct || undefined,
        nicotineAmount: nicotineAmount.trim() || undefined,
        usageComparison: usageComparison || undefined,
      });

      // Show AI encouragement
      setShowAIEncouragement(true);

      // Hide encouragement and close modal after 3 seconds
      setTimeout(() => {
        setShowAIEncouragement(false);
        // Reset form
        setSelectedMood("");
        setSelectedCraving("");
        setNote("");
        setSelectedProduct("");
        setNicotineAmount("");
        setUsageComparison("");
        onClose();
      }, 3000);
    }
  };

  const getNicotineAmountPlaceholder = () => {
    switch (selectedProduct) {
      case "cigarette":
        return "e.g., 12mg (optional)";
      case "vape":
        return "e.g., 6mg, 12mg, 18mg";
      case "pouch":
        return "e.g., 2mg, 4mg, 6mg";
      default:
        return "Enter nicotine amount";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
        {showAIEncouragement ? (
          // AI Encouragement Screen
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <div className="p-4 bg-[#5B8DEF]/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                <Brain className="w-10 h-10 text-[#5B8DEF]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2D2D2D] dark:text-white mb-3">
                  AI Analysis
                </h3>
                <p className="text-[#2D2D2D] dark:text-white leading-relaxed">
                  {getAIEncouragement()}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#5B8DEF] rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-[#5B8DEF] rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-[#5B8DEF] rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </CardContent>
        ) : (
          // Regular Form
          <>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-[#2D2D2D] dark:text-white">
                  Log Today's Use
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
              {/* Yesterday's Use */}
              <div className="bg-[#F4F6FA] dark:bg-gray-700 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#2D2D2D] dark:text-white">
                    Yesterday's use:
                  </span>
                  <span className="text-lg font-bold text-[#5B8DEF]">
                    {yesterdaysUse}
                  </span>
                </div>
              </div>

              {/* Usage Comparison */}
              <div>
                <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                  Compared to yesterday, did you:
                </h3>
                <div className="space-y-3">
                  {usageComparisonOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setUsageComparison(option.id)}
                      className={cn(
                        "w-full p-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3",
                        usageComparison === option.id
                          ? "border-[#5B8DEF] bg-[#5B8DEF]/10"
                          : "border-gray-200 dark:border-gray-600 hover:border-gray-300",
                      )}
                    >
                      <div className={cn("flex-shrink-0", option.color)}>
                        {option.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-[#2D2D2D] dark:text-white">
                          {option.label}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mood Selection */}
              <div>
                <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                  How are you feeling? <span className="text-red-500">*</span>
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
                  Craving Level <span className="text-red-500">*</span>
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
                      <div
                        className={cn("w-4 h-4 rounded-full", level.color)}
                      />
                      <span className="font-medium text-[#2D2D2D] dark:text-white">
                        {level.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nicotine Product Used (Optional) */}
              <div>
                <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                  What did you use? (Optional)
                </h3>
                <div className="space-y-3">
                  {nicotineProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() =>
                        setSelectedProduct(
                          selectedProduct === product.id ? "" : product.id,
                        )
                      }
                      className={cn(
                        "w-full p-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3",
                        selectedProduct === product.id
                          ? "border-[#5B8DEF] bg-[#5B8DEF]/10"
                          : "border-gray-200 dark:border-gray-600 hover:border-gray-300",
                      )}
                    >
                      <div className="text-[#5B8DEF]">{product.icon}</div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-[#2D2D2D] dark:text-white">
                          {product.label}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {product.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nicotine Amount */}
              {selectedProduct && (
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-3">
                    Nicotine Amount
                    {isNicotineAmountRequired && (
                      <span className="text-red-500"> *</span>
                    )}
                    {!isNicotineAmountRequired && (
                      <span className="text-gray-500"> (Optional)</span>
                    )}
                  </h3>
                  <input
                    type="text"
                    value={nicotineAmount}
                    onChange={(e) => setNicotineAmount(e.target.value)}
                    placeholder={getNicotineAmountPlaceholder()}
                    className="w-full px-4 py-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl border-0 text-[#2D2D2D] dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter the nicotine strength (e.g., 6mg, 12mg)
                  </p>
                </div>
              )}

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
                  disabled={!isFormValid}
                  className="flex-1 bg-[#5B8DEF] hover:bg-[#5B8DEF]/90 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>

              {/* Validation Message */}
              {!isFormValid &&
                selectedProduct &&
                isNicotineAmountRequired &&
                !nicotineAmount.trim() && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3">
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Nicotine amount is required for{" "}
                      {selectedProduct === "vape"
                        ? "vapes"
                        : "nicotine pouches"}
                    </p>
                  </div>
                )}
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export { LogTodayModal };
export type { LogData };
