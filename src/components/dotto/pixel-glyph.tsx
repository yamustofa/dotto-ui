import * as React from "react"

type PixelGlyphShape = "sparkle" | "heart" | "plus" | "diamond" | "square"

const presets: Record<PixelGlyphShape, string[]> = {
  sparkle: ["..#..", ".###.", "#####", ".###.", "..#.."],
  heart: [".#.#.", "#####", "#####", ".###.", "..#.."],
  plus: ["..#..", "..#..", "#####", "..#..", "..#.."],
  diamond: ["..#..", ".###.", "#####", ".###.", "..#.."],
  square: ["##", "##"],
}

export type PixelGlyphProps = React.HTMLAttributes<HTMLSpanElement> & {
  shape?: PixelGlyphShape
  rows?: string[]
  unit?: number
  color?: string
}

export function PixelGlyph({
  shape = "sparkle",
  rows,
  unit = 4,
  color = "currentColor",
  style,
  ...props
}: PixelGlyphProps) {
  const map = rows ?? presets[shape]
  const width = Math.max(...map.map((row) => row.length))
  const shadows: string[] = []

  map.forEach((row, y) => {
    Array.from(row).forEach((cell, x) => {
      if (cell !== "." && cell !== " ") {
        shadows.push(`${x * unit}px ${y * unit}px 0 ${color}`)
      }
    })
  })

  return (
    <span
      aria-hidden="true"
      style={{
        boxShadow: shadows.join(","),
        display: "inline-block",
        height: unit,
        marginBottom: (map.length - 1) * unit,
        marginRight: (width - 1) * unit,
        verticalAlign: "middle",
        width: unit,
        ...style,
      }}
      {...props}
    />
  )
}
