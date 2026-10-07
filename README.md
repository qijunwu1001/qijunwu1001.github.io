# Qijun Wu · Personal Résumé

基于 [Print-friendly Portfolio CV](https://github.com/Smilesharks/dev-portfolio) 改造的中英双语个人简历网站。模板保留 MIT 许可证，详见 `LICENSE.txt`。

## 本地预览

需要 Node.js 与 npm：

```bash
npm ci
npm run dev
```

打开终端显示的本地地址预览。修改后保存会自动刷新。

## 更新简历内容

英文内容维护在根目录的 `cv.json`，中文内容维护在 `cv.zh.json`。页面路由分别是 `/` 和 `/zh/`，顶部语言切换会在两页之间跳转。两种语言共用同一套页面组件。

`public/resume_en.pdf` 和 `public/resume_zh.pdf` 分别是英文与中文 PDF 简历，个人信息区的简历链接会在新标签页打开对应语言版本。网页正文不展示 GPA、课程或电话；PDF 保留简历中的原始信息。

当前使用 `public/profile.jpg` 作为个人照片，页面会保持照片纵横比。邮箱链接到 `mailto:`，GitHub 链接到个人主页。公开仓库中的 JSON 和 `public/` 文件均会公开，请只放入愿意公开的内容。

## 页面布局

桌面版左侧显示头像、联系方式、语言切换和目录，右侧独立滚动；目录会高亮当前章节。窄屏下改为单列，恢复整页纵向滚动。简介、研究方向和重点项目排在页面前部，突出 AI4S、GPU 统计模拟与 SimForge-GPU。

## GitHub Pages

仓库包含 GitHub Actions 工作流，会在推送到 `main` 后自动构建并部署。个人主页仓库推荐命名为 `你的GitHub用户名.github.io`，网站地址为 `https://你的GitHub用户名.github.io`。若使用普通仓库名，网址会带上仓库路径。

第一次部署时，在 GitHub 仓库设置的 **Pages** 中选择 **GitHub Actions** 作为发布来源。上线后可以在同一页面查看站点地址与部署状态。

## 打印

可使用浏览器的“打印”功能或 `Ctrl+P`（macOS 为 `⌘+P`）另存为 PDF。打印样式会隐藏网页控件并保留简历栏目。打印分页和字体效果需要在目标浏览器中确认。
