# Agent Talk Deck Design Guide

这份文档用于约束 `agent-talk-deck` 后续新增页面和改页的视觉风格。目标不是把每页做得一样，而是让整套分享有一致的基调、层级和组件语言。

## 1. 现状审查

主讲 deck 在 `index.html`，当前共 29 页，结构大致是：

- 开场：大句子、投票、概念拆解。
- 抓包证据：大数字、请求结构、trace 摘要。
- 拆 Harness：系统提示、工具接口、上下文、权限、控制流、workflow。
- 实践映射：把厂商 agent 的机制映射到自己的工作流。
- 收尾：治理半径、乘法公式、引用、Q&A。

附属页面包括 `deck.html`、`workflow.html`、`workflow-output.html`、`workflow-anatomy.html`、`workflow-patterns.html`、`trace_viewer.html`、`goal.html`、`edit-formats.html`、`prompt-history.html`、`explainers.html` 等。它们有两类合理例外：

- 讲稿/解释型附属页：应尽量沿用主 deck 的暖白纸面、蓝色强调、卡片和 source line。
- 实验台/运行时附属页：可以使用深色工具台风格，但必须自成体系，不把暗色页的紫色、霓虹色、强阴影带回主 deck。

## 2. 设计基调

关键词：

- 暖白纸面：像一份被整理过的技术讲稿，不像 SaaS 后台，也不像营销页。
- 深墨正文：正文优先可读，所有装饰都让位给证据。
- 克制蓝色：蓝色只承担链接、当前状态、关键结构高亮。
- 少量状态色：绿色、红色、琥珀色只表达状态或成本，不作为装饰色。

主 deck 的视觉应该安静、清晰、适合投屏。不要新增大面积渐变、紫蓝渐变、荧光色、装饰圆点、过重阴影。

## 3. 颜色 Token

新增主讲页时优先使用 `index.html` 的 token，不要直接写临时色值。

```css
--bg: #faf9f7;
--surface: #fff;
--surface2: #f1efe8;
--text: #26241f;
--text2: #5f5e5a;
--text3: #8a8980;
--border: rgba(0,0,0,.12);

--blue: #0c447c;
--blue-bd: #185fa5;
--blue-bg: #e6f1fb;
--accent: #185fa5;

--amber: #854f0b;
--amber-bg: #faeeda;
--ok: #085041;
--ok-bg: #e1f5ee;
--red: #a32d2d;
--red-bg: #f8e8e8;
```

使用规则：

- `--text`：标题、关键结论、数字。
- `--text2`：正文解释。
- `--text3`：来源、日期、弱提示、辅助说明。
- `--blue` / `--blue-bd`：链接、当前 Agent、结构编号、重要节点。
- `--blue-bg`：轻量选中态、mark、高亮节点背景。
- `--amber`：成本、警示、verify 进行态。
- `--ok` / `--red`：完成、确认、驳回、风险等级。不要用作普通装饰。

避免：

- 主 deck 中不要再引入紫色主色，例如 `#5a51db`、`#b78bff`。
- 不要在同一页同时使用多套蓝色体系，例如 teal、royal blue、cyan 混用。
- 不要用纯黑大面积背景，除非页面明确是运行时/实验台模式。

## 4. 字体和文字层级

主 deck 字体：

- 正文：系统 sans，保持 `-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC"`。
- 代码和 token：`ui-monospace, SFMono-Regular, Menlo, monospace`。
- 不要用 viewport 宽度驱动字号。
- 不要使用负字距。

推荐层级：

- `h1`：封面或章节级大标题，约 48px。
- `h2`：普通 slide 主标题，约 34px。
- `.big`：观点句，约 40px。
- `.huge`：单个核心数字，约 150px。
- `.sub`：解释性副标题，约 22px。
- 卡片正文：16.5px 到 19px。
- source line：15px 到 16px，颜色使用 `--text3`。

一页里只保留一个视觉主语。不要让 `h2`、大数字、多个卡片标题同时抢主焦点。

## 5. 布局规则

主 deck：

- 页面容器沿用 `.slide`：居中、最大宽度约 1180px、投屏留白充足。
- 标题区不要被控件挤压。控件可以放在标题右侧，但要轻。
- 页面底部 source line 要稳定出现，不要变成第二个正文段。
- 同页并排列数最多 3 列；信息密度高时改成切换、tabs、分步 reveal。

卡片：

- 卡片用于承载可比较的内容、重复项、工具台或 modal。
- 不要卡片套卡片。
- 主 deck 卡片使用 `--surface`、`--border`、轻边框，不加重阴影。
- 卡片内部标题用蓝色，但不要每个小标签都加重。

留白：

- 标题和内容之间保持 16px 到 24px。
- 组件内部紧凑信息可用 8px 到 14px。
- Agent 切换器这种轻控件应贴近它控制的内容，避免悬在页面中央。

## 6. 页面类型

### 观点页

适用：开场、转场、结论。

结构：

- 可只用 `.big` 或 `h1`。
- 配一个 `.sub` 或 `.chip` 即可。
- 不放多卡片，不放复杂图。

### 证据页

