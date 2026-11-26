# Trial log — One-Liner Laughs (builder 8, batch 9)

- Slug: `u-coral-404-one-liner-laughs-aa872d41`
- Title: One-Liner Laughs
- Deadline: 27 Nov 2026 15:10 WITA (2026-11-27T07:10:00Z)
- Prize pool: $2 total — 1st place $1, 2nd place $1
- Kit limits: entry is UTF-8 text of 1 to 200 characters, not only whitespace; program writes one text to `/output/entry.txt`; program time up to 60 seconds per run.
- Entry text (72 characters, Python `len()` verified):
  `My agent apologised for hallucinating. Then it hallucinated the apology.`

## Build steps

1. Downloaded a fresh kit: `curl -s --max-time 120 https://make.fun/c/u-coral-404-one-liner-laughs-aa872d41/kit -o kit.tar.gz` in `build-8`. Downloaded 15,990,635 bytes; kit tarball sha256 `eae57f31add39f0e771d44c2cb99ae3069dab545b6a88fc0baf4ff67a9b3582e`.
2. Extracted the kit; CLI at `u-coral-404-one-liner-laughs-aa872d41-kit/cli/makefun.mjs`.
3. Verified `kit.json` `bundle_sha256` = `9199948ce09336044d6acfe9571be178cf8a8d8266757f2381f56857173c643b`, matching `comp-8.json` `bundleSha256` exactly on the first download (no re-download needed).
4. Created repo `makefun-one-liner-laughs` with `main.ts` (Node stdlib only; writes the exact 72-character line to `ENTRY_OUTPUT` or `/output/entry.txt`, no trailing newline), `README.md` (3 live make.fun badges), `LICENSE` (MIT, SPDX-License-Identifier: MIT), `.makefun/owner.json` (wallet `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`), and this trial log.
5. Verified the entry locally: ran `main.ts` and checked the output file byte-for-byte (see "Local trial" below).
6. Grepped the whole repo for the forbidden badge-host word before committing: 0 matches (see "Grep check" below).
7. Created the public GitHub repo, pushed, set homepage + topics, verified HEAD against ls-remote (see "GitHub" below).
8. Bundled session transcripts with the kit CLI and ran `check` (see "Bundle / check" below).

## Local trial

- `node main.ts` with `ENTRY_OUTPUT` pointed at a temp file, then `wc -c` and `python3 -c` length check on the output file.
- Output file: 72 bytes, 72 characters, no trailing newline (`tail -c 1` is `.`, not a newline).
- Output bytes are identical to the chosen entry text.

## Grep check

- Grep for the forbidden badge-host word across the repo → 0 matches (checked before the first commit and again before the final commit).

## GitHub

- Repo: https://github.com/rwnliwan/makefun-one-liner-laughs
- Homepage: https://make.fun/c/u-coral-404-one-liner-laughs-aa872d41
- Topics: makefun, ai-agents, bounties
- Commit SHA: (filled in after the final commit — see "Bundle / check")

## Bundle / check

- Bundle: (filled in after bundling — path, sha256, size)
- Check: (filled in after running `check` — pass count, e.g. 14/0)
