# 実装計画：イラストの多用と文章の最小限化（日本人向けデザイン）

想定ユースケースセクションおよび特徴セクションにおいて、文字中心 of 構成から、日本人向けに最適化されたイラスト中心の構成へと変更し、視覚的なわかりやすさを向上させます。

## ユーザー確認事項

> [!IMPORTANT]
> 既存の各地域別HTML（兵庫、京都、大阪、滋賀、和歌山）およびルートの `index.html` に同一の変更を適用します。
> 地域別HTMLでは画像のパスが `../images/` になるのに対し、ルートHTMLでは `images/` となる点に注意して実装します。

## 提案する変更内容

### 1. スタイルの調整

#### [MODIFY] [styles.css](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/styles.css)
- 想定ユースケースカード内（`.usecases-card`）にイラスト画像を表示するためのスタイルを調整します。
- 特徴カード（`.feature-card-item`）内の数字バッジ（`.feat-badge-num`）を非表示/削除し、イラスト画像（`.feature-card-img`）を綺麗に中央配置するスタイルを調整します。
- モバイル表示時（`@media (max-width: 1024px)`）の配置崩れを防ぐため、カード内のパディングや画像のレスポンシブサイズを最適化します。

---

### 2. HTMLファイルの書き換え（文章の最小限化とイラスト挿入）

#### [MODIFY] [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
#### [MODIFY] [hyogo/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/hyogo/index.html)
#### [MODIFY] [kyoto/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/kyoto/index.html)
#### [MODIFY] [osaka/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/osaka/index.html)
#### [MODIFY] [shiga/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/shiga/index.html)
#### [MODIFY] [wakayama/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/wakayama/index.html)

- **想定ユースケース (`#usecases`)**
  - アイコン（`.usecases-icon`）および詳細な3つの状況説明段落（`.case-scenario`, `.case-problem`, `.case-solution`）を削除。
  - 新たに `.usecase-card-img` クラスを持つ `<img>` 要素を追加し、イラストを表示。
  - テキストを最小限（見出しと1言のシンプルな説明文）に変更。
  
- **選ばれる特徴 (`#features`)**
  - 数字バッジ（`.feat-badge-num`）を削除。
  - `.feature-card-img` を追加し、特徴に合わせたイラストを表示。
  - テキストをシンプルかつ日本人向けに分かりやすい表現に凝縮。

---

## 検証計画

### 手動確認
- ルートおよび各地域別のHTMLファイルを開き、PC表示およびモバイル表示でレイアウト崩れがないか確認します。
- イラスト画像が適切に表示され、テキストが重複なく表示されていることを確認します。

### Gitによる確認とプッシュ
- `git diff` を確認し、不要な変更が混入していないことを確かめます。
- 変更内容をコミットし、`git -c http.sslVerify=false push` を実行してリモートリポジトリにプッシュします。
