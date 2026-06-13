# タスクリスト：空き家引き取り専用サイトと山林引き取り専用サイトの分割

- [x] 1. 新規フォルダ構造 of 作成
  - [x] `akiya/` および `sanrin/` フォルダの作成
  - [x] 各フォルダ内に都道府県別のサブフォルダを作成 (`shiga`, `kyoto`, `osaka`, `hyogo`, `wakayama`)
- [x] 2. 既存ファイルの複製と配置
  - [x] ルートの `index.html` を `akiya/index.html` および `sanrin/index.html` にコピー
  - [x] 各都道府県フォルダの `index.html` を `akiya/*/index.html` および `sanrin/*/index.html` にコピー
- [x] 3. 空き家引き取り専用サイト (`akiya/`) のコンテンツとパスの調整
  - [x] 空き家総合TOP (`akiya/index.html`) の調整 (山林除外、相対パス等)
  - [x] 各都道府県ページ (`akiya/*/index.html`) の調整 (山林除外、相対パス等, フォーム物件種別)
- [x] 4. 山林引き取り専用サイト (`sanrin/`) のコンテンツとパスの調整
  - [x] 山林総合TOP (`sanrin/index.html`) の調整 (空き家除外、相対パス等)
  - [x] 各都道府県ページ (`sanrin/*/index.html`) の調整 (空き家除外、相対パス等, フォーム物件種別)
- [x] 5. ゲートウェイTOPページ (`index.html`) のリニューアル
  - [x] ルートの `index.html` を空き家/山林への分岐ページにリニューアル
- [x] 6. 動作検証
  - [x] リンク切れがないかの確認
  - [x] 表示・レイアウトが崩れていないかの確認
  - [x] フォームが動作するかの確認
