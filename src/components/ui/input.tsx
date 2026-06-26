import * as React from "react"

import { cn } from "@/lib/utils"

/** DottoUI Input — cream field, 2px navy pixel border, stepped corners. */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full pixel-bordered px-3.5 py-2 font-mono text-sm text-foreground",
        "placeholder:text-muted-foreground placeholder:uppercase placeholder:tracking-[0.06em] placeholder:text-xs",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-45",
        className
      )}
      {...props}
    />
  )
}

export { Input }
