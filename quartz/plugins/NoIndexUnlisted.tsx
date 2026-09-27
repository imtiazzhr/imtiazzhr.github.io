import type { QuartzTransformerPlugin } from "./types"

// Pages marked `unlisted: true` (such as the CV) are reachable only by their link.
// This also asks search engines not to index them if the link ever ends up somewhere public.
export const NoIndexUnlisted: QuartzTransformerPlugin = () => ({
  name: "NoIndexUnlisted",
  externalResources() {
    return {
      additionalHead: [
        (pageData) =>
          (pageData as { unlisted?: boolean }).unlisted === true ? (
            <meta name="robots" content="noindex, nofollow" />
          ) : (
            <></>
          ),
      ],
    }
  },
})
