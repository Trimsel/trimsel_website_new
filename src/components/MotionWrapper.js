"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/lib/motion";

export default function MotionWrapper({ children }) {
    return (
        <motion.div
            initial={slideUp.initial}
            animate={slideUp.animate}
            exit={{ opacity: 0, y: -40 }}
            transition={slideUp.transition}
        >
            {children}
        </motion.div>
    );
}
