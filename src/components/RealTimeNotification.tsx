import { useEffect, useState } from "react";
import { supabase } from "../utils/apiClient";

export default function RealTimeNotification() {
  const [noti, setNoti] = useState("");

  useEffect(() => {
    const sub = supabase
      .channel("public:notifications")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "notifications" }, (payload) => {
        setNoti(payload.new.message);
        setTimeout(() => setNoti(""), 4000);
      })
      .subscribe();
    return () => { sub.unsubscribe(); };
  }, []);

  if (!noti) return null;
  return (
    <div className="fixed top-8 right-8 bg-blue-700 text-white px-6 py-3 rounded z-50 shadow-lg">{noti}</div>
  );
}