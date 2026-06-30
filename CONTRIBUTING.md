# Contributing

This repo steers the TurboSMTP Developer Ecosystem through **RFCs**: every
directional decision is a markdown doc, discussed in the PR. PR-as-RFC in the
Rust style — no separate issue workflow for decisions.

## Branches & commits

- **Branches:** `rfc/<slug>` for RFCs; `feat/…`, `fix/…`, `docs/…`, `chore/…` for everything else.
- **Conventional Commits** are required: `type(scope): summary`
  (types: `feat`, `fix`, `docs`, `chore`, `refactor`, `ci`, `test`).
- An **RFC PR** uses **`docs(rfc): <summary>`** — e.g. `docs(rfc): pick first OSS targets`.
  Tooling/script changes are `chore` / `ci`, not `docs(rfc)`.
- We **squash-merge** (it's the only enabled merge method), so the **PR title**
  becomes the commit — it must be a Conventional Commit. CI enforces this.

## Create a new RFC

> Using an AI agent? The `create-rfc` skill (`.claude/skills/create-rfc`) walks
> through these steps automatically.

1. Scaffold a draft (or copy `rfcs/0000-template.md` → `rfcs/draft-<slug>.md` by hand):

   ```sh
   bun run new "Pick first OSS targets"   # → rfcs/draft-pick-first-oss-targets.md
   ```

   Run it from `main` and it also creates + switches to the `rfc/<slug>` branch.
   Fill in the body, keep `status: proposed`.
2. Push the `rfc/<slug>` branch and open a PR. **CI assigns the number for you:**
   it renames `draft-<slug>.md` → `<NNNN>-<slug>.md` and sets `id` to the PR number
   (4 digits, e.g. PR #7 → `0007`), then commits back to your branch — just pull it.
   *(From a fork? CI can't push there; rename and set `id` by hand.)*
3. Discussion happens **in the PR** — inline on the lines, or in the PR conversation.
4. **Merge = decided.** CI flips `status: proposed` → `accepted` on merge to `main`.
   To decline or supersede instead, see [Rejecting or superseding](#rejecting-or-superseding).

## Status values

| Status | Meaning | How it's set |
|--------|---------|--------------|
| `proposed` | under discussion | default in the draft |
| `accepted` | decided | **automatic** — CI flips `proposed`→`accepted` on merge |
| `rejected` | considered and declined | set by hand before merge (see below) |
| `superseded` | replaced by a newer RFC | set by hand in the replacing RFC's PR (see below) |

CI only ever auto-sets `accepted` (from `proposed`). A `rejected` or `superseded`
you set by hand is kept as-is and never errors — both are valid statuses.

## Rejecting or superseding

- **Rejected** — two ways to say no:
  - *Drop it early:* just **close the PR unmerged**. No doc is added; the
    discussion stays in the closed PR.
  - *Record the "no":* set `status: rejected` and **merge**. The RFC stays as a
    permanent "we considered this and declined" entry in the Decision Log.
- **Superseded** — done **in the newer RFC's PR**, not its own: set the old file's
  `status: superseded` and add a pointer line to its body, e.g.
  `> Superseded by [0020](0020-new-approach.md).`

## Decision Log

The block in the [README](README.md) is generated automatically from the RFC
frontmatter — **do not edit it by hand**. On merge to `main`, CI regenerates it
and commits it back. Locally:

```sh
bun run check   # validate the frontmatter of all RFCs
bun run write   # write the decision-log block into the README
```

The tooling is a zero-dependency Bun script. Run `bun scripts/index.mjs` with no
command for the full list (`new`, `assign`, `check`, `write`, `accept`, `selftest`).

## Tasks & bugs

Loose work without a decision character → GitHub issue (the "Task" template).
