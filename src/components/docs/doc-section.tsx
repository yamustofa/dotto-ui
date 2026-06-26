import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <header className="mb-8 grid gap-5 lg:mb-10">
      <Badge variant="outline">{eyebrow}</Badge>
      <div className="max-w-4xl">
        <h1 className="m-0 font-display text-5xl uppercase leading-[0.88] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl font-mono text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </p>
      </div>
    </header>
  )
}

export function Section({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("mb-10", className)}>
      <h2 className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function Specimen({
  title,
  description,
  children,
  className,
}: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <article className={cn("pixel-bordered p-5", className)}>
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="m-0 font-mono text-sm font-bold uppercase tracking-[0.08em]">
            {title}
          </h3>
          {description ? (
            <p className="mt-2 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {children}
    </article>
  )
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto bg-muted px-4 py-3 text-xs leading-relaxed text-foreground pixel-corner">
      <code>{children}</code>
    </pre>
  )
}
