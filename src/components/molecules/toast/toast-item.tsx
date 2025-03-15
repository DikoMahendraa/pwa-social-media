"use client";
import { motion } from "framer-motion";
import { XCircle, AlertCircle, Info, X, Check } from "lucide-react";
import type { Toast, ToastType } from "./toast-types";

interface ToastItemProps {
  toast: Toast;
  onClose: () => void;
  index: number;
  hasClose?: boolean;
  isTop: boolean;
}

export function ToastItem({
  toast,
  onClose,
  index,
  isTop,
  hasClose = false,
}: ToastItemProps) {
  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return <Check className="text-white h-5 w-5" />;
      case "error":
        return <XCircle className="text-white h-5 w-5" />;
      case "warning":
        return <AlertCircle className="text-white h-5 w-5" />;
      case "info":
        return <Info className="text-white h-5 w-5" />;
      default:
        return null;
    }
  };

  const getToastClasses = (type: ToastType) => {
    const baseClasses =
      "shadow-lg p-4 flex items-center gap-3 min-w-[300px] max-w-md";

    switch (type) {
      case "success":
        return `${baseClasses} bg-[#0616FF] text-green-800 text-white`;
      case "error":
        return `${baseClasses} bg-red-50 text-red-800 text-white`;
      case "warning":
        return `${baseClasses} bg-amber-50 text-amber-800 text-white`;
      case "info":
        return `${baseClasses} bg-blue-50 text-blue-800 text-white`;
      default:
        return `${baseClasses} bg-gray-50 text-gray-800 text-white`;
    }
  };

  const getIconClasses = (type: ToastType) => {
    switch (type) {
      case "success":
        return "text-[#0616FF] text-sm";
      case "error":
        return "text-red-500 text-sm";
      case "warning":
        return "text-amber-500 text-sm";
      case "info":
        return "text-blue-500 text-sm";
      default:
        return "text-gray-500 text-sm";
    }
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: isTop ? -20 : 20,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: index * 0.1,
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
        x: 100,
        transition: {
          duration: 0.2,
        },
      }}
      className={getToastClasses(toast.type)}
    >
      {toast.type !== "default" && (
        <div className={getIconClasses(toast.type)}>{getIcon(toast.type)}</div>
      )}
      <div className="flex-1">{toast.message}</div>
      {hasClose && (
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          aria-label="Close toast"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </motion.div>
  );
}
