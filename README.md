## 概要

Habitat Hub 公式サイト

https://www.habitat-hub.com/

## ディレクトリ構造

```
./src
├── app
│   ├── page.tsx // domain1
│   └── portfolio // domain2
│       └── [portfolioId]
│           └── page.tsx
├── components
│   ├── common // 共通コンポーネント
│   │   ├── atoms
│   │   │   ├── AaaContainer.tsx
│   │   │   ├── Bbb1Container.tsx
│   │   │   ├── Bbb2Container.tsx // 一つのuiコンポーネントに対して複数のコンテナはOK
│   │   │   └── ui
│   │   │       ├── Aaa.tsx
│   │   │       └── Bbb.tsx
│   │   └── molecules
│   │   │   └── ... // atomsと同じ
│   │   └── organisms
│   │   │   └── ... // atomsと同じ
│   ├── domain1
│   │   └── ... // commonと同じ
│   │   └── templates
│   │       └── domain1Template.tsx
│   └── domain2
│       └── ... // commonと同じ
│       └── templates
│           ├── domain2-1Template.tsx
│           └── domain2-2Template.tsx // ページ的には一緒だが、テンプレートにパターンを持たせたい場合などは、複数作成することも可
└── utils
    └── aaaUtil.ts
```

## container コンポーネントに関するのルール

### ルール

- ui に対応する container コンポーネントは基本的に最低一つ用意する
  - props を横流しするだけの場合のみ、省略可能
  - props 以外の設定値などがあったり、ロジックが入る場合は、container を必ず作成すること
- 1-a の例外を除き、ui コンポーネントは直接呼び出さず、container コンポーネント越しに利用する

### 理由

- 作らなかったりすると、ui と container のどちらを使うべきかの判断に迷うため
- ui コンポーネントを呼び出せるようにした場合、親の ui コンポーネントにロジックが含まれたり、設定値の加工処理などが入ったりと、親の ui コンポーネントに本来の役割以上のコードを持たせることにつながってしまうため

## 各ディレクトリの説明

| ディレクトリ名 | 説明 | 備考 |
|:---|:---|:---|
| atoms| 他のコンポーネントを含まないコンポーネント | ちょっとしたアイコンのようなものなどは、許容 |
| molecules | 複数のコンポーネントを含むコンポーネント<br/>ドメイン上の意味を持たないコンポーネントの塊  | 〇〇エリアの一部、みたいなものはここ <br/> 〇〇エリアは organisms | | 
| organisms | 複数のコンポーネントを含むコンポーネント <br/> ドメイン上の意味を持つコンポーネントの | - |
| templates | ページを構成するコンポーネントをまとめたコンポーネント <br/> api 通信などは基本ここで行う | - |
| app/page.tsx | ページ外の共通パーツ適用、メタタグなどのようなパーツ外の設定などをを行う | ページ内コンテンツに関する処理はここには書かない（それは template に書く） |

## 参考

[Container/Presentational パターン再入門](https://zenn.dev/buyselltech/articles/9460c75b7cd8d1)
