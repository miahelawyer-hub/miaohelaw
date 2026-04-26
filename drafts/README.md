# 博客草稿（本地预览）

这里的 `.md` **不会**被 Astro 的 `blog` 集合加载，因此**不会生成正式页面**，适合你和团队先审稿。

## 方式一：用脚本生成浏览器预览（推荐）

在项目根目录执行：

```bash
node scripts/render-blog-draft.mjs drafts/<你的草稿>.md
```

会生成同名的 `*.preview.html`，用浏览器打开即可（双击或在终端 `open drafts/<草稿>.preview.html`）。

首次运行可能需要联网下载 `marked`（`npx` 缓存后会更快）。

## 方式二：在编辑器里直接预览 Markdown

在 Cursor / VS Code 中打开 `drafts/*.md`，使用内置 Markdown 预览（macOS 常用快捷键：`Cmd + Shift + V`）。
