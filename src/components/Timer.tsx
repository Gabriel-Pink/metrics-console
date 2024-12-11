import { useState, useEffect } from "react";

export function Timer({ timestamp }: { timestamp: number }) {
  const [timeDiff, setTimeDiff] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = now - timestamp; // Diferença em milissegundos

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Formatar para hh:mm:ss
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      setTimeDiff(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return <div className="text-gray-600 text-sm">{timeDiff}</div>;
};