"use client";

import type React from "react";
import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

// Simple utility function to combine class names
const classNames = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(" ");
};

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  /** Label text displayed above the input */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Element to display before the input */
  prefix?: ReactNode;
  /** Element to display after the input */
  suffix?: ReactNode;
  /** Function called when prefix is clicked */
  onPrefixClick?: (e: React.MouseEvent) => void;
  /** Function called when suffix is clicked */
  onSuffixClick?: (e: React.MouseEvent) => void;
  /** Additional class names for the input container */
  containerClassName?: string;
  /** Additional class names for the input element */
  inputClassName?: string;
  /** Additional class names for the label */
  labelClassName?: string;
  /** Additional class names for the error message */
  errorClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      prefix,
      suffix,
      onPrefixClick,
      onSuffixClick,
      containerClassName,
      inputClassName,
      labelClassName,
      errorClassName,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    return (
      <div className={classNames("w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={props.id}
            className={classNames(
              "block text-sm text-[#858585] font-normal mb-2",
              labelClassName
            )}
          >
            {label}
          </label>
        )}

        <div
          className={classNames(
            "relative flex items-center rounded-xl w-full border border-[#e0e0e0]",
            isFocused && "border-[#e0e0e0]",
            error && "border-red-500",
            disabled && "opacity-60 bg-gray-50",
            className
          )}
        >
          {prefix && (
            <div
              className={classNames(
                "flex items-center pl-0 pr-2",
                onPrefixClick && !disabled && "cursor-pointer"
              )}
              onClick={!disabled && onPrefixClick ? onPrefixClick : undefined}
            >
              {prefix}
            </div>
          )}

          <input
            ref={ref}
            disabled={disabled}
            className={classNames(
              "w-full py-[14px] text-sm text-black px-4 font-medium bg-transparent focus:border-none focus:outline-none disabled:cursor-not-allowed",
              inputClassName
            )}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {suffix && (
            <div
              className={classNames(
                "flex items-center pl-2 pr-2",
                onSuffixClick && !disabled && "cursor-pointer"
              )}
              onClick={!disabled && onSuffixClick ? onSuffixClick : undefined}
            >
              {suffix}
            </div>
          )}
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

Input.displayName = "Input";

export default Input;
