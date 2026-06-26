import { PageHeader, Section, Specimen } from "@/components/docs/doc-section"
import { PixelGlyph } from "@/components/docs/pixel-glyph"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const colors = [
  ["background", "cream paper", "bg-background text-foreground"],
  ["foreground", "navy ink", "bg-foreground text-background"],
  ["card", "soft surface", "bg-card text-card-foreground"],
  ["primary", "cornflower action", "bg-primary text-primary-foreground"],
  ["secondary", "warm sand", "bg-secondary text-secondary-foreground"],
  ["accent", "blue accent", "bg-accent text-accent-foreground"],
  ["muted", "quiet panel", "bg-muted text-muted-foreground"],
  ["destructive", "muted brick", "bg-destructive text-destructive-foreground"],
]

export function FoundationsPage() {
  return (
    <>
      <PageHeader eyebrow="foundations" title="Tokens and rules">
        The system is intentionally small: one cream canvas, one navy ink, a
        compact family of blues, one sand accent, square-built glyphs, and no
        rounded UI corners.
      </PageHeader>

      <Section title="color tokens">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {colors.map(([token, label, classes]) => (
            <div key={token} className="pixel-bordered p-4">
              <div className={`mb-3 h-20 pixel-corner ${classes}`} />
              <div className="font-mono text-xs font-bold uppercase tracking-[0.08em]">
                --{token}
              </div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="typography">
        <div className="grid gap-5 lg:grid-cols-2">
          <Specimen
            title="display"
            description="Pixelify Sans is reserved for stacked, uppercase display moments."
          >
            <div className="font-display text-6xl uppercase leading-[0.86] sm:text-7xl">
              Pixel
              <br />
              Studio
            </div>
          </Specimen>
          <Specimen
            title="body and labels"
            description="Space Mono carries body text, labels, captions, and controls."
          >
            <p className="m-0 max-w-xl font-mono text-base leading-relaxed text-foreground">
              We craft thoughtful digital experiences with a touch of nostalgia
              and lots of heart.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Badge>service label</Badge>
              <Badge variant="outline">est. 2021</Badge>
            </div>
          </Specimen>
        </div>
      </Section>

      <Section title="pixel recipes">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Specimen title="filled corner">
            <div className="grid h-20 place-items-center bg-primary text-primary-foreground pixel-corner">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.08em]">
                pixel-corner
              </span>
            </div>
          </Specimen>
          <Specimen title="crisp border">
            <div className="grid h-20 place-items-center pixel-bordered">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.08em]">
                pixel-bordered
              </span>
            </div>
          </Specimen>
          <Specimen title="hard shadow">
            <div className="grid h-20 place-items-center">
              <div className="bg-secondary px-5 py-4 text-secondary-foreground pixel-corner pixel-shadow">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.08em]">
                  pixel-shadow
                </span>
              </div>
            </div>
          </Specimen>
          <Specimen title="square glyphs">
            <div className="flex h-20 items-center justify-center gap-8">
              <PixelGlyph shape="sparkle" unit={5} />
              <PixelGlyph shape="heart" unit={5} />
              <PixelGlyph shape="plus" unit={5} />
            </div>
          </Specimen>
        </div>
      </Section>

      <Section title="motion">
        <Specimen
          title="low-pixel press"
          description="Filled and outlined controls translate by the shadow offset and remove the drop shadow while active."
        >
          <div className="flex flex-wrap items-center gap-5">
            <Button>press me</Button>
            <Button variant="outline">outline press</Button>
            <p className="m-0 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
              The transition is short and stepped to keep the interaction crisp.
            </p>
          </div>
        </Specimen>
      </Section>
    </>
  )
}
