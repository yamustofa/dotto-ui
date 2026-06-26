import { IconTile } from "@/components/docs/icon-tile"
import { PageHeader, Section, Specimen } from "@/components/docs/doc-section"
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
import { Input } from "@/components/ui/input"

export function ExamplesPage() {
  return (
    <>
      <PageHeader eyebrow="examples" title="Composed patterns">
        These examples show how the tokens and components hold together in real
        interface blocks: compact, tactile, and built for the DottoUI voice.
      </PageHeader>

      <Section title="landing hero slice">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="pixel-bordered p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap gap-3">
              <Badge>creative studio</Badge>
              <Badge variant="secondary">est. 2021</Badge>
            </div>
            <h2 className="m-0 font-display text-6xl uppercase leading-[0.86] sm:text-7xl">
              Make
              <br />
              it
              <br />
              softly
            </h2>
            <p className="mt-6 max-w-lg font-mono text-base leading-relaxed text-muted-foreground">
              We shape gentle digital experiences with a touch of nostalgia, tidy details, and a lot of care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button>view work</Button>
              <Button variant="ghost">about us</Button>
            </div>
          </div>
          <div className="relative grid min-h-[420px] place-items-center overflow-hidden pixel-bordered">
            <img
              src="/assets/AZ8CHhq6cQ7RPyrykBMxFw-AZ8CHjicQwWZJUL-2JYL2A.png"
              alt="DottoUI pixel-art illustration"
              className="h-auto w-[40%] min-w-[130px] max-w-[240px] object-contain pixelated"
            />
            <div className="absolute bottom-5 right-5">
              <StickyNote
                glyph={<PixelGlyph shape="sparkle" unit={3} />}
                align="center"
              >
                make
                <br />
                with care
              </StickyNote>
            </div>
          </div>
        </div>
      </Section>

      <Section title="service cards">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Digital Design", "Interfaces, websites, and digital products with soul.", "sparkle"],
            ["Branding", "Identities that feel timeless, crafted with care.", "plus"],
            ["Illustration", "Custom artwork for brands that tells a story.", "heart"],
          ].map(([title, copy, glyph]) => (
            <Card key={title} className="gap-5">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <IconTile>
                    <PixelGlyph shape={glyph as "sparkle" | "plus" | "heart"} />
                  </IconTile>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="mt-2">{copy}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  read more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="newsletter block">
        <Specimen
          title="small conversion form"
          description="Useful for notes, shop drops, project inquiries, or studio updates."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-center">
            <div>
              <Badge variant="secondary">studio notes</Badge>
              <h3 className="mt-5 max-w-2xl font-display text-5xl uppercase leading-[0.9]">
                Small notes from the making table
              </h3>
              <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
                Send short, craft-forward copy. The system works best when the
                message feels handmade and direct.
              </p>
            </div>
            <form
              className="grid gap-3"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input type="email" placeholder="your email" />
              <Button type="submit">join the list</Button>
            </form>
          </div>
        </Specimen>
      </Section>

      <Section title="small status row">
        <Specimen title="metadata rhythm">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>available</Badge>
            <Badge variant="outline">4 week sprint</Badge>
            <Badge variant="secondary">pixel polish</Badge>
            <div className="mx-1 h-px w-12 bg-foreground/30" />
            <span className="font-mono text-xs leading-relaxed text-muted-foreground">
              Good for lightweight operational UI inside the brand language.
            </span>
          </div>
        </Specimen>
      </Section>
    </>
  )
}
