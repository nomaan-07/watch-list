import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface OverlayProps {
  isOpen?: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Overlay({ onClose, children }: OverlayProps) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-500/10 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-4xl bg-zinc-700 p-4 shadow shadow-orange-500"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Overlay;
