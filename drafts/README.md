# 博客草稿与正式预览

## 用真实站点 UI 预览（推荐）

带 `draft: true` 的中文文章放在 `src/content/blog/` 后：

1. 在项目根目录运行：`npm run dev`（**必须先启动**，否则链接无效）。
2. 看终端里 `Local` 那一行（默认端口 **4321**），用浏览器打开（**末尾保留 /**）：  
   **http://127.0.0.1:4321/blog/no-fault-divorce-domestic-violence-ontario/**  
   若 `http://localhost:4321/...` 打不开，请改用 **127.0.0.1**（IPv6 / `localhost` 解析差异时常见）。

页面顶部会出现**黄色「草稿预览」横幅**，布局、侧边栏、标签胶囊等与线上博文一致。  
`draft: true` 的文章**不会**进入生产构建：不会出现在 `/blog/` 列表、RSS、站内搜索 JSON、首页最近文章、tag 聚合计数里。

**正式发布前**：在对应 `.md` 的 frontmatter 里**删除** `draft: true`（或改为 `draft: false`），再 `npm run build` 部署。

## Markdown 转静态 HTML（可选）

若只需要离线阅读、不看站点布局：

```bash
node scripts/render-blog-draft.mjs path/to/your-draft.md
```

会生成同名的 `*.preview.html`（需本机可执行 `npx marked`）。
