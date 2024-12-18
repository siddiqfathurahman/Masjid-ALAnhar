import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onLoaded }) => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 6); 
    }, 1000);

    const timeout = setTimeout(() => {
      onLoaded();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoaded]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-hijau animate-fadeOut">
      <div className="text-center animate-dropDown">

        <div className="mb-4">
          <img
            src="/logopolos.png"
            alt="Logo"
            className="w-40 mx-auto"
          />
        </div>


        <div className="text-2xl font-bold text-white">
          {Array.from({ length: dots }, (_, i) => ".").join("")}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
