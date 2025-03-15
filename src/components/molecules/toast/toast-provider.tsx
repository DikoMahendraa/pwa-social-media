"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { Toast, ToastPosition, ToastType } from "./toast-types";
import { ToastContainer } from "./toast-container";

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
      "top-full": [],
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

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
