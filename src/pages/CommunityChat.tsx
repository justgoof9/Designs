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
        "min-h-screen bg-[#F4F6FA] dark:bg-gray-900 transition-colors duration-200",
        "max-w-md mx-auto relative flex flex-col",
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
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">
              Community Chat
            </h1>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {messages.length} members online
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="px-4 py-4">
        <Card className="bg-gradient-to-r from-[#5B8DEF] to-[#70D6FF] text-white shadow-lg border-0 rounded-2xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg">Welcome to Support</h3>
                <p className="text-white/90 text-sm">
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
              "shadow-sm border-0 rounded-2xl",
              message.isOwn
                ? "bg-[#5B8DEF] text-white ml-8"
                : "bg-white dark:bg-gray-800 mr-8",
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "font-semibold text-sm",
                      message.isOwn ? "text-white" : "text-[#5B8DEF]",
                    )}
                  >
                    {message.username}
                  </span>
                  <span
                    className={cn(
                      "text-xs",
                      message.isOwn
                        ? "text-white/70"
                        : "text-gray-500 dark:text-gray-400",
                    )}
                  >
                    {message.timestamp}
                  </span>
                </div>
              </div>
              <p
                className={cn(
                  "text-sm leading-relaxed mb-3",
                  message.isOwn
                    ? "text-white"
                    : "text-[#2D2D2D] dark:text-white",
                )}
              >
                {message.message}
              </p>
              <div className="flex items-center gap-2">
                <button
                  className={cn(
                    "flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-colors",
                    message.isOwn
                      ? "bg-white/20 text-white hover:bg-white/30"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",
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
      <div className="bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-1 px-4 py-3 bg-[#F4F6FA] dark:bg-gray-700 rounded-xl border-0 text-[#2D2D2D] dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-[#5B8DEF] hover:bg-[#5B8DEF]/90 text-white rounded-xl px-4"
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
