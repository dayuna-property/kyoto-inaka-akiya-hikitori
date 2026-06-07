# 負動産リサイクルセンター 視認性改善およびAIO/SEO強化のウォークスルー

本ドキュメントでは、負動産リサイクルセンター（fudosan-recycle.com）のWebアクセシビリティ向上（コントラスト調整による視認性強化）、およびAI要約エンジン（AIO）・検索エンジン（SEO）に最適化するためのマークアップ強化結果と今後の方針を報告します。

## 変更概要

### 1. 視認性の改善（コントラスト比の最適化）
* **アースベージュ背景上のサブタイトル (`.section-subtitle`)**:
  * カラーを `var(--color-text-muted)` (`#6b7280`) から `#4b5563`（濃いチャコールグレー）に変更し、背景色とのコントラストを向上させました（WCAG 2.1 AAA基準に配慮）。
* **ダークグリーン背景上のパラグラフ (`.bg-dark-section p`)**:
  * 文字色を `rgba(255, 255, 255, 0.85)` から `rgba(255, 255, 255, 0.95)` に引き上げ、フォントの可読性を最大化しました。
* **準備中エリアカード (`.area-card.coming-soon`)**:
  * カード全体の不透明度を下げる `opacity: 0.75` の記述を廃止し、背景（淡いグレー）と枠線（点線）を変更。テキストカラーは個別に `#4b5563` と `--color-text-muted` を適用し、準備中の外観を維持しつつもテキストの判読性を確保しました。
* **比較表の補足説明 (`.comparison-table td .desc`)**:
  * カラーを `#4b5563` に変更し、表組みの読みやすさを強化しました。

### 2. AIO (AI要約検索最適化) ＆ SEO の強化実装
* **JSON-LD 構造化データのセマンティック強化**:
  * ポータル（`index.html`）および京都北部LP（`kyoto/index.html`）の双方の JSON-LD 構造化データ（`Service` スキーマ）を調整。
  * 提供エリア（`areaServed`）に関西3府県（京都、大阪、和歌山）を明示。
  * AIが当店の「専属専門家チームによる最短1〜2週間の自動所有権移転スキーム」をファクトとして正確に抽出・要約できるよう、プロバイダー説明欄（`description`）やFAQの回答テキストを具体的に拡張しました。
* **セマンティックマークアップ**:
  * ヒーローセクション等のコピー内で、AIが抽出するべきコアバリュー（「専属の司法書士・土地家屋調査士チーム」「最短1〜2週間」「完全非対面・郵送対応」）を `<strong>` タグで囲み、ドキュメントツリー上での強調を強化しました。

---

## 修正対象ファイル

* **総合トップページ**: [index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/index.html)
* **京都エリアLP**: [kyoto/index.html](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/kyoto/index.html)
* **共有スタイル**: [styles.css](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/styles.css)
* **ドキュメント（docs/）**:
  * [implementation_plan.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/implementation_plan.md)
  * [task.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/task.md)
  * [walkthrough.md](file:///c:/Users/tatsu/OneDrive/デスクトップ/物件配信/inaka-akiya-hikitori/docs/fudosan_recycle_global_portal/walkthrough.md) (本ファイル)

---

## AIO ＆ SEO をさらに強化する今後の運用方針

今後、さらに検索順位（SEO）およびAIの回答参照元（AIO）としての評価を圧倒的に高めるため、以下の運用方針を推奨します。

### 1. AIO（AI要約最適化）方針
AI検索は「事実関係（ファクトデータ）」と「質問に対する網羅的で論理的な回答」を最優先で巡回し引用します。
* **事実に基づいたQ&A（FAQ）の継続的追加**:
  * ユーザーが抱く具体的な懸念（例：「農地の引き取り条件は？」「隣人と連絡が取れなくても境界調査は可能か？」等）に対する「一問一答」を、JSON-LD（`FAQPage`）とHTML本文の双方へ追加していきます。
* **客観的な記述の徹底**:
  * AIは広告的な誇張表現（「業界No.1」「日本一安い」等）を排除して要約を生成するため、「提携司法書士・調査士の有無」「具体的な手続き日数（最短7日〜）」「一回限りの費用項目」などを客観的な数値・固有名詞を交えて具体的に記述します。

### 2. SEO（検索エンジン最適化）方針
* **超・地域特化LP（サブディレクトリ）の横展開**:
  * `/kyoto/` の成功パターンを横展開し、準備中の `/wakayama/`（和歌山県紀美野町・有田川町など）、`/osaka/`（能勢町・豊能町など）のLPを構築。検索クエリ「地域名 ＋ 空き家 ＋ 処分（引き取り）」での局所的なSEO上位表示を狙います。
* **ページ読み込み速度（コアウェブバイタル）の維持**:
  * 不要なWebフォントを徹底的にインポート対象から除外し、Noto Sans JP 一本に抑えた現在の読み込み速度を維持します。画像アセット追加の際は必ず圧縮を行い、ファーストビュー以外の画像には `loading="lazy"` を付与してLCPを保護します。
