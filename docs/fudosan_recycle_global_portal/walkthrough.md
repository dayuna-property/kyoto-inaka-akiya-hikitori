# 負動産リサイクルセンター 訴求強化・リサイクル仕様変更のウォークスルー

本ドキュメントでは、負動産リサイクルセンター（fudosan-recycle.com）の訴求力強化および「リサイクルスキーム」の専門事業者移転型モデルへのアップデート反映結果を報告します。

## 変更概要

### 1. リサイクルスキームの仕様変更
* **専門事業者への引き継ぎ（譲渡・提携）モデルへの移行**:
  * 自社ですべてを再生・活用する表現から、**「その地目や状態に応じた最適な専門パートナー企業へ引き継ぐ」**ビジネスモデルへと内容を修正しました。
  * **山林・原野の引き継ぎ先**: 環境保全パートナー（カーボンオフセット等）、林業・林産事業者（持続的な林業資源活用）、クリーンエネルギー開発企業等に引き継ぐ構成へ変更。
  * **空き家・古民家の引き継ぎ先**: リノベーション・移住支援企業（サテライトオフィスや移住住宅化）、建築資材循環事業者（古材の回収・レスキュー）、土地活用・開発専門家等に引き継ぐ構成へ変更。
  * これにより、事業としての実効性と社会的信頼性がさらに高まりました。

### 2. 視認性の改善（コントラスト比の最適化）
* **アースベージュ背景上のサブタイトル (`.section-subtitle`)**: カラーを濃いチャコールグレー（`#4b5563`）に変更しました。
* **ダークグリーン背景上のパラグラフ (`.bg-dark-section p`)**: 文字色を `rgba(255, 255, 255, 0.95)` に引き上げました。
* **準備中エリアカード (`.area-card.coming-soon`)**: カード全体の opacity を下げる記述を廃止し、背景（淡いグレー）と枠線（点線）を変更。テキストは個別に明瞭な色を設定し、準備中と可読性の両立を図りました。
* **比較表の補足説明 (`.comparison-table td .desc`)**: カラーを `#4b5563` に変更しました。

### 3. AIO (AI要約検索最適化) ＆ SEO の強化実装
* **JSON-LD 構造化データのセマンティック強化**:
  * ポータルおよび京都北部LP双方の JSON-LD を修正し、提供エリアに関西3府県（京都、大阪、和歌山）を明示し、専門家連携などのメタ記述をリッチにしました。
* **セマンティックマークアップ**:
  * コアバリューに `<strong>` タグを適用しました。

---

## 修正対象ファイル

* **総合トップページ**: [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
* **共有スタイル**: [styles.css](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/styles.css)
* **ドキュメント（docs/）**:
  * [implementation_plan.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/implementation_plan.md)
  * [task.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/task.md)
  * [walkthrough.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/walkthrough.md) (本ファイル)

---

## 検証結果
* 総合トップページ内の「引き取り後のリサイクル」スキームのカードおよび見出し・リード文が、専門のパートナー事業者への引き継ぎを強調する文章に正しく書き換わり、かつ既存のデザイン崩れがないことを確認しました。
