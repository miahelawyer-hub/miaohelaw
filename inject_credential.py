#!/usr/bin/env python3
"""
给4个城市页的 Person schema 里注入 EducationalOccupationalCredential
运行方式：python3 inject_credential.py
"""

from pathlib import Path

BASE = Path.home() / "Desktop/miaohelaw/src/pages"

PAGES = [
    "mississauga-family-lawyer.astro",
    "north-york-family-lawyer.astro",
    "scarborough-family-lawyer.astro",
    "vaughan-family-lawyer.astro",
]

# 这是要注入的 credential 块，插入在 "jobTitle" 行之后
CREDENTIAL_BLOCK = ''',
        "hasCredential": [
          {"@type": "EducationalOccupationalCredential", "credentialCategory": "Law Society of Ontario — Member #83315K"},
          {"@type": "EducationalOccupationalCredential", "credentialCategory": "China Bar Association — Licensed"},
          {"@type": "EducationalOccupationalCredential", "credentialCategory": "Mediation Certificate"}
        ]'''

def inject(filename):
    path = BASE / filename
    if not path.exists():
        print(f"❌ 找不到文件: {path}")
        return

    content = path.read_text(encoding="utf-8")

    # 已有 credential 则跳过
    if "EducationalOccupationalCredential" in content:
        print(f"⏭️  已有 credential，跳过: {filename}")
        return

    # 找 "Family Law Lawyer" 后面插入
    marker = '"Family Law Lawyer"'
    idx = content.find(marker)
    if idx == -1:
        print(f"❌ 找不到插入点 (Family Law Lawyer): {filename}")
        return

    # 找这一行的行尾
    line_end = content.find('\n', idx)
    if line_end == -1:
        print(f"❌ 找不到换行符: {filename}")
        return

    new_content = content[:line_end] + CREDENTIAL_BLOCK + content[line_end:]
    path.write_text(new_content, encoding="utf-8")
    print(f"✅ 已注入 EducationalOccupationalCredential: {filename}")

if __name__ == "__main__":
    for page in PAGES:
        inject(page)
    print("\n完成！请运行 npm run dev 检查效果。")
