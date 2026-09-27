import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

// ---- Edit these to change the footer on every page ----
const NAME = "Imtiaz"
const SOCIAL: [label: string, href: string][] = [
  ["X", "https://x.com/imtiazzhr"],
  ["Instagram", "https://www.instagram.com/imtiazzhr"],
  ["Facebook", "https://www.facebook.com/imtiazzhr"],
  ["Email", "mailto:imtiazdvm@gmail.com"],
]
const TOPICS: [label: string, href: string][] = [
  ["Essays", "/essays/"],
  ["Books", "/books/"],
  ["Vet notes", "/vet-notes/"],
  ["Horses", "/tags/horses"],
  ["Camels", "/vet-notes/species/camel-diseases"],
  ["Cattle", "/tags/cattle"],
  ["Sheep & goats", "/vet-notes/species/sheep-and-goats"],
  ["Falcons", "/tags/falcons"],
  ["Anesthesia", "/vet-notes/anesthesia/"],
  ["Diagnostics", "/vet-notes/diagnostics/"],
  ["Exams & licensing", "/vet-notes/exams/"],
]
// Paste an email-newsletter form address here (e.g. Buttondown or Substack) to show a sign-up box
const NEWSLETTER_FORM_ACTION = ""
// Where "email newsletter" points. Until there's a newsletter service, it opens an email to me.
const NEWSLETTER_URL = "mailto:imtiazdvm@gmail.com?subject=Subscribe%20to%20updates"

const ICONS: Record<string, string> = {
  X: "M17.75 3h3.07l-6.72 7.68L22 21h-6.19l-4.85-6.34L5.4 21H2.33l7.19-8.21L2 3h6.35l4.38 5.8L17.75 3Zm-1.08 16.2h1.7L7.4 4.72H5.57L16.67 19.2Z",
  Instagram:
    "M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2ZM17.1 5.8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 2c-2.7 0-3 0-4.1.1-1 0-1.8.2-2.4.5a5 5 0 0 0-1.8 1.2 5 5 0 0 0-1.2 1.8c-.3.6-.5 1.4-.5 2.4C2 9 2 9.3 2 12s0 3 .1 4.1c0 1 .2 1.8.5 2.4.3.7.7 1.3 1.2 1.8.5.5 1.1.9 1.8 1.2.6.3 1.4.5 2.4.5 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c1 0 1.8-.2 2.4-.5a5 5 0 0 0 1.8-1.2 5 5 0 0 0 1.2-1.8c.3-.6.5-1.4.5-2.4.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c0-1-.2-1.8-.5-2.4a5 5 0 0 0-1.2-1.8A5 5 0 0 0 18.5 2.6c-.6-.3-1.4-.5-2.4-.5C15 2 14.7 2 12 2Zm0 1.8c2.7 0 3 0 4 .1.9 0 1.4.2 1.8.3.4.2.7.4 1.1.7.3.4.5.7.7 1.1.1.4.3.9.3 1.8.1 1 .1 1.3.1 4s0 3-.1 4c0 .9-.2 1.4-.3 1.8-.2.4-.4.7-.7 1.1-.4.3-.7.5-1.1.7-.4.1-.9.3-1.8.3-1 .1-1.3.1-4 .1s-3 0-4-.1c-.9 0-1.4-.2-1.8-.3-.4-.2-.7-.4-1.1-.7-.3-.4-.5-.7-.7-1.1-.1-.4-.3-.9-.3-1.8-.1-1-.1-1.3-.1-4s0-3 .1-4c0-.9.2-1.4.3-1.8.2-.4.4-.7.7-1.1.4-.3.7-.5 1.1-.7.4-.1.9-.3 1.8-.3 1-.1 1.3-.1 4-.1Z",
  Facebook:
    "M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z",
  Email: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2L12 12.1 19.6 7H4.4ZM20 8.4l-7.4 5a1 1 0 0 1-1.2 0L4 8.4V17h16V8.4Z",
}

function SiteFooter({ displayClass }: QuartzComponentProps) {
  const year = new Date().getFullYear()
  const follow = SOCIAL.filter(([l]) => l !== "Email")
  return (
    <footer class={`site-footer ${displayClass ?? ""}`}>
      <div class="sf-block">
        <p class="sf-title">Let’s connect</p>
        <p>
          If you’d like to hear occasional updates on my new work, you can subscribe to my{" "}
          <a href={NEWSLETTER_URL}>email newsletter</a> or follow me via{" "}
          <a href="/index.xml" data-router-ignore>
            RSS
          </a>
          {follow.map(([label, href], i) => (
            <span>
              {i === follow.length - 1 ? ", or " : ", "}
              <a href={href} target="_blank" rel="me noopener noreferrer">{label}</a>
            </span>
          ))}
          .
        </p>
        {NEWSLETTER_FORM_ACTION ? (
          <form class="sf-form" action={NEWSLETTER_FORM_ACTION} method="post" target="_blank">
            <input type="email" name="email" placeholder="Enter your email" required />
            <input type="submit" value="Sign up" />
          </form>
        ) : null}
      </div>
      <div class="sf-block">
        <p class="sf-title">Topics</p>
        <p class="sf-topics">
          {TOPICS.map(([label, href], i) => (
            <span>
              <a href={href}>{label}</a>
              {i < TOPICS.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
      <div class="sf-bottom">
        <span>
          Created by {NAME} © {year}
        </span>
        <span class="sf-icons">
          {SOCIAL.map(([label, href]) => (
            <a href={href} aria-label={label} title={label} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="me noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d={ICONS[label]} />
              </svg>
            </a>
          ))}
        </span>
      </div>
    </footer>
  )
}

export default (() => SiteFooter) satisfies QuartzComponentConstructor
