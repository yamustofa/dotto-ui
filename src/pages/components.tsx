import { commonIcons } from "@/components/docs/common-icons"
import { IconTile } from "@/components/docs/icon-tile"
import {
  CodeBlock,
  PageHeader,
  Section,
  Specimen,
} from "@/components/docs/doc-section"
import { PixelGlyph } from "@/components/docs/pixel-glyph"
import { StickyNote } from "@/components/docs/sticky-note"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const buttonSnippet = `import { Button } from "@/components/ui/button"

<Button>view work</Button>
<Button variant="outline"><PixelGlyph shape="sparkle" unit={3} /> start a project</Button>`

const iconSnippet = `import { Home, Search, Settings2 } from "pixelarticons/react"

<Home width={24} height={24} />`

const primitiveSnippet = `import { PixelGlyph } from "@/components/docs/pixel-glyph"
import { IconTile } from "@/components/docs/icon-tile"
import { StickyNote } from "@/components/docs/sticky-note"`

export function ComponentsPage() {
  return (
    <>
      <PageHeader eyebrow="components" title="Live building blocks">
        These components use the Tailwind v4 token layer copied from the design
        system export. The ui components keep shadcn-compatible names and
        variants, while docs primitives cover the pixel-only motifs.
      </PageHeader>

      <Section title="button">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Specimen
            title="variants"
            description="The default, secondary, outline, ghost, and destructive variants follow the low-pixel control recipe."
          >
            <div className="flex flex-wrap items-center gap-5">
              <Button>view work</Button>
              <Button variant="secondary">about us</Button>
              <Button variant="outline"><PixelGlyph shape="sparkle" unit={3} /> start a project</Button>
              <Button variant="ghost">notes</Button>
              <Button variant="destructive">delete</Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button size="sm">small</Button>
              <Button size="lg">large</Button>
              <Button size="icon" aria-label="Pixel sparkle">
                <PixelGlyph shape="sparkle" unit={3} />
              </Button>
              <Button disabled>disabled</Button>
            </div>
          </Specimen>
          <Specimen title="usage">
            <CodeBlock>{buttonSnippet}</CodeBlock>
          </Specimen>
        </div>
      </Section>

      <Section title="badge and tag">
        <Specimen
          title="badge variants"
          description="Use badges for metadata, categories, status labels, and small uppercase notes."
        >
          <div className="flex flex-wrap gap-3">
            <Badge>illustration</Badge>
            <Badge variant="secondary">branding</Badge>
            <Badge variant="outline">est. 2021</Badge>
            <Badge variant="destructive">sold out</Badge>
          </div>
        </Specimen>
      </Section>

      <Section title="card">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Digital Design", "Interfaces, websites, and digital products with soul.", "sparkle"],
            ["Branding", "Identities that feel timeless, crafted with care.", "plus"],
            ["Illustration", "Custom artwork for brands that tells a story.", "heart"],
          ].map(([title, copy, glyph]) => (
            <Card key={title}>
              <CardHeader>
                <IconTile>
                  <PixelGlyph shape={glyph as "sparkle" | "plus" | "heart"} />
                </IconTile>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{copy}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-px bg-foreground/20" />
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  view service
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="input">
        <div className="grid gap-5 lg:grid-cols-2">
          <Specimen
            title="field"
            description="Inputs use the same pixel-bordered utility as outlined controls."
          >
            <form
              className="flex max-w-md flex-col gap-3"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input type="email" placeholder="your email" />
              <Button type="submit" className="w-fit">
                subscribe
              </Button>
            </form>
          </Specimen>
          <Specimen title="notes">
            <p className="m-0 font-mono text-sm leading-relaxed text-muted-foreground">
              Placeholder text is uppercase and label-like. Pair fields with
              short helper copy, not long instructions.
            </p>
          </Specimen>
        </div>
      </Section>

      <Section title="common icons">
        <Specimen
          title="pixelarticons free set"
          description="Use Pixelarticons for common interface actions. The installed npm package is the free MIT-licensed set; do not run the Pro upgrade command for this scaffold."
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {commonIcons.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex min-h-24 flex-col items-center justify-center gap-3 bg-muted px-3 py-4 text-center pixel-corner"
              >
                <Icon aria-hidden="true" width={24} height={24} />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <CodeBlock>{iconSnippet}</CodeBlock>
          </div>
        </Specimen>
      </Section>
      <Section title="docs primitives">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Specimen
            title="glyphs and tiles"
            description="PixelGlyph draws motifs using one span and square box shadows."
          >
            <div className="flex flex-wrap items-center gap-6">
              <IconTile>
                <PixelGlyph shape="sparkle" />
              </IconTile>
              <IconTile className="bg-secondary text-secondary-foreground">
                <PixelGlyph shape="heart" />
              </IconTile>
              <IconTile className="bg-primary text-primary-foreground">
                <PixelGlyph shape="plus" />
              </IconTile>
              <PixelGlyph shape="diamond" unit={6} />
            </div>
          </Specimen>
          <Specimen title="sticky note">
            <StickyNote glyph={<PixelGlyph shape="heart" unit={3} />}>
              keep making
              <br />
              beautiful things
            </StickyNote>
          </Specimen>
          <Specimen title="primitive imports" className="lg:col-span-2">
            <CodeBlock>{primitiveSnippet}</CodeBlock>
          </Specimen>
        </div>
      </Section>
    </>
  )
}
