import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => Math.max(0, prev - 1));
  const handleReset = () => setCount(0);

  const fillHeight = Math.min(count * 5, 100);

  const fillAnimation = useSpring({
    backgroundColor: `hsl(${count * 5}, 80%, 40%)`,
    height: `${fillHeight}%`,
    config: { tension: 170, friction: 26 },
  });

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-white overflow-hidden p-4">
      <animated.div
        style={fillAnimation}
        className="absolute bottom-0 left-0 w-full bg-blue-500"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-gray-800 text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {count}
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <button
            onClick={handleIncrement}
            className="flex-1 sm:flex-none max-w-[150px] px-5 py-2 sm:px-6 sm:py-3 bg-green-500 text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg hover:bg-green-600 active:scale-95 transition-all"
          >
            Increment
          </button>
          <button
            onClick={handleReset}
            className="flex-1 sm:flex-none max-w-[150px] px-5 py-2 sm:px-6 sm:py-3 bg-gray-500 text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg hover:bg-gray-600 active:scale-95 transition-all"
          >
            Reset
          </button>
          <button
            onClick={handleDecrement}
            className="flex-1 sm:flex-none max-w-[150px] px-5 py-2 sm:px-6 sm:py-3 bg-red-500 text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg hover:bg-red-600 active:scale-95 transition-all"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
