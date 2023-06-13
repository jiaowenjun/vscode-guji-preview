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
        // 解析当前编辑器内容
        const content = getWebviewContent();

        // 无编辑器
        if (!content) {
          vscode.window.showInformationMessage("请打开 Guji 文档");
          return;
        }

        // 创建 Webview
        currentPanel = vscode.window.createWebviewPanel(
          "guji-preview",
          "预览 Guji",
          vscode.ViewColumn.Beside
        );

        // Webview 销毁时
        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );

        // 更新 Webview 内容
        currentPanel.title = content.title;
        currentPanel.webview.html = content.html;

        // 编辑器内容修改时同步更新
        vscode.workspace.onDidChangeTextDocument((e) => {
          if (currentPanel) {
            const content = getWebviewContent();
            if (content) {
              currentPanel.title = content.title;
              currentPanel.webview.html = content.html;
            }
          }
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}

function getWebviewContent() {
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

  return { title, html };
}

export function deactivate() {}
