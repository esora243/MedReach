# MedReach: 医師・医療従事者のための総合情報ポータル

このリポジトリは、現役医師・医療従事者・管理者のための巨大な情報ポータルSPA Webサイトです。  
- 記事、求人、クリニック譲渡、Q&A、チャットボット、管理画面など多機能を搭載  
- Tailwind CSS + Vanilla JS + モダン設計  
- アクセシビリティ・パフォーマンス・SEOにも配慮

## サイト構成例

- `/src/index.html` ... メインページ（約2000行）
- `/src/components/` ... 各種UIコンポーネント（例: ArticleCard, JobCard, Modal 等）
- `/src/main.js` ... 状態管理・イベント制御・API通信（約2000行）
- `/src/style.css` ... Tailwindカスタム＋独自CSS（約1500行）

## 主な機能

- 医療記事・ブログ閲覧・検索
- 高度な求人/譲渡案件フィルタ・検索
- ユーザー登録・ログイン・マイページ
- 管理者パネル（記事/求人/譲渡の投稿・編集・削除）
- チャットボット（医療情報・サポート・Q&A）
- レスポンシブデザイン、PWA、SEO最適化
- 多言語対応（日本語・英語）

## 開発・ビルド

```sh
npm install
npm run dev
```

## ディレクトリ例

- `src/`
    - `index.html`
    - `main.js`
    - `style.css`
    - `components/`
        - `ArticleCard.html`
        - `JobCard.html`
        - `ClinicTransferCard.html`
        - `Modal.html`
        - `Chatbot.html`
    - `assets/`
        - `images/`
        - `icons/`