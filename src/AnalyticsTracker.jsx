import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Pastikan logEvent dipanggil setiap kali route berubah
    logEvent(analytics, "page_view", {
      page_path: location.pathname, // Path halaman
      page_title: document.title,  // Judul halaman
    });
  }, [location]);

  return null;
}
