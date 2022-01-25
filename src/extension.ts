import * as vscode from 'vscode';

import { StatusBar } from './statusBar';

export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('', async () => {
    StatusBar.init()
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
