# 負動産リサイクルセンター 大阪エリア（ニュータウン・山間部）追加完了のウォークスルー

本ドキュメントでは、大阪府（能勢町、豊能町、千早赤阪村、河南町、太子町、河内長野市など）の新規対応エリア追加に伴う特設ページの構築、および総合トップページとの連携結果を報告します。

## 変更概要

### 1. 大阪エリア特設LPの新設
* [osaka/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/osaka/index.html) を新設しました。
* **地元民が「あそこか…」と具体的にイメージできる粒度の訴求**:
  * **大阪北部（豊能・北摂）エリア（能勢町・豊能町など）**: 坂道が多く高齢化が進む古いオールドニュータウン（ときわ台、光風台、青葉台など）の空き家で、買い手がつかず管理費・固定資産税だけを払い続けるお悩みを描写。
  * **大阪南部（南河内・泉州）エリア（千早赤阪村・河内長野市など）**: 金剛山麓周辺などの急傾斜山林の台風・大雨時の土砂崩れや倒木リスクのお悩みを描写。
  * **南河内エリア（河南町・太子町など）**: 相続した広大な古い農地（果樹園等）や農家住宅、境界不明の相続山林の維持・解体費用のお悩みを描写。
* **SEO/AIO強化**:
  * メタ情報（Title, Description, Keywords）および JSON-LD 構造化データにこれら大阪のピンポイント地域名とサービス説明を包含し、AI検索・地域名検索に対応。
  * アセットパスを親ディレクトリ（`../`）に向けることで共通スタイル・共通JSを適用。

### 2. ポータル（総合トップ）の更新
* ポータル [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html) の「対応エリア」セクションにある「大阪エリア窓口」カードを「準備中」から正式公開へと修正し、かつての説明文内の地理的な誤記（豊能・能勢を「大阪南部」と記載していた点）を修正しました。
* 遷移先として `osaka/` へのリンクを設定しました。
* ポータルの JSON-LD 内の `areaServed` に `大阪府` が正しく構成されていることを確認しました。

---

## 修正対象ファイル

* **総合トップページ**: [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
* **大阪エリア特設ページ [NEW]**: [osaka/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/osaka/index.html)
* **ドキュメント（docs/）**:
  * [task.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/osaka_area_addition/task.md)
  * [walkthrough.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/osaka_area_addition/walkthrough.md) (本ファイル)

---

## 検証結果
* ポータル（`/`）から大阪府エリア特設ページ（`/osaka/`）へのボタン遷移、および大阪ページのヘッダーからポータルへの戻りリンクの遷移が正しいことを確認。
* 大阪特設ページ（`/osaka/`）にてCSS/JS/共通画像（hero.png）が正しく読み込まれ、デザイン崩れがないことを確認.
* 大阪の超ピンポイント地名や特有のお悩みが JSON-LD および meta タグに適切に含まれていることを確認。
