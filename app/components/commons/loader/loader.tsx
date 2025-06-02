"use client";

import "./loader.scss";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useDebounce } from "@/hooks";

export interface ILoadingProps {
  style?: React.CSSProperties;
}

export default function Loader({ style }: ILoadingProps) {
  const { show } = useDebounce({ time: 500 });

  if (show)
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-center loader-container"
          style={{ ...style }}
        >
          <div className="loader"></div>
        </motion.div>
      </AnimatePresence>
    );
}
