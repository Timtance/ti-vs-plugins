// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

const version = '0.1.4';
export function activate(context: vscode.ExtensionContext) {
	// console.log('Congratulations, your extension "test" is now active in the web extension host!');
	let disposable = vscode.commands.registerCommand('ti-vs-plugins.helloWorld', () => {
		vscode.window.showInformationMessage(`Hello World from test in a web extension host! ${version}`);
	});
	context.subscriptions.push(disposable);

    // 注册命令以在菜单中显示 Webview
    let webviewMode = vscode.commands.registerCommand('ti-vs-plugins.openWebview', () => {
        // 创建一个面板并设置标题
        const panel = vscode.window.createWebviewPanel(
            'ti-vs-plugins', // 唯一标识符，用于区分不同的面板
            'ti-vs-plugins', // 面板标题
            vscode.ViewColumn.One, // 在编辑器第一列显示
            {
                // 允许面板使用 JavaScript
                enableScripts: true
            }
        );

        // 获取 Webview 的 HTML 内容
        const htmlContent = getWebviewContent(context);

        // 设置 Webview 内容
        panel.webview.html = htmlContent;
    });
    // 注册命令
    context.subscriptions.push(webviewMode);
}

function getWebviewContent(context: vscode.ExtensionContext): string {
    // 读取 HTML 模板文件的绝对路径
    const htmlPath = vscode.Uri.file(path.join(context.extensionPath, 'dist', 'webview', 'index.html'));
    // 将文件路径转换为 Webview 可以访问的 URI
    const htmlUri = htmlPath.with({ path: "/vscode-app" + htmlPath.path, scheme: 'vscode-file' });

    // 返回 HTML 模板的内容
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Webview Demo</title>
        </head>
        <body style="position:absolute;top:0;bottom:0;left:0;right:0;border: none;">
            <iframe src="${htmlUri}" style="width:100%; height:100%; border:none;"></iframe>
        </body>
        </html>
    `;
}

// This method is called when your extension is deactivated
export function deactivate() {}
