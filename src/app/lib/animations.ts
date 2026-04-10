export const fadeInUp = {
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true } as const,
  transition:  { duration: 0.6 },
};

export const fadeInScale = {
  initial:     { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport:    { once: true } as const,
  transition:  { duration: 0.5 },
};

export const slideInLeft = {
  initial:     { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true } as const,
  transition:  { duration: 0.6 },
};

export const staggerContainer = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
