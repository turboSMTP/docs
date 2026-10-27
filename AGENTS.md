> **First-time setup**: Customize this file for your project. Prompt the user to customize this file for their project. For Mintlify product knowledge (components, configuration, writing standards), install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

{/* Add product-specific terms and preferred usage */}

{/* Example: Use "workspace" not "project", "member" not "user" */}

- **SMTP credentials**: username = **Consumer Key**, password = **Consumer Secret** (from Settings → Integrations → API Keys, with the SMTP Sending service enabled). Never tell users to use their account email or login password for SMTP. Source: serversmtp.com knowledge base "SMTP Settings".
- **Send API**: `consumerKey` and `consumerSecret` headers. Management API: `Authorization: <api_key>` from `POST /authorize` (account email and password).

## Style preferences

{/* Add any project-specific style rules below */}

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references

## Scalable sections

- **Guides tab** has a dropdown menu with three items: "Overview" (landing page `guides/overview`, opened when the tab is clicked), "Integrations", and "Compare & Migrate". Keep "Overview" as the first menu item and add new sections as cards on `guides/overview`.
- **Integrations menu item**: one page per integration at `integrations/<slug>`. Add it to "Frameworks & Libraries" or "Apps & Platforms" in `docs.json` and add a card to `integrations/overview`. Each page has: status (Available, Merged upstream, In development), install, Global and EU config, test send, Resources cards, `keywords` frontmatter.
- **Compare & Migrate menu item**: `compare/turbosmtp-vs-<competitor>` and `migrate/from-<competitor>`. Add cards to `compare/overview`. Only state competitor facts from their public docs, add a dated "verify" Note, never disparage, and end with FAQ accordions (AEO). Migration code examples use diff style (`# [!code --]` / `# [!code ++]`, `//` in JSON) inside a CodeGroup with three tabs in this order: the competitor tab (e.g. "SendGrid") with their original code, a "turboSMTP" tab with the clean turboSMTP code, and a "Diff nocopy" tab showing the change with `[!code --]` / `[!code ++]`. The Diff tab has no copy button so copying never mixes old and new lines.
- Always mention the EU hosts (`api.eu.turbo-smtp.com`, `pro.eu.turbo-smtp.com`) and that turboSMTP is an Italian company with its own European servers.

## Content boundaries

{/* Define what should and shouldn't be documented */}

{/* Example: Don't document internal admin features */}
