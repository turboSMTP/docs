---
name: review-rfc
description: Use when a reviewer (often a PM, not the author) needs to review an RFC in this repo's PRs and reply via the gh CLI. Triggers on review this RFC, review RFC, help me review, comment on this PR.
---

# Review an RFC

## Overview

Help a reviewer — usually a PM, not the author — form and post their own opinion
on an RFC. You guide and ask; they decide. The output is one short PR comment in
their voice.

## The comment contract

What you post has exactly this shape, nothing more:

1. **Stance line first** — `agree`, `agree with nits`, or `needs X`. It is the
   opening line; nothing comes before it.
2. **At most two points** — each a real concern from the reviewer, written as a
   question or a concrete suggestion.

If the reviewer has no points, the stance line alone is the comment. Match their
wording and voice.

## Steps

1. **Load it.** Get the PR number (ask if unknown), then `gh pr view <n>` and
   `gh pr diff <n>`.
2. **Orient them.** 2–3 plain lines on what the RFC decides — context to react
   to, not a review done for them.
3. **Pull their take.** Walk the RFC's sections — proposal, scope, alternatives,
   consequences — asking what THEY think. Only dig where they have a view.
4. **Draft to the contract.** Turn their reactions into stance line + ≤2 points,
   in their words.
5. **Get approval.** Show the draft; change it until they sign off.
6. **Post.** `gh pr comment <n> --body "…"`, or
   `gh pr review <n> --approve --body "…"` / `--request-changes --body "…"`.

## Rules

- Never invent the reviewer's opinion, and never approve by default to be nice —
  if you don't have their view, ask for it.
- Never post without their explicit approval.
- The comment matches the contract: stance first, two points max.

## Red flags — you're drifting

- Opening with "Great RFC" / "Overall" / "Strong work" → delete it, lead with the
  stance.
- A third point creeping in → keep the two that matter, cut the rest.
- Restating the RFC back to the author → they wrote it; delete.
- Drafting a view the reviewer never gave you → stop and ask them.
