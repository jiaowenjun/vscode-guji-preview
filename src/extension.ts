import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-guji-preview" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "vscode-guji-preview.preview",
    () => {
      // 1. 获取编辑器 .gj 文件的文档内容

      // 2. 将 .gj 文档转为 html
      const html = `<!DOCTYPE html>
	  <html lang="en">
	  <head>
		  <meta charset="UTF-8">
		  <meta http-equiv="X-UA-Compatible" content="IE=edge">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>预览窗口</title>
	  </head>
	  <body>
		  预览内容
	  </body>
	  </html>`;

      // 3. 创建 Webview 预览窗口
      const panel = vscode.window.createWebviewPanel(
        "guji-preview",
        "预览",
        vscode.ViewColumn.Beside
      );

      // 4. 在预览窗口展示 html
      panel.webview.html = html;
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
