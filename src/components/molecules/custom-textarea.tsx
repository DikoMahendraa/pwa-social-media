"use client";

import type React from "react";
import {
  forwardRef,
  useState,
  type TextareaHTMLAttributes,
  useEffect,
} from "react";
import { motion } from "framer-motion";

// Simple utility function to combine class names
const classNames = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(" ");
};

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text displayed above the textarea */
  label?: string;
  /** Maximum number of characters allowed */
  maxLength?: number;
  /** Error message to display */
  error?: string;
  /** Additional class names for the textarea container */
  containerClassName?: string;
  /** Additional class names for the textarea element */
  textareaClassName?: string;
  /** Additional class names for the label */
  labelClassName?: string;
  /** Additional class names for the error message */
  errorClassName?: string;
  /** Additional class names for the character counter */
  counterClassName?: string;
  /** Whether to show the character counter */
  showCounter?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      maxLength = 150,
      error,
      containerClassName,
      textareaClassName,
      labelClassName,
      errorClassName,
      counterClassName,
      showCounter = true,
      disabled,
      className,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [charCount, setCharCount] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    // Update character count when value changes
    useEffect(() => {
      if (typeof value === "string") {
        setCharCount(value.length);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Enforce maxLength if provided
      if (maxLength && e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
      }

      setCharCount(e.target.value.length);

      // Call the original onChange handler
      if (onChange) {
        onChange(e);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    return (
      <div className={classNames("w-full", containerClassName)}>
        <div className="flex justify-between items-center mb-1">
          {label && (
            <label
              htmlFor={props.id}
              className={classNames(
                "text-sm text-[#858585] font-normal",
                labelClassName
              )}
            >
              {label}
            </label>
          )}

          {showCounter && (
            <motion.span
              className={classNames(
                "text-xs text-[#858585]",
                charCount > maxLength ? "text-red-500" : "",
                counterClassName
              )}
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: isFocused ? 1 : 0.8,
                scale: charCount > maxLength * 0.9 ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {charCount}/{maxLength}
            </motion.span>
          )}
        </div>

        <div
          className={classNames(
            "relative w-full border rounded-xl",
            isFocused ? "border-[#e0e0e0]" : "border-gray-200",
            error ? "border-red-500" : "",
            disabled ? "opacity-60 bg-gray-50" : "",
            className
          )}
        >
          <textarea
            ref={ref}
            disabled={disabled}
            maxLength={maxLength}
            className={classNames(
              "w-full py-3 px-4 bg-transparent  resize-none text-sm font-medium focus:outline-none disabled:cursor-not-allowed min-h-[80px]",
              textareaClassName
            )}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </div>

        {error && (
          <p
            className={classNames("mt-1 text-xs text-red-500", errorClassName)}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
