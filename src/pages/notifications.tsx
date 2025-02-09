import React from "react";
import { motion } from "framer-motion";
import { Users2, Utensils, Bell } from "lucide-react";
import BottomNav from "@/components/navigation/BottomNav";

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: "group",
      title: "Your group is ready!",
      message: "Meet your dining companions for Wednesday's dinner.",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      type: "restaurant",
      title: "Restaurant revealed",
      message: "Your dinner location for tonight has been revealed.",
      time: "5 hours ago",
      isRead: true,
    },
    {
      id: 3,
      type: "reminder",
      title: "Upcoming dinner reminder",
      message: "Don't forget your dinner tomorrow at 8:00 PM.",
      time: "1 day ago",
      isRead: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "group":
        return <Users2 className="w-6 h-6" />;
      case "restaurant":
        return <Utensils className="w-6 h-6" />;
      case "reminder":
        return <Bell className="w-6 h-6" />;
      default:
        return <Bell className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEDD5] pb-20">
      <header className="bg-[#2D3047] text-white py-6 px-4">
        <h1 className="text-2xl font-bold font-mono">Notifications</h1>
      </header>

      <div className="p-4 space-y-4">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white p-4 rounded-lg border-2 border-[#2D3047] ${!notification.isRead ? "shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]" : ""}`}
          >
            <div className="flex gap-4">
              <div
                className={`p-2 rounded-full ${!notification.isRead ? "bg-[#F72585]/10" : "bg-[#2D3047]/5"}`}
              >
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3
                    className={`font-mono ${!notification.isRead ? "font-bold" : ""}`}
                  >
                    {notification.title}
                  </h3>
                  <span className="text-xs text-[#2D3047]/70">
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm mt-1 text-[#2D3047]/80">
                  {notification.message}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default NotificationsPage;
