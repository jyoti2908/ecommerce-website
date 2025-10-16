import React from "react";

const NotificationBanner = () => {
  return (
    <div className="w-full h-24 bg-yellow-300 py-2 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee text-center text-black font-semibold text-sm md:text-base">
        🎉 Happy Diwali! Enjoy limited-time offers on all products – Shop Now 🛍️
      </div>
    </div>
  );
};

export default NotificationBanner;
