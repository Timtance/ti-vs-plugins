# ti-vs-plugins README
ti-vs-plugins 是一个功能丰富、易于使用且具有高度扩展性的 Visual Studio Code 插件项目，为开发者提供了强大的工具和平台，帮助他们更轻松地创建和管理自定义的插件，并实现更丰富和交互性更强的用户体验。

- 该项目是 vscode插件项目 兼容webview 内嵌页面index.html.
- index.html 可以由其他项目灌入 dist文件夹

# 搭建流程
- 环境
node: v16.0.0
- 安装全局
npm install -g yo@4.0.0 generator-code@1.7.0
- 构建项目（选择 webview TypeScript）
yo code
- 安装 打包
npm install -g vsce

# 项目架构
- .vscode： vscode F5调试 配置文件
- src: code 开发文件
- dist: build 前端输入文件夹（index.html）

# 调试方式
- npm run watch-web
- vscode F5 选择node js，弹出新的vscode窗口，输入指令（Open Webview | Hello World）

# 打包
- vsce --version
- vsce package
- 在 Visual Studio Code 中加载生成的 .vsix 文件，即可运行你的插件并查看嵌入的 Webview 页面。

# authorization
- tui.tance
- xiaohua.tu

**Enjoy!**
