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

## Style preferences

{/* Add any project-specific style rules below */}

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references

## Scalable sections

- **Integrations tab**: one page per integration at `integrations/<slug>`. Add it to "Frameworks & Libraries" or "Apps & Platforms" in `docs.json` and add a card to `integrations/overview`. Each page has: status (Available, Merged upstream, In development), install, Global and EU config, test send, Resources cards, `keywords` frontmatter.
- **Compare & Migrate tab**: `compare/turbosmtp-vs-<competitor>` and `migrate/from-<competitor>`. Add cards to `compare/overview`. Only state competitor facts from their public docs, add a dated "verify" Note, never disparage, and end with FAQ accordions (AEO).
- Always mention the EU hosts (`api.eu.turbo-smtp.com`, `pro.eu.turbo-smtp.com`) and that turboSMTP is an Italian company with its own European servers.

## Content boundaries

{/* Define what should and shouldn't be documented */}

{/* Example: Don't document internal admin features */}
