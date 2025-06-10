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
    { label: "None", value: "none", color: "bg-[#00FF9D]" },
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
      color: "text-[#00FF9D]",
    },
    {
      id: "same",
      label: "Stayed Same",
      icon: <Minus className="w-5 h-5" />,
      description: "Similar to yesterday",
      color: "text-[#4EDCFF]",
    },
    {
      id: "increased",
      label: "Increased",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Used more than yesterday",
      color: "text-[#FF6B6B]",
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
      return "Great job cutting back again today! You're building incredible momentum. ��";
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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4 font-['Inter',sans-serif]">
      <Card className="bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 pointer-events-none rounded-3xl" />
        {showAIEncouragement ? (
          // AI Encouragement Screen
          <CardContent className="p-8 text-center relative z-10">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-[#A259FF] to-[#B85FFF] rounded-3xl w-24 h-24 mx-auto flex items-center justify-center shadow-[0_0_32px_rgba(162,89,255,0.6)]">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">
                  AI Analysis
                </h3>
                <p className="text-[#B0B0B0] leading-relaxed">
                  {getAIEncouragement()}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-[#A259FF] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#4EDCFF] rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-[#00FF9D] rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </CardContent>
        ) : (
          // Regular Form
          <>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-[#FFFFFF]">
                  Log Today's Use
                </CardTitle>
                <button
                  onClick={onClose}
                  className="p-2 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-[#8A8A8A]" />
                </button>
              </div>
              <p className="text-sm text-[#B0B0B0]">
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
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-4 rounded-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#EDEDED]">
                    Yesterday's use:
                  </span>
                  <span className="text-lg font-bold text-[#A259FF] drop-shadow-[0_0_8px_rgba(162,89,255,0.4)]">
                    {yesterdaysUse}
                  </span>
                </div>
              </div>

              {/* Usage Comparison */}
              <div>
                <h3 className="font-bold text-[#FFFFFF] mb-3">
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
                          ? "border-[#A259FF] bg-[#A259FF]/20 shadow-[0_0_16px_rgba(162,89,255,0.3)]"
                          : "border-white/10 hover:border-[#A259FF]/50 bg-black/20",
                      )}
                    >
                      <div className={cn("flex-shrink-0", option.color)}>
                        {option.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-bold text-[#FFFFFF]">
                          {option.label}
                        </p>
                        <p className="text-xs text-[#B0B0B0]">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mood Selection */}
              <div>
                <h3 className="font-bold text-[#FFFFFF] mb-3">
                  How are you feeling? <span className="text-[#FF6B6B]">*</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.value}
                      onClick={() => setSelectedMood(mood.value)}
                      className={cn(
                        "p-3 rounded-2xl border-2 transition-all duration-300 text-center backdrop-blur-sm",
                        selectedMood === mood.value
                          ? "border-[#A259FF] bg-[#A259FF]/20 shadow-[0_0_16px_rgba(162,89,255,0.3)]"
                          : "border-white/10 hover:border-[#A259FF]/50 bg-black/20",
                      )}
                    >
                      <div className="text-2xl mb-1">{mood.emoji}</div>
                      <div className="text-sm font-bold text-[#FFFFFF]">
                        {mood.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Craving Level */}
              <div>
                <h3 className="font-bold text-[#FFFFFF] mb-3">
                  Craving Level <span className="text-[#FF6B6B]">*</span>
                </h3>
                <div className="space-y-2">
                  {cravingLevels.map((level) => (
                    <button
                      key={level.value}
                      onClick={() => setSelectedCraving(level.value)}
                      className={cn(
                        "w-full p-3 rounded-2xl border-2 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm",
                        selectedCraving === level.value
                          ? "border-[#A259FF] bg-[#A259FF]/20 shadow-[0_0_16px_rgba(162,89,255,0.3)]"
                          : "border-white/10 hover:border-[#A259FF]/50 bg-black/20",
                      )}
                    >
                      <div
                        className={cn("w-4 h-4 rounded-full", level.color)}
                      />
                      <span className="font-bold text-[#FFFFFF]">
                        {level.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nicotine Product Used (Optional) */}
              <div>
                <h3 className="font-bold text-[#FFFFFF] mb-3">
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
                          ? "border-[#A259FF] bg-[#A259FF]/20 shadow-[0_0_16px_rgba(162,89,255,0.3)]"
                          : "border-white/10 hover:border-[#A259FF]/50 bg-black/20",
                      )}
                    >
                      <div className="text-[#A259FF]">{product.icon}</div>
                      <div className="flex-1 text-left">
                        <p className="font-bold text-[#FFFFFF]">
                          {product.label}
                        </p>
                        <p className="text-xs text-[#B0B0B0]">
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
                  <h3 className="font-bold text-[#FFFFFF] mb-3">
                    Nicotine Amount
                    {isNicotineAmountRequired && (
                      <span className="text-[#FF6B6B]"> *</span>
                    )}
                    {!isNicotineAmountRequired && (
                      <span className="text-[#8A8A8A]"> (Optional)</span>
                    )}
                  </h3>
                  <input
                    type="text"
                    value={nicotineAmount}
                    onChange={(e) => setNicotineAmount(e.target.value)}
                    placeholder={getNicotineAmountPlaceholder()}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl text-[#FFFFFF] placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#A259FF] focus:border-transparent transition-all duration-300"
                  />
                  <p className="text-xs text-[#8A8A8A] mt-1">
                    Enter the nicotine strength (e.g., 6mg, 12mg)
                  </p>
                </div>
              )}

              {/* Note */}
              <div>
                <h3 className="font-bold text-[#FFFFFF] mb-3">
                  Quick Note (Optional)
                </h3>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="How was your day? Any thoughts or reflections..."
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl text-[#FFFFFF] placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#A259FF] focus:border-transparent resize-none transition-all duration-300"
                  rows={3}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 border-white/20 text-[#B0B0B0] hover:bg-white/10 rounded-2xl bg-black/20 backdrop-blur-sm"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={!isFormValid}
                  className="flex-1 bg-gradient-to-r from-[#A259FF] to-[#B85FFF] hover:from-[#B85FFF] hover:to-[#A259FF] text-white rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(162,89,255,0.4)] border-0 transition-all duration-300"
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
                  <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-3">
                    <p className="text-sm text-red-400">
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
