# fib_api

指定した n 番目のフィボナッチ数を返す REST API です。

## 環境構築

```shell
git clone https://github.com/masa-massara/fib_api.git
npm i
```

## 使用方法

コンパイルの方法

```shell
npx tsc
```

サーバの立ち上げの方法

```shell
npm run dev
```

ユニットテストの方法

```shell
npm run dev
```

サーバの立ち上げポートの変更方法
```shell
.envファイルを作成し
PORT = 〇〇(任意のポート番号)
としてください
```


## Commit message

```shell
feat: 新しい機能
fix: バグの修正
docs: ドキュメントのみの変更
style: 空白、フォーマット、セミコロン追加など
refactor: 仕様に影響がないコード改善(リファクタ)
perf: パフォーマンス向上関連
test: テスト関連
chore: ビルド、補助ツール、ライブラリ関連
```

```shell
feat: 〇〇なため、△△を追加
ex) 記事の分類ができないため、タグ機能を追加
```
