export const transition = { type: "spring", duration: 0.7 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -400 : direction === "right" ? 400 : 0,
      y: direction === "up" ? 400 : direction === "down" ? -400 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0.5 },
    },
    exit: {
      x: direction === "left" ? -400 : direction === "right" ? 400 : 0,
      y: direction === "up" ? 400 : direction === "down" ? -400 : 0,
      transition: { ...transition, delay: 0.5 },
    },
  };
};

