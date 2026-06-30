// @ts-check
import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"

const dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: "https://yamustofa.github.io",
  base: "/dotto-ui/",
  integrations: [
    react(),
    starlight({
      title: "DottoUI",
      description:
        "A warm pixel-art component system: cream paper, navy ink, cornflower blues.",
      tagline: "A warm pixel system for gentle interfaces.",
      favicon: "/favicon.svg",
      customCss: ["./src/styles/starlight.css"],
      components: {
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
        Pagination: "./src/components/starlight/Pagination.astro",
      },
      pagination: true,
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Overview", slug: "getting-started/overview" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Local development", slug: "getting-started/local-development" },
          ],
        },
        {
          label: "Foundations",
          items: [
            { label: "Colors", slug: "foundations/colors" },
            { label: "Typography", slug: "foundations/typography" },
            { label: "Pixel utilities", slug: "foundations/pixel-utilities" },
          ],
        },
        {
          label: "Components",
          items: [
            { label: "Button", slug: "components/button" },
            { label: "Badge", slug: "components/badge" },
            { label: "Card", slug: "components/card" },
            { label: "Input", slug: "components/input" },
            { label: "Label", slug: "components/label" },
            { label: "Textarea", slug: "components/textarea" },
            { label: "Checkbox", slug: "components/checkbox" },
          ],
        },
        {
          label: "Dotto",
          items: [
            { label: "PixelGlyph", slug: "dotto/pixel-glyph" },
            { label: "IconTile", slug: "dotto/icon-tile" },
            { label: "StickyNote", slug: "dotto/sticky-note" },
          ],
        },
        {
          label: "Examples",
          items: [{ label: "Composed patterns", slug: "examples/patterns" }],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(dirname, "./src"),
      },
    },
  },
})
