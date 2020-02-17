# vue-demo

# 概要

各 NPM/Yarn パッケージの検証をするための Vue プロジェクトです。

# 運用

検証内容(またはライブラリ)ごとにブランチを切っています。
各ブランチの Readme には検証対象のライブラリと検証目的は記載しておきます。

# ブランチ

- tui-image-editor
  →tui-image-editor(画像編集ライブラリ)検証用
- vue-image-lightbox
  →画像のスライドショーを作成するための機能を提供しているライブラリの検証ブランチ
- vue-chartjs
　→グラフ可視化用ライブラリの検証

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
