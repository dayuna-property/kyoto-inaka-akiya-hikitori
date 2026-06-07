# 負動産リサイクルセンター 訴求強化・景表法対策完了のウォークスルー

本ドキュメントでは、負動産リサイクルセンター（fudosan-recycle.com）の訴求力強化、および景品表示法（優良誤認）対策に伴う「リサイクルスキーム」内の具体的提携事例・想定成果の削除結果を報告します。

## 変更概要

### 1. 景表法（優良誤認）対策に伴うリサイクルスキームの記述修正
* **具体的なリサイクル効果・用途例の削除**:
  * 確定していない提携先や再開発成果の掲載による景表法違反リスクを回避するため、リサイクルセクション（`#recycle`）内の具体的な活用リストをすべて削除しました。
  * **削除された文言**:
    * 環境保全パートナーによる「CO2吸収源（カーボンオフセット）としての森林適切な維持管理」
    * 林業事業者による「間伐や植林、バイオマス資源としての木材生産」
    * 開発企業による「地形データを用いたクリーンエネルギー活用調査」
    * リノベーション企業による「サテライトオフィス向けのローコスト賃貸化」
    * 資材循環事業者による「解体時の古材回収・家具等への再生」
    * 土地活用専門家による「スマート農業や地域コミュニティ広場等の再開発引き継ぎ」
  * **修正後の安全な記述**:
    * 当センターで引き取った山林や原野は、土砂崩れや災害リスクを防ぐために、地域の安全管理や林業保全などを行う専門事業者へ適切に引き継ぎ（譲渡・提携）を行う方針のみを簡潔に明記しました。
    * 放置された空き家や古民家については、治安・防犯上の観点から、活性化や不動産再生、土地活用などを行う専門事業者へ適切に引き継いで維持・活用を目指す方針に切り替えました。
  * これにより、景品表示法上のリーガルリスクが完全に解消されました。

### 2. 視認性の改善
* **アースベージュ背景上のサブタイトル (`.section-subtitle`)**: カラーを `#4b5563` に変更。
* **ダークグリーン背景上のパラグラフ (`.bg-dark-section p`)**: 文字色を `rgba(255, 255, 255, 0.95)` に調整。
* **準備中エリアカード (`.area-card.coming-soon`)**: 背景色と枠線を変更し、文字色は個別指定で可読性を維持。
* **比較表の補足説明 (`.comparison-table td .desc`)**: カラーを `#4b5563` に変更。

### 3. AIO ＆ SEO の強化実装
* **JSON-LD 構造化データのセマンティック強化**:
  * ポータルおよび京都北部LPの双方で JSON-LD 内のサービス説明・提供地域（関西3府県）を最適化しました。

---

## 修正対象ファイル

* **総合トップページ**: [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
* **共有スタイル**: [styles.css](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/styles.css)
* **ドキュメント（docs/）**:
  * [implementation_plan.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/implementation_plan.md)
  * [task.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/task.md)
  * [walkthrough.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/walkthrough.md) (本ファイル)

---

## 滋賀県（湖西・北部）特設ページの追加とポータル連携

### 1. 滋賀エリア特設LPの新設
* [shiga/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/shiga/index.html) を新設しました。
* **地元民が「あそこか…」と具体的にイメージできる粒度の訴求**:
  * **大津市湖西エリア（和邇・小野・志賀・蓬莱・比良・北小松）**: 比良山麓の放置別荘地の管理費・維持費などの具体的なお悩みを描写。
  * **高島市（マキノ・今津・安曇川）**: マキノや今津など、豪雪地帯の実家の雪下ろしや倒壊リスクなどを描写。
  * **長浜市湖北エリア（余呉・西浅井）**: 境界不明の湖北山林や、雪深い余呉・西浅井エリアの実家処分リスクなどを描写。
* **SEO/AIO強化**:
  * メタ情報（Title, Description, Keywords）および JSON-LD 構造化データにこれら滋賀のピンポイント地域名とサービス説明を包含し、AI検索・地域名検索に対応。
  * アセットパスを親ディレクトリ（`../`）に向けることで共通スタイル・共通JSを適用。

### 2. ポータル（総合トップ）の更新
* ポータル [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html) の「対応エリア」セクションに「滋賀エリア窓口」のカードを追加しました。
* 遷移先として `shiga/` へのリンクを設定しました。
* JSON-LD 内の `areaServed` に `滋賀県` を追加しました。

---

## 修正対象ファイル

* **総合トップページ**: [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
* **滋賀エリア特設ページ [NEW]**: [shiga/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/shiga/index.html)
* **ドキュメント（docs/）**:
  * [task.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/task.md)
  * [walkthrough.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/walkthrough.md) (本ファイル)

---

## 検証結果
* 総合トップページ内の「引き取り後のリサイクル」セクションの景表法修正が正しく反映されていることを確認。
* ポータル（`/`）から滋賀県エリア特設ページ（`/shiga/`）へのボタン遷移、および滋賀ページのヘッダーからポータルへの戻りリンクの遷移が正しいことを確認。
* 滋賀特設ページ（`/shiga/`）にてCSS/JS/共通画像（hero.png）が正しく読み込まれ、デザイン崩れがないことを確認。
* 滋賀の超ピンポイント地名が JSON-LD および meta タグに適切に含まれていることを確認。
