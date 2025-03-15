"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle, Info, X } from "lucide-react";

// Types
export type ToastType = "default" | "success" | "error" | "warning" | "info";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  position: ToastPosition;
}

export interface ToastTheme {
  default: {
    background: string;
    text: string;
    icon?: React.ComponentType;
  };
  success: {
    background: string;
    text: string;
    icon?: React.ComponentType;
  };
  error: {
    background: string;
    text: string;
    icon?: React.ComponentType;
  };
  warning: {
    background: string;
    text: string;
    icon?: React.ComponentType;
  };
  info: {
    background: string;
    text: string;
    icon?: React.ComponentType;
  };
}

// Toast Item Component
interface ToastItemProps {
  toast: Toast;
  onClose: () => void;
  index: number;
  isTop: boolean;
}

function ToastItem({ toast, onClose, index, isTop }: ToastItemProps) {
  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5" />;
      case "error":
        return <XCircle className="h-5 w-5" />;
      case "warning":
        return <AlertCircle className="h-5 w-5" />;
      case "info":
        return <Info className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getToastClasses = (type: ToastType) => {
    const baseClasses =
      "rounded-md shadow-lg p-4 flex items-start gap-3 min-w-[300px] max-w-md";

    switch (type) {
      case "success":
        return `${baseClasses} bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100`;
      case "error":
        return `${baseClasses} bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-100`;
      case "warning":
        return `${baseClasses} bg-amber-50 text-amber-800 dark:bg-amber-900 dark:text-amber-100`;
      case "info":
        return `${baseClasses} bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-100`;
      default:
        return `${baseClasses} bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100`;
    }
  };

  const getIconClasses = (type: ToastType) => {
    switch (type) {
      case "success":
        return "text-green-500 dark:text-green-400";
      case "error":
        return "text-red-500 dark:text-red-400";
      case "warning":
        return "text-amber-500 dark:text-amber-400";
      case "info":
        return "text-blue-500 dark:text-blue-400";
      default:
        return "text-gray-500 dark:text-gray-400";
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
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        aria-label="Close toast"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

// Toast Container Component
interface ToastContainerProps {
  position: ToastPosition;
  toasts: Toast[];
  removeToast: (id: string) => void;
}

function ToastContainer({
  position,
  toasts,
  removeToast,
}: ToastContainerProps) {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
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
        />
      ))}
    </motion.div>
  );
}

// Toast Context
interface ToastContextProps {
  toasts: Toast[];
  addToast: (
    message: string,
    type?: ToastType,
    duration?: number,
    position?: ToastPosition
  ) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

// Toast Provider
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (
    message: string,
    type: ToastType = "default",
    duration = 5000,
    position: ToastPosition = "bottom-right"
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: Toast = {
      id,
      message,
      type,
      duration,
      position,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    if (duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  // Group toasts by position
  const groupedToasts = toasts.reduce<Record<ToastPosition, Toast[]>>(
    (acc, toast) => {
      if (!acc[toast.position]) {
        acc[toast.position] = [];
      }
      acc[toast.position].push(toast);
      return acc;
    },
    {
      "top-left": [],
      "top-center": [],
      "top-right": [],
      "bottom-left": [],
      "bottom-center": [],
      "bottom-right": [],
    }
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {Object.entries(groupedToasts).map(([position, positionToasts]) => (
        <AnimatePresence key={position}>
          {positionToasts.length > 0 && (
            <ToastContainer
              position={position as ToastPosition}
              toasts={positionToasts}
              removeToast={removeToast}
            />
          )}
        </AnimatePresence>
      ))}
    </ToastContext.Provider>
  );
}

// Toast Hook
export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
