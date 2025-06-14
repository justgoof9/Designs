import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import {
  ArrowLeft,
  User,
  Settings,
  Bell,
  HelpCircle,
  Shield,
  Heart,
  Share2,
  Star,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const More = () => {
  const navigate = useNavigate();

  const menuSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Profile", subtitle: "Manage your account" },
        { icon: Settings, label: "Preferences", subtitle: "App settings" },
        { icon: Bell, label: "Notifications", subtitle: "Manage alerts" },
      ],
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Help & FAQ", subtitle: "Get assistance" },
        {
          icon: Heart,
          label: "Health Resources",
          subtitle: "Quit smoking tips",
        },
        { icon: Share2, label: "Share App", subtitle: "Tell a friend" },
      ],
    },
    {
      title: "About",
      items: [
        { icon: Star, label: "Rate App", subtitle: "Leave a review" },
        {
          icon: Shield,
          label: "Privacy Policy",
          subtitle: "Your data protection",
        },
      ],
    },
  ];

  const MenuItem = ({
    icon: Icon,
    label,
    subtitle,
    onClick,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    subtitle: string;
    onClick?: () => void;
  }) => (
    <button
      onClick={onClick}
      className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-[#2A2038] transition-all duration-300 rounded-2xl group"
    >
      <div className="p-2 bg-gradient-to-br from-purple-100 to-cyan-100 dark:bg-[#2A2038] rounded-2xl border border-purple-200/50 dark:border-[#3A2A48] group-hover:shadow-md transition-all duration-300">
        <Icon className="w-5 h-5 text-[#6B46FF] dark:text-[#8B5CF6]" />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-bold text-gray-900 dark:text-white">{label}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-[#6B46FF] dark:group-hover:text-[#8B5CF6] transition-colors duration-300" />
    </button>
  );

  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] dark:bg-gradient-to-br dark:from-[#0F0B1C] dark:to-[#1A0D2E] transition-colors duration-500 font-['Inter',sans-serif]",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Header */}
      <div className="bg-white/70 dark:bg-[#1A1426]/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-[#2A2038] px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            More
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Profile Card */}
        <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-2xl flex items-center justify-center shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                  Welcome Back!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Keep up the great work on your quit journey
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Sections */}
        {menuSections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white px-2">
              {section.title}
            </h2>
            <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-2">
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <MenuItem
                      key={itemIndex}
                      icon={item.icon}
                      label={item.label}
                      subtitle={item.subtitle}
                      onClick={() => console.log(`Navigate to ${item.label}`)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* App Info */}
        <Card className="bg-white/80 dark:bg-[#1A1426]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#2A2038] shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-6 text-center">
            <div className="text-5xl mb-3">🚭</div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              NicotineFree
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Your Quit Journey Tracker
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Version 1.0.0
            </p>
          </CardContent>
        </Card>

        {/* Emergency Support */}
        <Card className="bg-red-50/90 dark:bg-[#2A1426]/60 backdrop-blur-xl border border-red-200/50 dark:border-[#3A2A38] rounded-3xl overflow-hidden">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">🆘</div>
            <h3 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
              Need Support?
            </h3>
            <p className="text-sm text-red-600 dark:text-red-300 mb-3">
              If you're struggling, remember that help is available
            </p>
            <button className="text-sm font-bold text-red-700 dark:text-red-400 underline hover:text-red-800 dark:hover:text-red-300 transition-colors duration-300">
              Contact Quitline: 1-800-QUIT-NOW
            </button>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default More;
