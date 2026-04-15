#!/usr/bin/env python3
"""Append trailing slash to miaohelaw.ca *page* URLs in source. Skips static assets and template literals."""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import urlparse, urlunparse

PREFIX = "https://www.miaohelaw.ca"
ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
EXT = re.compile(
    r"\.(jpe?g|png|gif|svg|ico|xml|pdf|webp|js|css|html|json|txt|map)$",
    re.I,
)


def should_trail(path: str) -> bool:
    if not path or path == "/":
        return False
    if path.endswith("/"):
        return False
    last = path.rsplit("/", 1)[-1]
    if EXT.search(last):
        return False
    return True


def fix_url(raw: str) -> str:
    if "${" in raw:
        return raw
    try:
        u = urlparse(raw)
    except ValueError:
        return raw
    if u.scheme != "https" or u.netloc != "www.miaohelaw.ca":
        return raw
    if not should_trail(u.path):
        return raw
    new_path = u.path.rstrip("/") + "/"
    return urlunparse((u.scheme, u.netloc, new_path, u.params, u.query, u.fragment))


def url_end_delimiters() -> frozenset[str]:
    # Include ':' so markdown `](https://.../path):` stops before the description colon.
    return frozenset('\"\'` \n\t)>]},:')


def extract_site_url(s: str, start: int) -> tuple[str, int]:
    """Return (url_substring, index_after_url) starting at start (must be at PREFIX)."""
    if not s.startswith(PREFIX, start):
        raise ValueError("extract_site_url: bad start")
    i = start + len(PREFIX)
    if i >= len(s) or s[i] != "/":
        return s[start:i], i
    i += 1
    while i < len(s):
        c = s[i]
        if c in url_end_delimiters():
            break
        if c in "?#":
            break
        i += 1
    if i < len(s) and s[i] == "?":
        i += 1
        while i < len(s) and s[i] not in url_end_delimiters() | {"#"}:
            i += 1
    if i < len(s) and s[i] == "#":
        i += 1
        while i < len(s) and s[i] not in url_end_delimiters():
            i += 1
    return s[start:i], i


def transform_file(text: str) -> str:
    out: list[str] = []
    pos = 0
    while True:
        idx = text.find(PREFIX, pos)
        if idx == -1:
            out.append(text[pos:])
            break
        out.append(text[pos:idx])
        raw, end = extract_site_url(text, idx)
        out.append(fix_url(raw))
        pos = end
    return "".join(out)


def iter_files() -> list[Path]:
    files: list[Path] = []
    for pat in ("**/*.astro", "**/*.ts", "**/*.tsx", "**/*.js", "**/*.md", "**/*.mdx"):
        files.extend(SRC.glob(pat))
    return files


def main() -> int:
    changed = 0
    for path in iter_files():
        before = path.read_text(encoding="utf-8")
        after = transform_file(before)
        if after != before:
            path.write_text(after, encoding="utf-8")
            changed += 1
    print(f"Updated {changed} files.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
