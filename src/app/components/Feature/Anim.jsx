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

  const container = {
    whileInView: {
      transition: {
        friction: 400,
        mass: 0.7,
        duration: 2,
        staggerChildren: 0.2,
        delayChildren: 0.55,
      },
    },
  };

  const panel = {
    initial: {
      opacity: 0,
      scale: 0.5,
      x: -100,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        delayChildren: 0.4,
        type: "spring",
        friction: 200,
        mass: 0.8,
      },
    },
  };

    const backContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
      },
    },
  };
  const backAnimation = {
    initial: {
      opacity: 0,
      scale: 0.7,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
      },
    },
  };

  const skillsContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };
  const skillsAnimation = {
    initial: {
      opacity: 0,
      scale: 0.7,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  export {anim, container, panel, backContainer, backAnimation, skillsContainer, skillsAnimation}