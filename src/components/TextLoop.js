import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const texts = ["Hello", "Bye", "Konichiwa"];

const variants = {
  enter: direction => {
    return {
      x: -20,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      opacity: 0
    };
  }
};

const TextLoop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
      <AnimatePresence>
        <motion.span
          style={{ position: "absolute" }}
          variants={variants}
          key={index}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.5 }
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
  );
};

export default TextLoop;