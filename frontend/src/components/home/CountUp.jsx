import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const CountUp = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60); // 60fps

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {Number.isInteger(end) ? count : count.toFixed(1)}
      {suffix}
    </span>
  );
};

export default CountUp;
