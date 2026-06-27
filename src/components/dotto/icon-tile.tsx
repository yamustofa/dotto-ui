import * as React from "react"

import { cn } from "@/lib/utils"

export type IconTileProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: number
  color?: string
}

export function IconTile({
  children,
  className,
  color,
  size = 56,
  style,
  ...props
}: IconTileProps) {
  return (
    <div
      className={cn(
        "grid shrink-0 place-items-center bg-accent text-accent-foreground pixel-corner",
        className
      )}
      style={{
        backgroundColor: color,
        height: size,
        width: size,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
