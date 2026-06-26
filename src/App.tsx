import { useEffect, useState } from "react"
import { HashRouter, NavLink, Route, Routes } from "react-router-dom"
import { CloudSun, Close, Menu, Moon } from "pixelarticons/react"

import { PixelGlyph } from "@/components/docs/pixel-glyph"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ComponentsPage } from "@/pages/components"
import { ExamplesPage } from "@/pages/examples"
import { FoundationsPage } from "@/pages/foundations"
import { OverviewPage } from "@/pages/overview"

const navItems = [
  { to: "/", label: "overview", end: true },
  { to: "/foundations", label: "foundations" },
  { to: "/components", label: "components" },
  { to: "/examples", label: "examples" },
]

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={isDark ? "Use light theme" : "Use dark theme"}
      onClick={() => setIsDark((value) => !value)}
    >
      {isDark ? <CloudSun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  )
}

function Navigation({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "pixel-corner px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground transition-colors",
              "hover:bg-secondary hover:text-secondary-foreground",
              isActive && "bg-primary text-primary-foreground"
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

function DocsShell() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b-2 border-border bg-background/95 backdrop-blur lg:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center bg-accent pixel-corner">
              <PixelGlyph shape="diamond" unit={3} />
            </span>
            <span className="font-display text-2xl uppercase leading-none">
              DottoUI
            </span>
          </NavLink>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? (<Close aria-hidden="true" />) : (<Menu aria-hidden="true" />)}
            </Button>
          </div>
        </div>
        {mobileOpen ? (
          <div className="border-t-2 border-border px-4 py-4">
            <Navigation onNavigate={() => setMobileOpen(false)} />
          </div>
        ) : null}
      </header>

      <div className="lg:grid lg:min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r-2 border-border bg-card lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:p-6">
          <div>
            <NavLink to="/" className="mb-10 flex items-center gap-4">
              <span className="grid size-12 place-items-center bg-accent pixel-corner pixel-shadow-sm">
                <PixelGlyph shape="diamond" unit={4} />
              </span>
              <span>
                <span className="block font-display text-4xl uppercase leading-[0.85]">
                  DottoUI
                </span>
                <span className="block pt-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  system docs
                </span>
              </span>
            </NavLink>
            <Navigation />
          </div>
          <div className="space-y-5">
            <div className="h-px bg-foreground/20" />
            <div className="flex items-center justify-between gap-3">
              <Badge variant="outline">tailwind v4</Badge>
              <ThemeToggle />
            </div>
            <p className="m-0 font-mono text-xs leading-relaxed text-muted-foreground">
              A warm pixel system for gentle interfaces, studio notes, and crafted product moments.
            </p>
          </div>
        </aside>

        <main className="min-w-0 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          <div className="mx-auto max-w-6xl">
            <Routes>
              <Route path="/" element={<OverviewPage />} />
              <Route path="/foundations" element={<FoundationsPage />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/examples" element={<ExamplesPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <DocsShell />
    </HashRouter>
  )
}
