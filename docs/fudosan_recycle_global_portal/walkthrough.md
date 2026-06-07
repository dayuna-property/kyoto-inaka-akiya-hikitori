# 負動産リサイクルセンター 訴求強化・仕様変更のウォークスルー

本ドキュメントでは、負動産リサイクルセンター（fudosan-recycle.com）の訴求力強化と行動ハードル低下を目的としたHP仕様アップデート（他社比較表、自動連携セクション、完全非対面3ステップ、提携バッジ）の反映結果を報告します。

## 変更概要

1. **メインビジュアルのアップデート**:
   * ヒーローセクションのサブコピーを「専属の司法書士・土地家屋調査士チームが最短1〜2週間であなたの名義から完全に切り離す」訴求に差し替えました。
   * 「提携司法書士・土地家屋調査士 連携済」バッジ（`.badge-onestop`）をヘッダーやヒーローエリア等に配置し、安心感を高めました。
2. **通常の不動産仲介（他社）との比較表（追加）**:
   * 「相談手配」「手続き期間」における当店（ワンストップ連携＆最短7日〜2週間）と通常の他社仲介（自分で個別調整＆3ヶ月〜1年以上）の違いを一目で比較できるテーブル（`.comparison-table`）を新規実装しました。
3. **あなたが動かなくていい理由（完全自動連携セクションの新設）**:
   * 相続登記や未登記案件などの面倒な手続きも専門家チームがダイレクトに調査・段取りを行い、ユーザーは書類を返送するだけで「待つだけ」であることを説明するセクションを新設しました。
4. **非対面3ステップへの移行**:
   * 面倒な手順を3つ（かんたん査定、高速セットアップ、最短7日〜で完了）にスリム化し、よりスピーディな引き取りイメージをユーザーに与えるように構成を変更しました。
5. **「無料相談」導線の強化**:
   * フォーム内の説明やLINEのCTA付近に、相続・境界問題について専門家チームへ無料相談を促す文言・バッジを追加し、敷居を下げました。

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

## 検証結果

### 1. 比較表のレスポンシブ動作
* `.comparison-table-wrapper` に `overflow-x: auto` を設定したことで、モバイル（スマートフォン）などの狭い画面幅でも比較表が崩れることなく、横スクロールで綺麗に表示されることを確認しました。

### 2. 自動連携セクション（`.alliance-section`）
* PCでは左右2カラムのカード型レイアウトで整然と表示され、モバイルでは1カラムに綺麗にフォールバックすることを確認しました。

### 3. 非対面3ステップの遷移
* 4ステップから3ステップに変更したことで、タイムラインおよびステップカードが全体のデザインバランスを維持したまま、すっきりと表示されることを確認しました。

### 4. 相互リンクとフォーム動作
* 各ページ（総合・京都）から相互遷移およびバッジ・無料相談の導線が意図通り機能し、かつ `script.js` 共通のフォーム送信およびモーダルの動作に影響を与えていないことを確認しました。
