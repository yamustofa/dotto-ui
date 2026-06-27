import * as React from "react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "font-mono text-xs font-bold uppercase leading-none tracking-[0.08em] text-foreground",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-45",
        className
      )}
      {...props}
    />
  )
}

export { Label }
