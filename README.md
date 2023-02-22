# IRUP website remake

<a target="_blank" href="https://irup-0601.web.app">LINK</a>

User Interface:
1. Home page
2. About page
3. Research page 
4. News page
5. Info page
6. Back-End

## vue 3 + vite + Tailwind CSS V3 + Firebase 9

## UPDATE Log

- 2022/4/9 ~ 13
  - update: Make all pages
- 2022/4/14
  - update: Make the CMS interface
- 2022/4/15 ~ 24
  - update: Revise some frond-end pages
- 2022/4/25 ~ 5/19
  - update: making CMS UI
- 2022/5/20 ~ now
  - fixed: connect firebase

## 修改中的錯誤
firebase 的圖片無法顯示在前台網頁上
打包後，後台部份功能異常
後台新增資料，firebase 無法接收

## 未完成進度
1. firebase 已連接並呈現在前台網頁上，但文章數據接收不完整
2. 接 firebase 的前台文章無法點擊出單一文章瀏覽頁面

## Build dist and run on server
1. npm run build
2. npm i -g express-generator
3. express "project name"
4. cd "project name"
5. npm i
6. npm start
7. use browser to run http://localhost