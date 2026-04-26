# 博客草稿与正式预览

## 用真实站点 UI 预览（推荐）

带 `draft: true` 的中文文章放在 `src/content/blog/` 后：

1. 在项目根目录运行：`npm run dev`
2. 浏览器打开（端口以终端显示为准，默认多为 `4321`）：  
   **http://localhost:4321/blog/no-fault-divorce-domestic-violence-ontario/**

页面顶部会出现**黄色「草稿预览」横幅**，布局、侧边栏、标签胶囊等与线上博文一致。  
`draft: true` 的文章**不会**进入生产构建：不会出现在 `/blog/` 列表、RSS、站内搜索 JSON、首页最近文章、tag 聚合计数里。

**正式发布前**：在对应 `.md` 的 frontmatter 里**删除** `draft: true`（或改为 `draft: false`），再 `npm run build` 部署。

## Markdown 转静态 HTML（可选）

若只需要离线阅读、不看站点布局：

```bash
node scripts/render-blog-draft.mjs path/to/your-draft.md
```

会生成同名的 `*.preview.html`（需本机可执行 `npx marked`）。
