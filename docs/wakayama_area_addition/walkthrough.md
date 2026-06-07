# 負動産リサイクルセンター 和歌山エリア（山林・果樹園・空き家）追加完了のウォークスルー

本ドキュメントでは、和歌山県（有田川、紀美野、紀南山間部、高野山周辺エリアなど）の新規対応エリア追加に伴う特設ページの構築、および総合トップページとの連携結果を報告します。

## 変更概要

### 1. 和歌山エリア特設LPの新設
* [wakayama/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/wakayama/index.html) を新設しました。
* **地元民が「あそこか…」と具体的にイメージできる粒度の訴求**:
  * **紀北・紀中エリア（紀美野町・有田川町・日高川町）**: 高齢化で耕作放棄され放置された急傾斜のみかん畑や柿畑等の果樹園跡地、山間部の古い農家住宅の草刈り・管理負担のお悩みを描写。
  * **紀南エリア（那智勝浦町・古座川町・串本町・新宮市）**: 台風や大雨での土砂崩れ・崖崩れ・倒木リスクが心配な急傾斜の山林や、何十年も放置されたヒノキ・スギの保安林の災害不安を描写。
  * **山間部エリア（田辺市龍神・中辺路、高野町）**: 相続が何代も放置され登記が古いままの境界不明な森林や、山深く管理に行けない古民家の処分お悩みを描写。
* **SEO/AIO強化**:
  * メタ情報（Title, Description, Keywords）および JSON-LD 構造化データにこれら和歌山のピンポイント地域名とサービス説明を包含し、AI検索・地域名検索に対応。
  * アセットパスを親ディレクトリ（`../`）に向けることで共通スタイル・共通JSを適用。

### 2. ポータル（総合トップ）の更新
* ポータル [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html) の「対応エリア」セクションにある「和歌山エリア窓口」カードを「準備中」から正式公開へと修正しました。
* 遷移先として `wakayama/` へのリンクを設定しました。
* ポータルの JSON-LD 内の `areaServed` に `和歌山県` が正しく構成されていることを確認しました。

---

## 修正対象ファイル

* **総合トップページ**: [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
* **和歌山エリア特設ページ [NEW]**: [wakayama/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/wakayama/index.html)
* **ドキュメント（docs/）**:
  * [task.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/wakayama_area_addition/task.md)
  * [walkthrough.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/wakayama_area_addition/walkthrough.md) (本ファイル)

---

## 検証結果
* ポータル（`/`）から和歌山県エリア特設ページ（`/wakayama/`）へのボタン遷移、および和歌山ページのヘッダーからポータルへの戻りリンクの遷移が正しいことを確認。
* 和歌山特設ページ（`/wakayama/`）にてCSS/JS/共通画像（hero.png）が正しく読み込まれ、デザイン崩れがないことを確認。
* 和歌山の超ピンポイント地名や特有のお悩みが JSON-LD および meta タグに適切に含まれていることを確認。
