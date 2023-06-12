import * as vscode from "vscode";
import * as path from "path";
import * as toml from "toml";
import { html } from "../src/components/html";
import { lines } from "../src/components/lines";
import { renderToString } from "react-dom/server";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-guji-preview" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "vscode-guji-preview.preview",
    () => {
      // 1. 获取编辑器 .gj 文件的文本
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        return;
      }
      const text = editor.document.getText();
      const title = `预览 ${path.basename(editor.document.fileName)}`;

      // 2. 将 .gj 文本转为 html
      const model = toml.parse(text);
      const htmlStr = html({
        title: model.p,
        body: renderToString(lines({ model })),
      });

      // 3. 创建 Webview 预览窗口
      const panel = vscode.window.createWebviewPanel(
        "guji-preview",
        title,
        vscode.ViewColumn.Beside
      );

      // 4. 在预览窗口展示 html
      panel.webview.html = htmlStr;
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
