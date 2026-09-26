import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"
import SiteFooter from "./quartz/components/SiteFooter"
import { componentRegistry } from "./quartz/components/registry"

// Layout conditions used in quartz.config.yaml
registerCondition("is-index", (props) => props.fileData.slug === "index")
registerCondition("in-vet-notes", (props) => (props.fileData.slug ?? "").startsWith("vet-notes/"))

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

const config = await loadQuartzConfig()

// Same custom footer on every kind of page
const layout = await loadQuartzLayout()
const footer = [SiteFooter()]
layout.defaults.footer = footer
for (const pageType of Object.values(layout.byPageType)) {
  pageType.footer = footer
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
