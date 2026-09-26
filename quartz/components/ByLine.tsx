import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

// "@imtiaz · 4 min read · Dec 6, 2020" under the title of essays and articles
const AUTHOR = "@imtiaz"
const AUTHOR_LINK = "/about"
const WORDS_PER_MINUTE = 220

function ByLine({ fileData, cfg }: QuartzComponentProps) {
  const slug = fileData.slug ?? ""
  if (!/^(essays|articles)\/(?!index$)/.test(slug)) return null

  const words = (fileData.text ?? "").split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE))

  const raw = (fileData.frontmatter as Record<string, unknown> | undefined)?.date
  const d = raw ? new Date(String(raw)) : (fileData.dates?.created ?? fileData.dates?.modified)
  const date = d && !isNaN(d.getTime()) ? d : undefined
  const locale = cfg?.locale ?? "en-US"

  return (
    <p class="byline">
      <a href={AUTHOR_LINK} class="byline-author">
        {AUTHOR}
      </a>
      <span class="byline-sep">·</span>
      <span>{minutes} min read</span>
      {date ? (
        <>
          <span class="byline-sep">·</span>
          <time dateTime={date.toISOString()}>
            {date.toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })}
          </time>
        </>
      ) : null}
    </p>
  )
}

export default (() => ByLine) satisfies QuartzComponentConstructor
