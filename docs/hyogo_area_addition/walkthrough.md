# 負動産リサイクルセンター 兵庫エリア（淡路島・山間部）追加完了のウォークスルー

本ドキュメントでは、兵庫県（淡路島、但馬、丹波、西播磨エリア）の新規対応エリア追加に伴う特設ページの構築、および総合トップページとの連携結果を報告します。

## 変更概要

### 1. 兵庫エリア特設LPの新設
* [hyogo/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/hyogo/index.html) を新設しました。
* **地元民が「あそこか…」と具体的にイメージできる粒度の訴求**:
  * **淡路島エリア（淡路市・洲本市・南あわじ市）**: 釜口や五色などのバブル期リゾート別荘地や、海沿い特有の塩害で劣化した空き家の維持管理費・税金のお悩みを描写。
  * **但馬エリア（豊岡市・養父市・朝来市）**: ハチ高原周辺などの豪雪地帯の実家で、冬の豪雪による倒壊や雪下ろしの負担を描写。
  * **丹波エリア（丹波篠山市・丹波市） / 西播磨エリア（宍粟市・佐用町）**: 相続が放置され境界不明の山林や、昭和の原野商法で購入させられた原野の処分お悩みを描写。
* **SEO/AIO強化**:
  * メタ情報（Title, Description, Keywords）および JSON-LD 構造化データにこれら兵庫のピンポイント地域名とサービス説明を包含し、AI検索・地域名検索に対応。
  * アセットパスを親ディレクトリ（`../`）に向けることで共通スタイル・共通JSを適用。

### 2. ポータル（総合トップ）の更新
* ポータル [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html) の「対応エリア」セクションに「兵庫エリア窓口」のカードを追加しました。
* 遷移先として `hyogo/` へのリンクを設定しました。
* JSON-LD 内の `areaServed` に `兵庫県` を追加しました。

---

## 修正対象ファイル

* **総合トップページ**: [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
* **兵庫エリア特設ページ [NEW]**: [hyogo/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/hyogo/index.html)
* **ドキュメント（docs/）**:
  * [task.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/hyogo_area_addition/task.md)
  * [walkthrough.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/hyogo_area_addition/walkthrough.md) (本ファイル)

---

## 検証結果
* ポータル（`/`）から兵庫県エリア特設ページ（`/hyogo/`）へのボタン遷移、および兵庫ページのヘッダーからポータルへの戻りリンクの遷移が正しいことを確認。
* 兵庫特設ページ（`/hyogo/`）にてCSS/JS/共通画像（hero.png）が正しく読み込まれ、デザイン崩れがないことを確認。
* 兵庫の超ピンポイント地名や特有のお悩みが JSON-LD および meta タグに適切に含まれていることを確認。
