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
      className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-xl"
    >
      <div className="p-2 bg-[#007AFF]/10 rounded-lg">
        <Icon className="w-5 h-5 text-[#007AFF]" />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-medium text-gray-900 dark:text-white">{label}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  );

  return (
    <div
      className={cn(
        "min-h-screen bg-[#F2F2F7] dark:bg-gray-900 transition-colors duration-200",
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
          <h1 className="text-lg font-semibold text-black dark:text-white">
            More
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Profile Card */}
        <Card className="bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Welcome Back!</h3>
                <p className="text-white/90 text-sm">
                  Keep up the great work on your quit journey
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Sections */}
        {menuSections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white px-2">
              {section.title}
            </h2>
            <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
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
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">🚭</div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
              NicotineFree
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Your Quit Journey Tracker
            </p>
            <p className="text-xs text-gray-500">Version 1.0.0</p>
          </CardContent>
        </Card>

        {/* Emergency Support */}
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-3">🆘</div>
            <h3 className="font-semibold text-lg text-red-700 dark:text-red-300 mb-2">
              Need Support?
            </h3>
            <p className="text-sm text-red-600 dark:text-red-400 mb-3">
              If you're struggling, remember that help is available
            </p>
            <button className="text-sm font-medium text-red-700 dark:text-red-300 underline">
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
