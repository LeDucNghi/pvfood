"use client";

import "./page-transition.scss";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { usePathname } from "next/navigation";

export interface IPageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: IPageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div className="page-transition-container" key={pathname}>
        {children}

        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{
            scaleY: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            // ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{
            scaleY: 0,
          }}
          transition={{
            duration: 1,
            // delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
            // ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
