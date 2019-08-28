# headless-chrome-server

`x-url`というHTTPヘッダーで受け取ったURLをHeadless Chromeで開くサーバー。

## 必要なもの

- [Node.js](https://nodejs.org/ja/)
- [Yarn](https://yarnpkg.com/ja/)
- [Google Chrome](https://www.google.com/intl/ja_jp/chrome/)

## 依存パッケージのインストール

```
yarn install
```

## コマンド

- `yarn start` … サーバーを起動する。
- `yarn dev` … 開発を開始する。
- `yarn fix` … ソースコードの問題を可能な限り自動修正する。

## 使い方

起動したサーバーに`x-url`というHTTPヘッダーでURLを送ると、そのURLがHeadless Chromeで開きます。

`curl`コマンドによるリクエスト例：

```
curl http://localhost:8888/ --header "x-url: http://example.com/"
```
