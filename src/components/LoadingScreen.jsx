import React, { useEffect } from "react";

const LoadingScreen = ({ onLoaded }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onLoaded();
    }, 3000); // 

    return () => clearTimeout(timeout);
  }, [onLoaded]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-hijau">
      <div className="text-center">
        <div>
          <img
            src="/logopolos.webp"
            alt="Logo"
            className="w-40 mx-auto"
          />
        </div>
        <div className="flex space-x-2 justify-center mt-8">
          <div className="h-3 w-3 bg-white rounded-full animate-bounceDots [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 bg-white rounded-full animate-bounceDots [animation-delay:-0.2s]"></div>
          <div className="h-3 w-3 bg-white rounded-full animate-bounceDots [animation-delay:-0.1s]"></div>
          <div className="h-3 w-3 bg-white rounded-full animate-bounceDots"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
