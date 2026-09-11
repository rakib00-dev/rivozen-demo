"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 1. IMPORT THIS
import { AnimatePresence } from "framer-motion";
import Preloader from "./MotionPreloader";

interface InitialTransitionProps {
  children: React.ReactNode;
}

export default function InitialTransition({
  children,
}: InitialTransitionProps) {
  const pathname = usePathname(); // 2. GET THE CURRENT PATHNAME
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // 3. FORCE LOADER TO SHOW IMMEDIATELY WHEN PATH CHANGES
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]); // 4. ADD PATHNAME AS A DEPENDENCY HERE

  return (
    <>
      <AnimatePresence mode="wait">
        {/* 5. CHANGE KEY TO PATHNAME so Framer Motion treats it as a fresh animation per page */}
        {isLoading && <Preloader key={pathname} />}
      </AnimatePresence>

      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  );
}
