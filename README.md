# next_js_found
## 対象講座
【2023年最新】React(v18)完全入門ガイド｜Hooks、Next.js、Redux、TypeScript<br>
https://www.udemy.com/course/react-complete-guide/

## NextJS プロジェクト作成
### create-next-app のインストール
```
npm i -g create-next-app
```
※g：PC全体にインストール
### プロジェクトの作成
```
create-next-app [プロジェクト名]
```
### プロジェクトの起動
```
npm run dev
```

## NextJS
### ルーティング
・pages 配下のファイルが対象<br>
・ファイル名やフォルダ名がそのままパスになる<br>
　→index.jsの場合はファイル名のしていなし（いつ上の階層のフォルダ名でアクセス可能）

### 動的ルーティング→ 動的なパスの生成
・ファイル名やフォルダ名を[****].jsや[****]とすると、使用可能<br>
・パスの上の階層で固定されている文字列が優先される<br>
・一つの階層に一つのみ設定可能

### 指定されたパスの値を取得
1. getSeverSideProps という関数を使用する<br>
2. RouterからuseRouterを使用する

### queryプロパティ
格納されている値は以下の２種類<br>
1. 動的ルーティングを使用しているパラメータ<br>
2. queryパラメータ→URLにある?以降のkey,valueの値<br>

### リライト
・router.push等で使用したダミーのURLに直接ユーザーがアクセスしたときにうまく処理する

### 状態の受け渡し
1. URLのクエリパラメータを使用する<br>
2. Contextを使用する<br>
　　→　_app.js内のComponentをProviderで囲む（Pageコンポーネントを呼び出す際に確実に実行されるため）

### _app.js
・pagesフォルダ配下のコンポーネントの前にMyAppという関数コンポーネントを通る<br>
　→サイト全体に適用させたいものはここで定義する

### Headコンポーネント
・headタグに相当する

### Scriptコンポーネント
・scriptタグに相当する
