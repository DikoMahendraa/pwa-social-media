"use client";

interface BottomSheetProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export function BottomSheet({ children, isOpen, onClose }: BottomSheetProps) {
  return (
    <>
      {/* Overlay - clicking this will close the sheet */}
      <div
        className={`
          fixed inset-0 bg-black/25 backdrop-blur-[0px] z-50 transition-opacity duration-300
         ${isOpen ? "opacity-100 blur" : "opacity-0 pointer-events-none"}
      `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-50 transition-transform duration-300 ease-out 
          ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks on the sheet from closing it
      >
        {children}
      </div>
    </>
  );
}
