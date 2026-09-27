import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"
import SiteFooter from "./quartz/components/SiteFooter"
import ByLine from "./quartz/components/ByLine"
import LinksToThisNote from "./quartz/components/LinksToThisNote"
import { LinkContexts } from "./quartz/plugins/LinkContexts"
import { NoIndexUnlisted } from "./quartz/plugins/NoIndexUnlisted"
import { componentRegistry } from "./quartz/components/registry"

// Layout conditions used in quartz.config.yaml
registerCondition("is-index", (props) => props.fileData.slug === "index")
registerCondition("in-vet-notes", (props) => (props.fileData.slug ?? "").startsWith("vet-notes/"))
registerCondition("vet-note-page", (props) => {
  const slug = props.fileData.slug ?? ""
  return slug.startsWith("vet-notes/") && !slug.endsWith("/index")
})

// Folder listings: vet notes A to Z, everything else newest first (sub-folders always on top)
const isFolder = (slug?: string) => !!slug && slug.endsWith("/index")
const dateOf = (f: any) =>
  (f.dates?.published ?? f.dates?.created ?? f.dates?.modified)?.getTime?.() ?? 0
const titleOf = (f: any) => String(f.frontmatter?.title ?? f.slug ?? "").toLowerCase()
const folderSort = (f1: any, f2: any) => {
  if (isFolder(f1.slug) !== isFolder(f2.slug)) return isFolder(f1.slug) ? -1 : 1
  const vet = (f1.slug ?? "").startsWith("vet-notes/") && (f2.slug ?? "").startsWith("vet-notes/")
  if (!vet && dateOf(f1) !== dateOf(f2)) return dateOf(f2) - dateOf(f1)
  return titleOf(f1).localeCompare(titleOf(f2))
}
for (const name of ["folder-page", "@quartz-community/folder-page"]) {
  componentRegistry.setOptionOverrides(name, { sort: folderSort })
}

// Sidebar: Essays, Books, Exams & licensing, Vet medicine, Clinical vet notes, About, Now.
// Exams and the Medicine hub live inside vet-notes/, but the sidebar lifts them to the top level;
// their URLs stay the same. Projects is linked from the home page only.
// (These functions run in the visitor's browser, so they must not use anything defined outside them.)
const explorerFilter = (node: any) => node.slugSegment !== "tags" && node.slugSegment !== "projects"
const explorerMap = (node: any) => {
  if (!node.slugSegments || node.slugSegments.length !== 0) return
  const vet = node.children.find((c: any) => c.slugSegment === "vet-notes")
  if (!vet) return
  const lift: Record<string, string> = { exams: "Exams & licensing", medicine: "Vet medicine" }
  for (const key of Object.keys(lift)) {
    const child = vet.children.find((c: any) => c.slugSegment === key)
    if (!child) continue
    vet.children = vet.children.filter((c: any) => c !== child)
    child.displayName = lift[key]
    node.children.push(child)
  }
}
const explorerSort = (a: any, b: any) => {
  const top: Record<string, number> = {
    essays: 1, books: 2, exams: 3, medicine: 4, "vet-notes": 5, about: 6, now: 7,
  }
  const ra = top[a.slugSegment]
  const rb = top[b.slugSegment]
  if (ra !== undefined || rb !== undefined) return (ra ?? 99) - (rb ?? 99)
  if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
  return String(a.displayName).localeCompare(String(b.displayName), undefined, { numeric: true, sensitivity: "base" })
}
for (const name of ["explorer", "@quartz-community/explorer"]) {
  componentRegistry.setOptionOverrides(name, {
    sortFn: explorerSort,
    filterFn: explorerFilter,
    mapFn: explorerMap,
  })
}

const config = await loadQuartzConfig()

// Same custom footer on every kind of page
const layout = await loadQuartzLayout()
const footer = [SiteFooter()]
layout.defaults.footer = footer
for (const pageType of Object.values(layout.byPageType)) {
  pageType.footer = footer
}

// "@imtiaz · 4 min read · date" under essay and article titles
const byline = ByLine()
for (const target of [layout.defaults, layout.byPageType.content].filter(Boolean)) {
  target!.beforeBody = [...(target!.beforeBody ?? []), byline]
}

// "Links to this note" after every note, with the sentence each link sits in
config.plugins.transformers.push(LinkContexts(), NoIndexUnlisted())
const linksToThisNote = LinksToThisNote()
for (const target of [layout.defaults, layout.byPageType.content].filter(Boolean)) {
  target!.afterBody = [...(target!.afterBody ?? []), linksToThisNote]
}

// The page renderer was created inside loadQuartzConfig with the plain layout; swap in ours
const i = config.plugins.emitters.findIndex((e) => e.name === "PageTypeDispatcher")
if (i >= 0) {
  config.plugins.emitters[i] = PageTypeDispatcher({
    defaults: layout.defaults,
    byPageType: layout.byPageType,
  })
}

export default config
export { layout }
