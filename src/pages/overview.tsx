import { NavLink } from "react-router-dom"

import { IconTile } from "@/components/docs/icon-tile"
import { PageHeader, Section, Specimen, CodeBlock } from "@/components/docs/doc-section"
import { PixelGlyph } from "@/components/docs/pixel-glyph"
import { StickyNote } from "@/components/docs/sticky-note"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const quickStart = `npm install
npm run dev`

const installNotes = `import { Button } from "@/components/ui/button"

export function ProjectCta() {
  return <Button>start a project</Button>
}`

export function OverviewPage() {
  return (
    <>
      <PageHeader eyebrow="design system" title="DottoUI">
        A gentle pixel-art system for handmade digital work: warm paper, navy ink, cornflower blues, sand accents, square-built details, and controls that feel tactile without getting loud.
      </PageHeader>

      <Section title="first screen">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="pixel-bordered p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-wrap gap-3">
              <Badge>studio system</Badge>
              <Badge variant="secondary">pixel language</Badge>
              <Badge variant="outline">shadcn ready</Badge>
            </div>
            <h2 className="m-0 max-w-2xl font-display text-6xl uppercase leading-[0.86] sm:text-7xl lg:text-8xl">
              Make it by Hand
            </h2>
            <p className="mt-6 max-w-xl font-mono text-base leading-relaxed text-muted-foreground sm:text-lg">
              DottoUI is a small, craft-forward identity for playful interfaces, studio notes, shop moments, and cozy product surfaces. This docs app keeps the tokens and components ready for real use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <NavLink to="/components">view components</NavLink>
              </Button>
              <Button asChild variant="outline">
                <NavLink to="/foundations">see foundations</NavLink>
              </Button>
            </div>
          </div>

          <div className="relative grid min-h-[360px] place-items-center overflow-hidden pixel-bordered [--pf-fill:var(--card)]">
            <img
              src="/assets/AZ8CHhfFYrCW6myfmvu5XA-AZ8CHjnGZqYg-0mCh5ip7w.png"
              alt="DottoUI pixel-art reference artwork"
              className="h-auto w-[40%] min-w-[130px] max-w-[240px] object-contain pixelated"
            />
            <div className="absolute right-5 top-5">
              <StickyNote
                align="center"
                glyph={<PixelGlyph shape="heart" unit={3} />}
              >
                handmade
                <br />
                with care
              </StickyNote>
            </div>
          </div>
        </div>
      </Section>

      <Section title="system map">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Foundations",
              copy: "Color, type, corners, shadows, motion, and the pixel utility recipes.",
              glyph: "sparkle" as const,
              to: "/foundations",
            },
            {
              title: "Components",
              copy: "shadcn-compatible Button, Badge, Card, and Input plus docs primitives.",
              glyph: "plus" as const,
              to: "/components",
            },
            {
              title: "Examples",
              copy: "Composed blocks that show how the pieces behave in real layouts.",
              glyph: "heart" as const,
              to: "/examples",
            },
          ].map((item) => (
            <Card key={item.title} className="gap-5">
              <CardHeader>
                <IconTile>
                  <PixelGlyph shape={item.glyph} />
                </IconTile>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.copy}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm">
                  <NavLink to={item.to}>open section</NavLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="quick start">
        <div className="grid gap-5 lg:grid-cols-2">
          <Specimen title="run the docs" description="The app is isolated in app/.">
            <CodeBlock>{quickStart}</CodeBlock>
          </Specimen>
          <Specimen
            title="component import"
            description="Use the shadcn-compatible exports from src/components/ui."
          >
            <CodeBlock>{installNotes}</CodeBlock>
          </Specimen>
        </div>
      </Section>
    </>
  )
}
