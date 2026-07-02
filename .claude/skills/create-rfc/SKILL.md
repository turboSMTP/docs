---
name: create-rfc
description: Use when proposing or recording a decision in this RFC repo — starting a new RFC or capturing a decision so it is tracked. Triggers on new RFC, propose, record a decision, create an RFC.
---

# Create an RFC

This repo decides things via **PR-as-RFC**: an RFC is a markdown doc, discussed
in its PR; merge = decided. The tooling is a zero-dep Bun CLI
(`scripts/index.mjs`). Full rules live in [CONTRIBUTING.md](../../../CONTRIBUTING.md).

## Steps

1. **Scaffold (creates the branch too).** From `main`, run:

   ```sh
   bun run new "Short decision title"
   ```

   This creates + switches to the `rfc/<slug>` branch and writes
   `rfcs/draft-<slug>.md` from the template with title + today's date and
   `status: proposed`. (Off `main` it scaffolds on the current branch.) Do **not**
   invent a number — CI assigns it.

2. **Fill the body.** Edit the draft's four sections, keep them tight:
   - **Context / Problem** — what's the situation, why decide now?
   - **Proposal** — the concrete decision being proposed.
   - **Alternatives** — what else was considered, why rejected.
   - **Consequences** — what gets better/worse, follow-up work.

   Leave `status: proposed`. Leave `id: 0000` — CI rewrites it.

3. **Validate.** Run `bun run check` (must pass). For markdown changes, also run
   `bunx markdownlint-cli2@0.22.1 "**/*.md"` — CI lints too, and `bun run check`
   does not.

4. **Open the PR.** Push, then open a PR whose **title** is
   **`docs(rfc): <summary>`** (e.g. `docs(rfc): pick first OSS targets`). It
   becomes the squash-merge commit and CI enforces the Conventional-Commit format.
   On open, CI renames `draft-<slug>.md` → `<NNNN>-<slug>.md`, sets `id` to the PR
   number, and commits it back to the branch — pull that.

Discussion happens **in the PR** — inline on the lines, or in the PR conversation.

## Cross-linking

Link related RFCs by relative filename, e.g.
`[Program vision](0001-program-vision-rfc-roadmap.md)`. Only link a file that is
already on `main` (or on your branch) — the CI link check fails on a link to an
RFC that hasn't merged yet. If it isn't merged, name it and add the link once it
lands.

## Do NOT

- Don't set the RFC number/`id` by hand, and don't rename the file — CI does it.
- Don't edit the README **Decision Log** — it's auto-generated on merge.
- Don't set `status: accepted` — merge does that (CI flips `proposed`→`accepted`).
- To decline: close the PR unmerged, or set `status: rejected` and merge to keep a record.
- To supersede an old RFC: in *this* PR, set the old file's `status: superseded` and
  add a `> Superseded by [NNNN](…)` line. CI keeps both statuses and never errors on them.
