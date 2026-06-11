# 実装計画：イラストの多用と文章の最小限化（日本人向けデザイン）

想定ユースケースセクションおよび特徴セクションにおいて、文字中心の構成から、日本人向けに最適化されたイラスト中心の構成へと変更し、視覚的なわかりやすさを向上させます。
また、引き取り後の再循環について直感的に理解できるよう、リサイクルスキームの図解を日本語・Noto Sans JPフォント対応の高品質なベクター画像（SVG）にて新設します。

## ユーザー確認事項

> [!IMPORTANT]
> - AI画像生成では日本語の文字化けやフォントの崩れが発生するため、今回はブラウザ側で美しくレンダリング可能なベクター形式の **SVG（Scalable Vector Graphics）** で図解を作成します。
> - これにより、指定の **Noto Sans JP** フォントが正確に適用され、拡大縮小しても文字がぼやけず、完璧な日本語の図解が表示されます。
> - 各地域別HTMLにおける画像のパスは `../images/recycle_scheme_diagram.svg` になります。

## 提案する変更内容

### 1. スタイルの調整

#### [MODIFY] [styles.css](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/styles.css)
- 想定ユースケースカード内（`.usecases-card`）にイラスト画像を表示するためのスタイルを調整します。
- 特徴カード（`.feature-card-item`）内の数字バッジ（`.feat-badge-num`）を非表示/削除し、イラスト画像（`.feature-card-img`）を綺麗に中央配置するスタイルを調整します。
- モバイル表示時（`@media (max-width: 1024px)`）の配置崩れ防ぐため、カード内のパディングや画像のレスポンシブサイズを最適化します。
- 新設するリサイクルスキーム図解表示用クラス `.recycle-visual-container` および `.recycle-scheme-img` のスタイルを追加します。

---

### 2. 図解SVGの新規作成

#### [NEW] [recycle_scheme_diagram.svg](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/images/recycle_scheme_diagram.svg)
- `Noto Sans JP` をフォントに指定した日本語のベクター図解を作成します。
- ドロップシャドウや滑らかなグラデーションを用い、モダンでクリーンな3ステップ（所有者様 ➔ センター ➔ 専門パートナー）の図解をコードで定義します。

---

### 3. HTMLファイルの書き換え（文章の最小限化とイラスト挿入）

#### [MODIFY] [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
#### [MODIFY] [hyogo/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/hyogo/index.html)
#### [MODIFY] [kyoto/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/kyoto/index.html)
#### [MODIFY] [osaka/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/osaka/index.html)
#### [MODIFY] [shiga/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/shiga/index.html)
#### [MODIFY] [wakayama/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/wakayama/index.html)

- **リサイクルスキーム (`#recycle`)**
  - 追加した図解画像の拡張子を `.png` から `.svg` に書き換えます。
  ```html
  <div class="recycle-visual-container">
      <img src="images/recycle_scheme_diagram.svg" alt="負動産リサイクルスキーム図解" class="recycle-scheme-img">
  </div>
  ```

---

## 検証計画

### 手動確認
- ルートおよび各地域別のHTMLファイルを開き、PC表示およびモバイル表示でレイアウト崩れがないか確認します。
- 図解内の日本語テキストが崩れることなく、`Noto Sans JP` で正しく表示されていることを確認します。

### Gitによる確認とプッシュ
- `git diff` を確認し、不要な変更が混入していないことを確かめます。
- 変更内容をコミットし、`git -c http.sslVerify=false push` を実行してリモートリポジトリにプッシュします。
