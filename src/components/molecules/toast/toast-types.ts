import type React from "react";
export type ToastType = "default" | "success" | "error" | "warning" | "info";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "top-full"
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
