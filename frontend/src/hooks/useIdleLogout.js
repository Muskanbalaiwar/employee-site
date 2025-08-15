import { useEffect, useRef } from "react";
import { useAuth } from "../auth/authContext";

const IDLE_MS = 10 * 60 * 1000; // 10 minutes

export default function useIdleLogout() {
  const { logout } = useAuth();
  const timerRef = useRef(null);

  useEffect(() => {
    const reset = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        logout();
        alert("You were logged out due to inactivity.");
        window.location.href = "/login";
      }, IDLE_MS);
    };

    const events = ["mousemove", "mousedown", "keypress", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));

    reset();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach((e) => window.removeEventListener(e, reset));
    };
  }, [logout]);
}
