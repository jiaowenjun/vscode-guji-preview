import * as vscode from "vscode";
import * as path from "path";
import { toHtml } from "./components/html";
import { lines } from "./components/lines";
import { renderToString } from "react-dom/server";
import { parseLines } from "./parser/parse-lines";

let currentPanel: vscode.WebviewPanel | undefined = undefined;

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-guji-preview" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "vscode-guji-preview.preview",
    () => {
      if (currentPanel) {
        currentPanel.reveal(vscode.ViewColumn.Beside);
      } else {
        // 1. 获取编辑器 .gj 文件的文本
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
          return;
        }
        const text = editor.document.getText();
        const title = `预览 ${path.basename(editor.document.fileName)}`;

        // 2. 将 .gj 文本转为 html
        const model = parseLines(text);
        const html = toHtml({
          title: model.p.toString(),
          body: renderToString(lines({ model })),
        });
        console.log(html);

        // 3. 创建 Webview 预览窗口
        currentPanel = vscode.window.createWebviewPanel(
          "guji-preview",
          title,
          vscode.ViewColumn.Beside
        );

        // 4. 在预览窗口展示 html
        currentPanel.webview.html = html;
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
