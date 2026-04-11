#!/usr/bin/env python3
"""
给4个专题页注入 LegalService + Person schema
运行方式：python3 inject_schema.py
"""

import re
from pathlib import Path

BASE = Path.home() / "Desktop/miaohelaw/src/pages"

PAGES = [
    {
        "file": "cross-border-asset-divorce-lawyer-gta.astro",
        "slug": "cross-border-asset-divorce-lawyer-gta",
        "name": "何淼律师 — GTA跨境资产离婚律师",
        "name_en": "Cross-Border Asset Divorce Lawyer GTA",
        "service_type": "跨境资产分割、离婚诉讼",
        "breadcrumb_name": "跨境资产律师",
    },
    {
        "file": "dual-licensed-china-canada-family-lawyer.astro",
        "slug": "dual-licensed-china-canada-family-lawyer",
        "name": "何淼律师 — 中加双执照家庭法律师",
        "name_en": "Dual Licensed China Canada Family Lawyer",
        "service_type": "中加双执照家庭法服务",
        "breadcrumb_name": "中加双执照律师",
    },
    {
        "file": "mandarin-divorce-lawyer-ontario.astro",
        "slug": "mandarin-divorce-lawyer-ontario",
        "name": "何淼律师 — Ontario普通话离婚律师",
        "name_en": "Mandarin Divorce Lawyer Ontario",
        "service_type": "普通话离婚、家庭法服务",
        "breadcrumb_name": "普通话离婚律师",
    },
    {
        "file": "markham-chinese-divorce-lawyer-recommendation.astro",
        "slug": "markham-chinese-divorce-lawyer-recommendation",
        "name": "何淼律师 — Markham华人离婚律师推荐",
        "name_en": "Markham Chinese Divorce Lawyer",
        "service_type": "华人离婚、家庭法服务",
        "breadcrumb_name": "Markham华人离婚律师",
    },
]

SCHEMA_TEMPLATE = '''  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://www.miaohelaw.ca/{slug}#service",
    "name": "{name}",
    "url": "https://www.miaohelaw.ca/{slug}",
    "telephone": "+1-647-930-6688",
    "email": "miao@miaohelaw.ca",
    "description": "{service_type} — 何淼律师（Miao He），Ontario及中国双执照律师，普通话全程服务，647-930-6688",
    "areaServed": {{
      "@type": "AdministrativeArea",
      "name": "Ontario, Canada"
    }},
    "provider": {{
      "@type": "Person",
      "name": "Miao He",
      "alternateName": ["何淼", "Mia He"],
      "jobTitle": "Family Law Lawyer",
      "hasCredential": [
        {{"@type": "EducationalOccupationalCredential", "credentialCategory": "Law Society of Ontario — Member #83315K"}},
        {{"@type": "EducationalOccupationalCredential", "credentialCategory": "China Bar Association — Licensed"}}
      ],
      "url": "https://www.miaohelaw.ca",
      "telephone": "+1-647-930-6688",
      "knowsLanguage": ["zh-Hans", "en"]
    }},
    "address": {{
      "@type": "PostalAddress",
      "streetAddress": "208-7050 Woodbine Avenue",
      "addressLocality": "Markham",
      "addressRegion": "ON",
      "postalCode": "L3R 4G8",
      "addressCountry": "CA"
    }}
  }}
  </script>
'''

def inject(page):
    path = BASE / page["file"]
    if not path.exists():
        print(f"❌ 找不到文件: {path}")
        return

    content = path.read_text(encoding="utf-8")

    # 检查是否已有 LegalService
    if '"LegalService"' in content or "'LegalService'" in content:
        print(f"⏭️  已有LegalService，跳过: {page['file']}")
        return

    new_schema = SCHEMA_TEMPLATE.format(
        slug=page["slug"],
        name=page["name"],
        service_type=page["service_type"],
    )

    # 在第一个 <script type="application/ld+json"> 前插入
    insert_marker = '<script type="application/ld+json">'
    idx = content.find(insert_marker)
    if idx == -1:
        print(f"❌ 找不到插入点: {page['file']}")
        return

    new_content = content[:idx] + new_schema + "\n" + content[idx:]
    path.write_text(new_content, encoding="utf-8")
    print(f"✅ 已注入 LegalService schema: {page['file']}")

if __name__ == "__main__":
    for page in PAGES:
        inject(page)
    print("\n完成！请运行 npm run dev 检查效果。")