适用：抓包、数字、来源。

结构：

- 大数字或一句判断。
- 1 到 2 个解释块。
- 必须有 source line，来源链接放底部。

### 对比页

适用：Claude Code vs Codex、改造前后、概念边界。

结构：

- 首选 2 列或 3 列 `.cols`。
- 如果内容会挤，改成轻量切换器，比如 `< Claude Code >` 控制单张内容卡。
- 不要把两个长列表硬塞进并排卡片。

### 结构图页

适用：六块总表、流程层级、map。

结构：

- 使用 `.layers`、`.map`、`.triad` 这类现有组件。
- 蓝色表示结构编号或当前主线。
- 琥珀色只用于警示或成本。

### Workflow / Trace 演示页

适用：播放、数据流、trace viewer 入口。

结构：

- 可以更工具化，但主 deck 内仍使用暖白背景。
- 如果需要暗色运行时风格，请放到独立 HTML 附属页，并在入口处明确它是实验台。
- 状态色规则保持：find/当前用蓝，verify/成本用琥珀，done 用绿，risk/error 用红。

## 7. 组件规范

### Agent 切换器

用于同构 Agent 内容切换，例如 System Prompt 改动史。

推荐形式：

```html
<div class="history-switch" aria-label="切换 Agent">
  <button type="button" class="history-prev" aria-label="上一个 Agent">&lt;</button>
  <span class="history-agent-name" aria-live="polite">Claude Code</span>
  <button type="button" class="history-next" aria-label="下一个 Agent">&gt;</button>
</div>
```

规则：

- 不加外框、不加 pill 背景。
- 只展示当前 Agent 名。
- 左滑切下一个，右滑切上一个。
- 箭头可点击，但视觉上保持轻量。
- 新增 Agent 时只新增一个 `.history-card[data-agent="..."]`，不要复制一套 JS。

### 按钮

- 命令按钮使用 `.deck-btn` 或局部已有按钮样式。
- 主色按钮只用于明确动作，例如打开播放页、播放、重置。
- 普通链接优先用文字链接，不要包成按钮。

### Source Line

每个证据页或引用页必须有 `.src`。

规则：

- 文案以“来源：”或“参考：”开头。
- 链接使用蓝色细下划线。
- source line 只承载来源，不承载正文论点。

### Chips / Tags

使用场景：

- 原则牌、状态、小范围分类。

规则：

- 蓝色 chip：普通分类或当前范围。
- 琥珀 chip：原则、成本、警告。
- 不要用 chip 当段落标题。

### Code / Trace

规则：

- 代码块用 `--surface2` 或深色附属页自己的 code token。
- 主 deck 中不要大段横向滚动代码。
- trace 结构只展示关键字段，完整 JSON 放到 `trace_viewer.html`。

## 8. 附属页面风格

附属页面允许有更强个性，但要归入以下模式。

### Warm Document

适用：`goal.html`、`edit-formats.html`、`prompt-history.html`。

要求：

- 沿用主 deck token，变量命名可以是 `--ink` / `--line`，但颜色应映射到主 deck。
- 卡片和按钮不要出现强阴影。

### Lab Atlas

适用：`workflow-patterns.html`、`explainers.html`。

要求：

- 可以使用 teal / amber / red 作为图例色。
- 这些颜色必须服务于图例，不作为页面通用装饰色。
- SVG 内的颜色要和图例一致。

### Runtime Dark

适用：`how-it-works.html`、`workflow-output.html`、`workflow-anatomy.html`。

要求：

- 暗色页可以有蓝、琥珀、绿、红状态色。
- 紫色只能用于特殊高亮或调度层，不要成为默认主色。
- 若某个暗色页内容被搬回主 deck，必须重新套用主 deck token。

## 9. 新增页面 Checklist

新增或修改页面前检查：

- 这页属于哪种类型：观点、证据、对比、结构图、演示、附属实验台？
- 主视觉只有一个吗？
- 是否使用了现有 token，而不是直接写新颜色？
- 蓝色是否只承担链接、当前态、结构重点？
- 琥珀/绿/红是否只用于状态或成本？
- 卡片有没有嵌套？是否过多？
- 并排内容是否挤？挤的话改成切换或分步 reveal。
- source line 是否只放来源？
- 移动端或窄屏是否会堆叠，而不是挤压？
- 是否需要把复杂交互放到独立附属页，而不是塞进主 deck？

## 10. 当前建议纠偏清单

后续如果继续统一，可以按这个顺序处理：

1. `workflow.html` 的紫色主 accent 与主 deck 不一致。如果它仍作为独立 demo 页可以保留；如果要和主 deck 互相嵌入，建议迁移到 `--blue / --blue-bd`。
2. `explainers.html` 和 `workflow-patterns.html` 是图解实验台，teal/amber/red 合理，但应避免把这些图例色复制进主 deck。
3. `trace_viewer.html` 有 JSON token 色，例如 bool 紫色。这属于语法高亮，可以保留，但不要作为全局 UI 色。
4. 主 deck 内新增互动控件时优先采用裸文字、轻边框、弱背景。避免新增厚 pill、强阴影和高饱和按钮。
