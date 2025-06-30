import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const StatCard = ({ stat, shouldAnimate }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start = 0;
    const increment = stat.value / (stat.duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [shouldAnimate, stat.value, stat.duration]);

  return (
    <div className="flex flex-col items-center text-center p-3 md:p-4 group hover:bg-[#ff385c]/5 rounded-lg transition-colors">
      <div className="p-2 md:p-3 bg-[#ff385c]/10 rounded-full mb-3 md:mb-4 group-hover:bg-[#ff385c]/20 transition-colors">
        {stat.icon}
      </div>
      <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
        {shouldAnimate
          ? Number.isInteger(stat.value)
            ? count
            : count.toFixed(1)
          : 0}
        {stat.suffix}
      </p>
      <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
    </div>
  );
};

export default StatCard;
