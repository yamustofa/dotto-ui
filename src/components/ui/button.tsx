import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * DottoUI Button.
 * Signature low-pixel control: stepped corners (.pixel-corner), a hard navy
 * offset shadow (.pixel-shadow), and a sink-on-press (translate + drop shadow).
 * Labels are uppercase mono.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.06em] transition-transform duration-75 ease-[steps(2,end)] active:translate-x-1 active:translate-y-1 active:pixel-shadow-none disabled:pointer-events-none disabled:opacity-45 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground pixel-corner pixel-shadow",
        secondary: "bg-secondary text-secondary-foreground pixel-corner pixel-shadow",
        outline: "text-foreground pixel-bordered pixel-shadow active:pixel-shadow-none",
        ghost: "bg-transparent text-foreground border-2 border-dashed border-foreground pixel-corner",
        destructive: "bg-destructive text-destructive-foreground pixel-corner pixel-shadow",
        link: "text-accent normal-case tracking-normal underline-offset-4 hover:underline",
      },
      size: {
        default: "px-[22px] py-[14px]",
        sm: "px-[14px] py-[9px] text-[11px]",
        lg: "px-7 py-4 text-sm",
        icon: "size-11 px-0 py-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
