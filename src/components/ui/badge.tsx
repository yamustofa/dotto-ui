import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/** DottoUI Badge / Tag — small uppercase mono chip with stepped corners. */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 pixel-corner-1 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em] w-fit whitespace-nowrap [&_svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "text-foreground pixel-bordered-1",
        destructive: "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
