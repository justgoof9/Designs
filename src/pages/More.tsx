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
      className="w-full p-4 flex items-center gap-4 hover:bg-white/5 transition-all duration-300 rounded-2xl group"
    >
      <div className="p-2 bg-gradient-to-br from-[#A259FF]/20 to-[#4EDCFF]/20 rounded-2xl border border-white/10 group-hover:shadow-[0_0_16px_rgba(162,89,255,0.3)] transition-all duration-300">
        <Icon className="w-5 h-5 text-[#A259FF]" />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-bold text-[#FFFFFF]">{label}</h3>
        <p className="text-sm text-[#B0B0B0]">{subtitle}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-[#8A8A8A] group-hover:text-[#A259FF] transition-colors duration-300" />
    </button>
  );

  return (
    <div
      className={cn(
        "min-h-screen bg-[#0D0C1D] transition-colors duration-200 font-['Inter',sans-serif]",
        "max-w-md mx-auto relative",
      )}
      style={{ maxWidth: "390px", minHeight: "844px" }}
    >
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-[#2A2A3A] px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-[#8A8A8A]" />
          </button>
          <h1 className="text-lg font-bold text-[#FFFFFF]">More</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24 space-y-6">
        {/* Profile Card */}
        <Card className="bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 pointer-events-none" />
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A259FF] to-[#B85FFF] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(162,89,255,0.4)]">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#FFFFFF]">
                  Welcome Back!
                </h3>
                <p className="text-[#B0B0B0] text-sm">
                  Keep up the great work on your quit journey
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Sections */}
        {menuSections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h2 className="text-lg font-bold text-[#FFFFFF] px-2">
              {section.title}
            </h2>
            <Card className="bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <CardContent className="p-2 relative z-10">
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
        <Card className="bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 pointer-events-none" />
          <CardContent className="p-6 text-center relative z-10">
            <div className="text-5xl mb-3">🚭</div>
            <h3 className="font-bold text-lg text-[#FFFFFF] mb-2">
              NicotineFree
            </h3>
            <p className="text-sm text-[#B0B0B0] mb-3">
              Your Quit Journey Tracker
            </p>
            <p className="text-xs text-[#8A8A8A]">Version 1.0.0</p>
          </CardContent>
        </Card>

        {/* Emergency Support */}
        <Card className="bg-red-500/10 backdrop-blur-xl border border-red-500/20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
          <CardContent className="p-6 text-center relative z-10">
            <div className="text-4xl mb-3">🆘</div>
            <h3 className="font-bold text-lg text-red-400 mb-2">
              Need Support?
            </h3>
            <p className="text-sm text-red-300 mb-3">
              If you're struggling, remember that help is available
            </p>
            <button className="text-sm font-bold text-red-400 underline hover:text-red-300 transition-colors duration-300">
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
