# Repository instructions

- 禁止批量刪除文件或目錄。
- 不要使用 `del /s`、`rd /s`、`rmdir /s`、`Remove-Item -Recurse` 或 `rm -rf`。
- 需要刪除文件時，只能一次刪除一個明確路徑的文件。
- 如需批量刪除，停止操作並請使用者手動刪除。
- Phase 1 public repository 不得加入 secrets、真實 DB dump、crawler、private source adapter 或 internal confidence rules。
