#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e

# 建立輸出檔案
npm run build

# 部署 / 更新 至 FrieBase
firebase deploy

# 本地端預覽
# npm run preview

# 執行指令，在終端機輸入 firebase.sh