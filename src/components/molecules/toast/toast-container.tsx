"use client";
import { motion } from "framer-motion";
import type { Toast, ToastPosition } from "./toast-types";
import { ToastItem } from "./toast-item";

interface ToastContainerProps {
  position: ToastPosition;
  hasClose?: boolean;
  toasts: Toast[];
  removeToast: (id: string) => void;
}

export function ToastContainer({
  position,
  toasts,
  hasClose,
  removeToast,
}: ToastContainerProps) {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
    "top-full": "top-0 right-0 left-0",
  };

  const isTop = position.startsWith("top");

  return (
    <motion.div
      className={`fixed z-50 flex flex-col gap-2 ${positionClasses[position]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {toasts.map((toast, index) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onClose={() => removeToast(toast.id)}
          index={index}
          isTop={isTop}
          hasClose={hasClose}
        />
      ))}
    </motion.div>
  );
}
