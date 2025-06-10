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
    { label: "None", value: "none", color: "bg-[#00B976] dark:bg-[#00FF9D]" },
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
      color: "text-[#00B976] dark:text-[#00FF9D]",
    },
    {
      id: "same",
      label: "Stayed Same",
      icon: <Minus className="w-5 h-5" />,
      description: "Similar to yesterday",
      color: "text-[#0B8FD9] dark:text-[#4EDCFF]",
    },
    {
      id: "increased",
      label: "Increased",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Used more than yesterday",
      color: "text-[#DC2626] dark:text-[#FF6B6B]",
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
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4 font-['Inter',sans-serif]">
      <Card className="bg-white/90 dark:bg-black/40 backdrop-blur-2xl border border-gray-200/50 dark:border-white/20 shadow-2xl rounded-3xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-cyan-50/50 dark:from-purple-500/10 dark:to-cyan-500/10 pointer-events-none rounded-3xl" />
        {showAIEncouragement ? (
          // AI Encouragement Screen
          <CardContent className="p-8 text-center relative z-10">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-[#6B46FF] to-[#8B5CF6] dark:from-[#A259FF] dark:to-[#B85FFF] rounded-3xl w-24 h-24 mx-auto flex items-center justify-center shadow-xl dark:shadow-[0_0_32px_rgba(162,89,255,0.6)]">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-[#FFFFFF] mb-3">
                  AI Analysis
                </h3>
                <p className="text-gray-700 dark:text-[#B0B0B0] leading-relaxed">
                  {getAIEncouragement()}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-[#6B46FF] dark:bg-[#A259FF] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#0B8FD9] dark:bg-[#4EDCFF] rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-[#00B976] dark:bg-[#00FF9D] rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </CardContent>
        ) : (
          // Regular Form
          <>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-[#FFFFFF]">
                  Log Today's Use
                </CardTitle>
                <button
                  onClick={onClose}
                  className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-[#8A8A8A]" />
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-[#B0B0B0]">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              {/* Yesterday's Use */}
              <div className="bg-gray-100/80 dark:bg-black/30 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 p-4 rounded-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800 dark:text-[#EDEDED]">
                    Yesterday's use:
                  </span>
                  <span className="text-lg font-bold text-[#6B46FF] dark:text-[#A259FF] drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(162,89,255,0.4)]">
                    {yesterdaysUse}
                  </span>
                </div>
              </div>

              {/* Usage Comparison */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-[#FFFFFF] mb-3">
                  Compared to yesterday, did you:
                </h3>
                <div className="space-y-3">
                  {usageComparisonOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setUsageComparison(option.id)}
                      className={cn(
                        "w-full p-3 rounded-2xl border-2 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm",
                        usageComparison === option.id
                          ? "border-[#6B46FF] dark:border-[#A259FF] bg-purple-50 dark:bg-[#A259FF]/20 shadow-md dark:shadow-[0_0_16px_rgba(162,89,255,0.3)]"
                          : "border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-[#A259FF]/50 bg-white/50 dark:bg-black/20",
                      )}
                    >
                      <div className={cn("flex-shrink-0", option.color)}>
                        {option.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-bold text-gray-900 dark:text-[#FFFFFF]">
                          {option.label}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-[#B0B0B0]">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mood Selection */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-[#FFFFFF] mb-3">
                  How are you feeling?{" "}
                  <span className="text-red-500 dark:text-[#FF6B6B]">*</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.value}
                      onClick={() => setSelectedMood(mood.value)}
                      className={cn(
                        "p-3 rounded-2xl border-2 transition-all duration-300 text-center backdrop-blur-sm",
                        selectedMood === mood.value
                          ? "border-[#6B46FF] dark:border-[#A259FF] bg-purple-50 dark:bg-[#A259FF]/20 shadow-md dark:shadow-[0_0_16px_rgba(162,89,255,0.3)]"
                          : "border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-[#A259FF]/50 bg-white/50 dark:bg-black/20",
                      )}
                    >
                      <div className="text-2xl mb-1">{mood.emoji}</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-[#FFFFFF]">
                        {mood.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Craving Level */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-[#FFFFFF] mb-3">
                  Craving Level{" "}
                  <span className="text-red-500 dark:text-[#FF6B6B]">*</span>
                </h3>
                <div className="space-y-2">
                  {cravingLevels.map((level) => (
                    <button
                      key={level.value}
                      onClick={() => setSelectedCraving(level.value)}
                      className={cn(
                        "w-full p-3 rounded-2xl border-2 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm",
                        selectedCraving === level.value
                          ? "border-[#6B46FF] dark:border-[#A259FF] bg-purple-50 dark:bg-[#A259FF]/20 shadow-md dark:shadow-[0_0_16px_rgba(162,89,255,0.3)]"
                          : "border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-[#A259FF]/50 bg-white/50 dark:bg-black/20",
                      )}
                    >
                      <div
                        className={cn("w-4 h-4 rounded-full", level.color)}
                      />
                      <span className="font-bold text-gray-900 dark:text-[#FFFFFF]">
                        {level.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nicotine Product Used (Optional) */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-[#FFFFFF] mb-3">
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
                        "w-full p-3 rounded-2xl border-2 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm",
                        selectedProduct === product.id
                          ? "border-[#6B46FF] dark:border-[#A259FF] bg-purple-50 dark:bg-[#A259FF]/20 shadow-md dark:shadow-[0_0_16px_rgba(162,89,255,0.3)]"
                          : "border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-[#A259FF]/50 bg-white/50 dark:bg-black/20",
                      )}
                    >
                      <div className="text-[#6B46FF] dark:text-[#A259FF]">
                        {product.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-bold text-gray-900 dark:text-[#FFFFFF]">
                          {product.label}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-[#B0B0B0]">
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
                  <h3 className="font-bold text-gray-900 dark:text-[#FFFFFF] mb-3">
                    Nicotine Amount
                    {isNicotineAmountRequired && (
                      <span className="text-red-500 dark:text-[#FF6B6B]">
                        {" "}
                        *
                      </span>
                    )}
                    {!isNicotineAmountRequired && (
                      <span className="text-gray-500 dark:text-[#8A8A8A]">
                        {" "}
                        (Optional)
                      </span>
                    )}
                  </h3>
                  <input
                    type="text"
                    value={nicotineAmount}
                    onChange={(e) => setNicotineAmount(e.target.value)}
                    placeholder={getNicotineAmountPlaceholder()}
                    className="w-full px-4 py-3 bg-gray-100/80 dark:bg-black/30 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl text-gray-900 dark:text-[#FFFFFF] placeholder-gray-500 dark:placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#6B46FF] dark:focus:ring-[#A259FF] focus:border-transparent transition-all duration-300"
                  />
                  <p className="text-xs text-gray-500 dark:text-[#8A8A8A] mt-1">
                    Enter the nicotine strength (e.g., 6mg, 12mg)
                  </p>
                </div>
              )}

              {/* Note */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-[#FFFFFF] mb-3">
                  Quick Note (Optional)
                </h3>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="How was your day? Any thoughts or reflections..."
                  className="w-full px-4 py-3 bg-gray-100/80 dark:bg-black/30 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl text-gray-900 dark:text-[#FFFFFF] placeholder-gray-500 dark:placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#6B46FF] dark:focus:ring-[#A259FF] focus:border-transparent resize-none transition-all duration-300"
                  rows={3}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 border-gray-300 dark:border-white/20 text-gray-600 dark:text-[#B0B0B0] hover:bg-gray-100 dark:hover:bg-white/10 rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-sm"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={!isFormValid}
                  className="flex-1 bg-gradient-to-r from-[#6B46FF] to-[#8B5CF6] dark:from-[#A259FF] dark:to-[#B85FFF] hover:from-[#5B3FD1] hover:to-[#7C3AED] dark:hover:from-[#B85FFF] dark:hover:to-[#A259FF] text-white rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg dark:shadow-[0_0_24px_rgba(162,89,255,0.4)] border-0 transition-all duration-300"
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
                  <div className="bg-red-100 dark:bg-red-500/20 backdrop-blur-sm border border-red-300 dark:border-red-500/30 rounded-2xl p-3">
                    <p className="text-sm text-red-700 dark:text-red-400">
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
