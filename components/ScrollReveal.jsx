"use client";
import { motion } from "framer-motion";

export const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden" // Empieza invisible y un poco abajo
      whileInView={{ opacity: 1, y: 0 }} // Cuando entra en el scroll
      viewport={{ once: true, margin: "-100px" }} // Solo ocurre una vez
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Beizer curvo para suavidad de lujo
      }}
    >
      {children}
    </motion.div>
  );
};