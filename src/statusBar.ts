import * as vscode from 'vscode'

export class StatusBar {
  private static _statusBarItem: vscode.StatusBarItem

  private static get statusBarItem() {
    if (!this._statusBarItem) {
      this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 200)
      this.statusBarItem.color = '#ffffff'
      this.statusBarItem.text = 'Command History'
      this.statusBarItem.command = 'commandHistory.command'
    }
    return this._statusBarItem
  }

  static init() {
    this.statusBarItem.show()
  }

  static dispose() {
    this.statusBarItem.dispose()
  }
}
