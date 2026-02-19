"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { slideUp } from "@/lib/motion";

export default function PageTransition({ children }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={slideUp.initial}
                animate={slideUp.animate}
                exit={{ opacity: 0, y: -40 }}
                transition={slideUp.transition}
                style={{ minHeight: "100vh" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
