import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full resize-y pixel-bordered px-3.5 py-3 font-mono text-sm text-foreground",
        "placeholder:text-muted-foreground placeholder:uppercase placeholder:tracking-[0.06em] placeholder:text-xs",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-45",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
