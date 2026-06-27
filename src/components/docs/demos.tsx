import { PixelGlyph, type PixelGlyphProps } from "@/components/dotto/pixel-glyph"
import { StickyNote, type StickyNoteProps } from "@/components/dotto/sticky-note"

/**
 * StickyNote with a trailing PixelGlyph, exposed via simple string props so it
 * can be used from MDX without passing a JSX element as a prop (which the MDX →
 * bundler pipeline can't serialize).
 */
export function StickyNoteGlyph({
  shape = "heart",
  unit = 3,
  children,
  ...props
}: { shape?: PixelGlyphProps["shape"]; unit?: number } & StickyNoteProps) {
  return (
    <StickyNote glyph={<PixelGlyph shape={shape} unit={unit} />} {...props}>
      {children}
    </StickyNote>
  )
}
