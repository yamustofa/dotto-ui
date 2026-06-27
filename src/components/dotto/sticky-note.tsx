import * as React from "react"

import { cn } from "@/lib/utils"

export type StickyNoteProps = React.HTMLAttributes<HTMLDivElement> & {
  glyph?: React.ReactNode
  align?: "left" | "center" | "right"
}

export function StickyNote({
  children,
  className,
  glyph,
  align = "left",
  ...props
}: StickyNoteProps) {
  return (
    <div
      className={cn(
        "inline-block px-4 py-3.5 font-mono text-xs font-bold uppercase leading-relaxed tracking-[0.05em] text-secondary-foreground pixel-bordered pixel-depth [--pf-fill:var(--secondary)]",
        className
      )}
      style={{ textAlign: align }}
      {...props}
    >
      {children}
      {glyph ? <span className="ml-1.5 inline-block">{glyph}</span> : null}
    </div>
  )
}
