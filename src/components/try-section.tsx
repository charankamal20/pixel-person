import { motion } from "framer-motion";
import { VenetianMask } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <>
    <div className="w-full text-black grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-accent font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Let's change it up a bit
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-accent text-white font-medium py-2 px-4 transition-all hover:bg-black duration-500 flex gap-x-2 items-center justify-center active:scale-95">
          <VenetianMask className="text-white" />
          Generate a Unique Avatar
        </button>
      </div>
      <ShuffleGrid />
    </div>
    </>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "shuffle/1.png",
  },
  {
    id: 2,
    src: "shuffle/2.png",
  },
  {
    id: 3,
    src: "shuffle/3.png",
  },
  {
    id: 4,
    src: "shuffle/4.png",
  },
  {
    id: 5,
    src: "shuffle/5.png",
  },
  {
    id: 6,
    src: "shuffle/6.png",
  },
  {
    id: 7,
    src: "shuffle/7.png",
  },
  {
    id: 8,
    src: "shuffle/8.png",
  },
  {
    id: 9,
    src: "shuffle/9.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

export const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
