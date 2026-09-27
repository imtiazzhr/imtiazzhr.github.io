import { resolveRelative, simplifySlug } from "@quartz-community/utils"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

// "Links to this note" at the end of every note: each note that links here,
// with the sentence the link sits in (or the linking note's description), after Andy Matuschak's notes.
// Home and folder pages are left out as sources and as targets; so are unlisted pages.

const MIN_CONTEXT = 60 // a shorter context (e.g. a bare list item) falls back to the linking note's description

const isListing = (slug: string) => slug === "index" || slug.endsWith("/index")
const titleOf = (f: any) => String(f.frontmatter?.title ?? f.slug ?? "")

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()

// Prefer the sentence around the link; else the linking note's own description.
// Roam-style notes often link from a bare list item, which says nothing new, so show no text then.
function excerpt(f: any, target: string, currentTitle: string): string {
  const ctx = String(f.linkContexts?.[target] ?? "").trim()
  if (ctx.length >= MIN_CONTEXT) return ctx
  const desc = f.frontmatter?.description
  if (typeof desc === "string" && desc.trim()) return desc.trim()
  if (ctx.length >= 30 && norm(ctx) !== norm(currentTitle)) return ctx
  return ""
}

function LinksToThisNote({ fileData, allFiles }: QuartzComponentProps) {
  const slug = fileData.slug ?? ""
  if (!slug || isListing(slug) || (fileData as any).unlisted === true) return null

  const target = simplifySlug(slug as never)
  const sources = allFiles
    .filter((f: any) => {
      const s = f.slug ?? ""
      return s !== slug && !isListing(s) && f.unlisted !== true && f.links?.includes(target)
    })
    .sort((a: any, b: any) => titleOf(a).localeCompare(titleOf(b)))
  if (sources.length === 0) return null

  return (
    <section class="links-to-note">
      <h2 class="ltn-heading">Links to this note</h2>
      <div class="ltn-grid">
        {sources.map((f: any) => {
          const text = excerpt(f, target, titleOf(fileData))
          return (
            <a class="ltn-card" href={resolveRelative(slug as never, f.slug)} data-no-popover="true">
              <span class="ltn-card-title">{titleOf(f)}</span>
              {text ? <span class="ltn-card-text">{text}</span> : null}
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default (() => LinksToThisNote) satisfies QuartzComponentConstructor
