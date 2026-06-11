# 実装計画：イラストの多用と文章の最小限化（日本人向けデザイン）

想定ユースケースセクションおよび特徴セクションにおいて、文字中心の構成から、日本人向けに最適化されたイラスト中心の構成へと変更し、視覚的なわかりやすさを向上させます。
また、引き取り後の再循環について直感的に理解できるよう、リサイクルスキームの図解を日本語・Noto Sans JPフォント対応の高品質なベクター画像（SVG）にて新設します。

## ユーザー確認事項

> [!IMPORTANT]
> - 一部ブラウザやWebサーバーのMIME Type設定、セキュリティポリシー制限により、外部 `.svg` 画像ファイルが正常にロードされない現象が報告されました。
> - これを根本的に解決するため、外部画像ファイル（`images/recycle_scheme_diagram.svg`）をロードする形ではなく、HTML内に **インラインSVG形式** で図解コードを直接埋め込む手法を採用します。
> - これにより、サーバーの設定や画像パス、ブラウザキャッシュの問題に依存せず、**100%確実に日本語の図解が Noto Sans JP フォントで美しく表示されるようになります。**

## 提案する変更内容

### 1. スタイルの調整

#### [MODIFY] [styles.css](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/styles.css)
- 想定ユースケースカード内（`.usecases-card`）にイラスト画像を表示するためのスタイルを調整します。
- 特徴カード（`.feature-card-item`）内の数字バッジ（`.feat-badge-num`）を非表示/削除し、イラスト画像（`.feature-card-img`）を綺麗に中央配置するスタイルを調整します。
- モバイル表示時（`@media (max-width: 1024px)`）の配置崩れを防ぐため、カード内のパディングや画像のレスポンシブサイズを最適化します。
- 新設するリサイクルスキーム図解表示用クラス `.recycle-visual-container` および `.recycle-scheme-img` のスタイルを追加します。

---

### 2. HTMLファイルの書き換え（インラインSVG埋め込み）

#### [MODIFY] [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
#### [MODIFY] [hyogo/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/hyogo/index.html)
#### [MODIFY] [kyoto/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/kyoto/index.html)
#### [MODIFY] [osaka/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/osaka/index.html)
#### [MODIFY] [shiga/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/shiga/index.html)
#### [MODIFY] [wakayama/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/wakayama/index.html)

- **リサイクルスキーム (`#recycle`)**
  - `<div class="recycle-visual-container">` 内にある `<img>` タグを、日本語・Noto Sans JPフォント対応のSVGコードそのものへ置き換えます（インライン埋め込み）。
  - これにより、同一のSVGコードがすべてのページに確実に適用され、外部ファイルエラーを回避します。

---

## 検証計画

### 手動確認
- ルートおよび各地域別のHTMLファイルを開き、PC表示およびモバイル表示でレイアウト崩れがないか確認します。
- 図解が非表示になることなく、日本語テキストが `Noto Sans JP` で正しく表示されていることを確認します。

### Gitによる確認とプッシュ
- `git diff` を確認し、不要な変更が混入していないことを確かめます。
- 変更内容をコミットし、`git -c http.sslVerify=false push` を実行してリモートリポジトリにプッシュします。
