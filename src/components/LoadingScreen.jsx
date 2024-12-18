import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onLoaded }) => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    // Animasi titik berjalan setiap 1 detik
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 1000);

    // Masuk ke website setelah 3 detik
    const timeout = setTimeout(() => {
      onLoaded();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoaded]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-hijau">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-40 mx-auto"
          />
        </div>

        {/* Titik Animasi */}
        <div className="text-2xl font-bold text-white">
          {Array.from({ length: dots }, (_, i) => ".").join("")}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
