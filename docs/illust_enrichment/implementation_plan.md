# 実装計画：イラストの多用と文章の最小限化（日本人向けデザイン）

想定ユースケースセクションおよび特徴セクションにおいて、文字中心の構成から、日本人向けに最適化されたイラスト中心の構成へと変更し、視覚的なわかりやすさを向上させます。
また、引き取り後の再循環について直感的に理解できるよう、リサイクルスキームの図解を新規追加します。

## ユーザー確認事項

> [!IMPORTANT]
> 既存の各地域別HTML（兵庫、京都、大阪、滋賀、和歌山）およびルートの `index.html` に同一の変更を適用します。
> 地域別HTMLでは画像のパスが `../images/recycle_scheme_diagram.png` になるのに対し、ルートHTMLでは `images/recycle_scheme_diagram.png` となる点に注意して実装します。

## 提案する変更内容

### 1. スタイルの調整

#### [MODIFY] [styles.css](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/styles.css)
- 想定ユースケースカード内（`.usecases-card`）にイラスト画像を表示するためのスタイルを調整します。
- 特徴カード（`.feature-card-item`）内の数字バッジ（`.feat-badge-num`）を非表示/削除し、イラスト画像（`.feature-card-img`）を綺麗に中央配置するスタイルを調整します。
- モバイル表示時（`@media (max-width: 1024px)`）の配置崩れを防ぐため、カード内のパディングや画像のレスポンシブサイズを最適化します。
- 新設するリサイクルスキーム図解表示用クラス `.recycle-visual-container` および `.recycle-scheme-img` のスタイルを追加します（レスポンシブ対応の横幅設定など）。

---

### 2. HTMLファイルの書き換え（文章の最小限化とイラスト挿入）

#### [MODIFY] [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
#### [MODIFY] [hyogo/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/hyogo/index.html)
#### [MODIFY] [kyoto/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/kyoto/index.html)
#### [MODIFY] [osaka/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/osaka/index.html)
#### [MODIFY] [shiga/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/shiga/index.html)
#### [MODIFY] [wakayama/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/wakayama/index.html)

- **想定ユースケース (`#usecases`)**
  - イラスト（`usecase_*.png`）の適用とテキスト最小限化。

- **選ばれる特徴 (`#features`)**
  - イラスト（`feature_*.png`）の適用とテキスト最小限化。

- **リサイクルスキーム (`#recycle`)**
  - セクションの見出し・リード文の直後に、新規生成したリサイクルスキーム図解画像を表示するコンテナを追加します。
  ```html
  <div class="recycle-visual-container">
      <img src="images/recycle_scheme_diagram.png" alt="負動産リサイクルスキーム図解" class="recycle-scheme-img">
  </div>
  ```

---

## 検証計画

### 手動確認
- ルートおよび各地域別のHTMLファイルを開き、PC表示およびモバイル表示でレイアウト崩れがないか確認します。
- イラスト画像が適切に表示され、テキストが重複なく表示されていることを確認します。

### Gitによる確認とプッシュ
- `git diff` を確認し、不要な変更が混入していないことを確かめます。
- 変更内容をコミットし、`git -c http.sslVerify=false push` を実行してリモートリポジトリにプッシュします。
