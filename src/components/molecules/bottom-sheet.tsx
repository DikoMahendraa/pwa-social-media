"use client";
import { Flag, Archive, Share } from "lucide-react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BottomSheet({ isOpen, onClose }: BottomSheetProps) {
  return (
    <>
      {/* Overlay - clicking this will close the sheet */}
      <div
        className={`
          fixed inset-0 bg-black/25 z-50 transition-opacity duration-300
         ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
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
        <div className="bg-white rounded-t-2xl max-w-md mx-auto w-full p-4 shadow-lg">
          <div className="space-y-4">
            {/* Report Option */}
            <button
              onClick={() => console.log("Report clicked")}
              className="flex items-center w-full p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Flag className="w-5 h-5 mr-3" />
              <span>Report</span>
            </button>

            {/* Archive Option */}
            <button
              onClick={() => console.log("Archive clicked")}
              className="flex items-center w-full p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Archive className="w-5 h-5 mr-3" />
              <span>Archive</span>
            </button>

            {/* Share Option */}
            <button
              onClick={() => console.log("Share clicked")}
              className="flex items-center w-full p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Share className="w-5 h-5 mr-3" />
              <span>Share</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full py-3 px-4 border border-gray-200 rounded-lg mt-4 hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
