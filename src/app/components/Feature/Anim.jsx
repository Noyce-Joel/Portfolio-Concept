const anim = {
    initial: {
      scale: 0.7,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.55,
        staggerChildren: 0.5,
        delayChildren: 0.4,
      },
    },
  };

  export {anim}