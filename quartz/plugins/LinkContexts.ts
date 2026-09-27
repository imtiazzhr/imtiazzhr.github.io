import type { Element, ElementContent, Root } from "hast"
import { toText } from "hast-util-to-text"
import { visitParents } from "unist-util-visit-parents"
import { simplifySlug } from "@quartz-community/utils"
import type { QuartzTransformerPlugin } from "./types"

// For every internal link in a note, remember the sentence or list item it sits in.
// "Links to this note" (quartz/components/LinksToThisNote.tsx) shows that text under each backlink,
// the way Andy Matuschak's notes do. Runs after crawl-links, which adds data-slug to internal links.

const BLOCKS = new Set(["p", "li", "blockquote", "dd", "dt", "td", "th", "figcaption"])
const MAX = 280

// The block's own text: for a list item, leave out any nested list below it
function ownText(block: Element): string {
  const children = block.children.filter(
    (c: ElementContent) => !(c.type === "element" && (c.tagName === "ul" || c.tagName === "ol")),
  )
  const text = toText({ ...block, children } as Element)
    .replace(/\s+/g, " ")
    .trim()
  if (text.length <= MAX) return text
  const cut = text.slice(0, MAX)
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.–—-]+$/, "") + "…"
}

declare module "vfile" {
  interface DataMap {
    linkContexts: Record<string, string>
  }
}

export const LinkContexts: QuartzTransformerPlugin = () => ({
  name: "LinkContexts",
  htmlPlugins() {
    return [
      () => (tree: Root, file) => {
        const contexts: Record<string, string> = {}
        visitParents(tree, "element", (node: Element, ancestors) => {
          if (node.tagName !== "a") return
          const target = node.properties?.dataSlug ?? node.properties?.["data-slug"]
          if (typeof target !== "string" || target === "") return
          const key = simplifySlug(target as never)
          if (contexts[key]) return
          for (let i = ancestors.length - 1; i >= 0; i--) {
            const a = ancestors[i]
            if (a.type === "element" && BLOCKS.has(a.tagName)) {
              contexts[key] = ownText(a)
              return
            }
          }
        })
        file.data.linkContexts = contexts
      },
    ]
  },
})
