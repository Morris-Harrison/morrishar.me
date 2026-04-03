import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function GlassButton({
  selected = false,
  className,
  children,
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
        // Dark base so it stands out from the background
        "bg-black/70 text-slate-100 shadow-sm shadow-black/40 border border-white/10 backdrop-blur",
        // Slight hover change without borders/rings (only when not selected)
        !selected && "hover:bg-black/80 hover:shadow-md",
        // Selected: slightly lighter glass so it pops
        selected && "bg-white/15 border-white/30",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
