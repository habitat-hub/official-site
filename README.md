# 概要

Habitat Hub 公式サイト

https://www.habitat-hub.com/

# 実装方針
Atomic Design、Container/Presentationalパターンを参考に実装を行う

# ディレクトリ構造

```
./src
├── app
│   ├── page.tsx // domain1
│   ├── layout.tsx
│   └── domain2 // domain2
│       └── [domain2Id]
│           └── page.tsx
└── components
    ├── common // 共通コンポーネント
    │   ├── atoms
    │   │   ├── AaaContainer.tsx
    │   │   ├── Bbb1Container.tsx
    │   │   ├── Bbb2Container.tsx // 一つのuiコンポーネントに対して複数のコンテナを作成することは全然OK！！
    │   │   └── ui
    │   │       ├── Aaa.tsx
    │   │       └── Bbb.tsx
    │   │── molecules
    │   │   └── ... // atomsと同じ
    │   │── organisms
    │   │   ├── container と ui はatomsと同じ
    │   │   └── layout
    │   │       └── AaaLayout.tsx // 複数のコンポーネントを囲んだ部分にスタイルを当てたい時などに利用する
    │   │── hooks
    │   │   └── useAaa.ts
    │   └── utils
    │       └── aaaUtil.ts
    ├── domain1
    │   │── ... // commonと同じ
    │   └── templates
    │       │── Domain1Template.tsx
    │       └── layout
    │           └── AaaLayout.tsx // 複数のコンポーネントを囲んだ部分にスタイルを当てたい時などに利用する
    └── domain2
        │── ... // commonと同じ
        └── templates
            ├── Domain2-1Template.tsx
            │── Domain2-2Template.tsx // ページ的には一緒だが、テンプレートにパターンを持たせたい場合などは、複数作成することもOK
            └── layout
                │── Domain2-1Layout.tsx
                └── Domain2-2Layout.tsx // 複数作ってもOK
```

# container コンポーネントに関するルール

### ルール

- ui に対応する container コンポーネントは最低一つ用意する
- ui コンポーネントは直接呼び出さず、container コンポーネント越しに利用する

### 理由
- 作らなかったりすると、ui と container のどちらを使うべきかの判断に迷うため
- ui コンポーネントを呼び出せるようにした場合、親の ui コンポーネントにロジックが含まれたり、設定値の加工処理などが入ったりと、親の ui コンポーネントに本来の役割以上のコードを持たせることにつながってしまうため

# ui コンポーネントに関するルール

### ルール

- ロジックは持たない（ロジックはcontainerに持たせる）
- 定数の定義なども基本行わない（containerからpropsでもらう形にする）

### 理由

- uiに関する関心ごとのみ取り扱うようにするため

# layout コンポーネントに関するルール

### ルール

- childrenの外側のレイアウトを定義するコンポーネントはlayoutフォルダに定義する

### 理由

- uiパーツとは若干毛色が異なり、別管理の方が見やすいため

# 各ディレクトリの説明

| ディレクトリ名 | 説明 | 備考 |
|:---|:---|:---|
| atoms | 他のコンポーネントを含まないコンポーネント | ちょっとしたアイコンのようなものなどは、許容 |
| molecules | 複数のコンポーネントを含むコンポーネント <br/> ドメイン上の意味を持たないコンポーネントの塊  | 〇〇エリアの一部、みたいなものはここ <br/> 〇〇エリアは organisms | | 
| organisms | 複数のコンポーネントを含むコンポーネント <br/> ドメイン上の意味を持つコンポーネントの塊 | copyrightのみを表示しているフッターなどドメイン的な意味はあるが、atomレベルのコンポーネントの場合、こちらに入れることとする <br/> layout系の処理はlayoutコンポーネントに分離する |
| templates | ページを構成するコンポーネントをまとめたコンポーネント <br/> api 通信などは基本ここで行う | 基本的にはorganismsコンポーネントの集まりとなる想定 <br/> layout系の処理はlayoutコンポーネントに分離する |
| app/page.tsx | ページ内コンテンツ以外の共通パーツの適用、メタタグのようなコンテンツ外の設定などをを行う | ページ内コンテンツに関する処理はここには書かない（それは template に書く）<br/> pageレベルのlayout系の処理はlayout.tsxに記載する |

# 参考

[Container/Presentational パターン再入門](https://zenn.dev/buyselltech/articles/9460c75b7cd8d1)
