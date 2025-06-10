import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { ArrowLeft, Send, Heart, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  username: string;
  message: string;
  timestamp: string;
  likes: number;
  isOwn?: boolean;
}

const CommunityChat = () => {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");
  const [messages] = useState<Message[]>([
    {
      id: 1,
      username: "Sarah92",
      message:
        "Day 15 smoke-free! The cravings are getting easier to manage 💪",
      timestamp: "10:30 AM",
      likes: 12,
    },
    {
      id: 2,
      username: "MikeQuits",
      message:
        "Having a tough morning. Any tips for dealing with stress without cigarettes?",
      timestamp: "11:15 AM",
      likes: 3,
    },
    {
      id: 3,
      username: "HealthyLiving",
      message:
        "@MikeQuits Try deep breathing exercises! I use the 4-7-8 technique when I feel stressed.",
      timestamp: "11:22 AM",
      likes: 8,
    },
    {
      id: 4,
      username: "You",
      message:
        "Just starting my journey today. Feeling nervous but determined!",
      timestamp: "12:05 PM",
      likes: 15,
      isOwn: true,
    },
    {
      id: 5,
      username: "QuitterWins",
      message:
        "Welcome! You've got this! The first few days are tough but it gets so much better 🌟",
      timestamp: "12:08 PM",
      likes: 6,
    },
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send to a backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen bg-[#0D0C1D] transition-colors duration-200 font-['Inter',sans-serif]",
        "max-w-md mx-auto relative flex flex-col",
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
          <div className="flex-1">
            <h1 className="text-lg font-bold text-[#FFFFFF]">Community Chat</h1>
            <p className="text-xs text-[#B0B0B0]">
              {messages.length} members online
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="px-4 py-4">
        <Card className="bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 pointer-events-none" />
          <CardContent className="p-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-[#A259FF] to-[#B85FFF] rounded-2xl shadow-[0_0_16px_rgba(162,89,255,0.4)]">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#FFFFFF]">
                  Welcome to Support
                </h3>
                <p className="text-[#B0B0B0] text-sm">
                  Share your journey with others who understand
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 pb-4 space-y-3 overflow-y-auto">
        {messages.map((message) => (
          <Card
            key={message.id}
            className={cn(
              "shadow-lg border-0 rounded-3xl overflow-hidden",
              message.isOwn
                ? "bg-gradient-to-br from-[#A259FF]/20 to-[#B85FFF]/20 backdrop-blur-xl border border-[#A259FF]/30 ml-8"
                : "bg-black/30 backdrop-blur-xl border border-white/10 mr-8",
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <CardContent className="p-4 relative z-10">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "font-bold text-sm",
                      message.isOwn ? "text-[#A259FF]" : "text-[#4EDCFF]",
                    )}
                  >
                    {message.username}
                  </span>
                  <span className="text-xs text-[#8A8A8A]">
                    {message.timestamp}
                  </span>
                </div>
              </div>
              <p
                className={cn(
                  "text-sm leading-relaxed mb-3",
                  message.isOwn ? "text-[#EDEDED]" : "text-[#FFFFFF]",
                )}
              >
                {message.message}
              </p>
              <div className="flex items-center gap-2">
                <button
                  className={cn(
                    "flex items-center gap-1 text-xs px-3 py-1 rounded-full transition-all duration-300 backdrop-blur-sm",
                    message.isOwn
                      ? "bg-white/10 text-[#EDEDED] hover:bg-white/20 border border-white/20"
                      : "bg-black/20 text-[#B0B0B0] hover:bg-black/30 border border-white/10",
                  )}
                >
                  <Heart className="w-3 h-3" />
                  {message.likes}
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-black/30 backdrop-blur-xl p-4 border-t border-[#2A2A3A]">
        <div className="flex gap-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-1 px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl text-[#FFFFFF] placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#A259FF] focus:border-transparent"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-gradient-to-r from-[#A259FF] to-[#B85FFF] hover:from-[#B85FFF] hover:to-[#A259FF] text-white rounded-2xl px-4 border-0 shadow-[0_0_20px_rgba(162,89,255,0.4)] transition-all duration-300"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default CommunityChat;
