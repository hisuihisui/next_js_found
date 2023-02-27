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
### プロジェクト構成
・/pages <br>
　ファイルまでのパスがそのままページになる<br>
・/styles<br>
　グローバルに適用されるスタイルを配置<br>
・/pages/_app.js<br>
　ページ遷移時に必ず呼ばれる処理を記述<br>
・next.config.js<br>
　Next.jsの設定を記載<br>

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

### レンダリング
1. CSR クライアントサイドレンダリング<br>
　・データフェッチやルーティング等すべてをブラウザ上で実行する<br>
　・Reactで主に用いられる<br>
　　→NextJSではあまり使用されない<br>
　・NextJSでクライアント側でのみ行いたい処理はuseEffectで囲む<br>
　・メリット<br>
　　・静的ファイルの配置のみで動く<br>
　　・Node.jsの実行は必要ないため、サーバーの負荷が軽い<br>
　・デメリット<br>
　　・初期描画までに時間がかかる<br>
　　・クローラーによってはSEO的な問題がある<br>
2. SSR サーバーサイドレンダリング<br>
　・Node.jsにリクエストが来たタイミングで動的にHTMLを生成<br>
　・外部APIへのデータの取得やコンポーネントのpropsの値を決定する処理を行い、HTMLを作成してクライアント側に返す<br>
　・メリット<br>
　　・生成済みのHTMLを取得するのでSEOに強い<br>
　・デメリット<br>
　　・生成処理をすべてサーバー側でするので負担大<br>
　　・HTMLをクライアントに渡すまで時間がかかる<br>
3. SG  静的サイト作成<br>
　・ビルド時にデータフェッチやpropsの値の決定を行い、HTMLを構築する<br>
　・クライアントからのリクエストが来たら、サーバー側で構築することなく、生成済みのHTMLを渡す<br>
　・メリット<br>
　　・構築済みページのため表示速度が速く、SEOも問題ない<br>
　・デメリット<br>
　　・更新頻度が高い動的コンテンツとの相性が悪い<br>
4. ISR インクリメンタル静的再生成<br>
　・ビルド時にHTMLを構築<br>
　・一定時間後にアクセスがあった場合、生成済みのHTMLを返しつつ、サーバー側でHTMLを更新する<br>
　・次のアクセス時には最新のHTMLを返す<br>
　・メリット<br>
　　・SGを利用しながら動的なコンテンツも更新できる<br>
　・デメリット<br>
　　・サーバーの設定が少し手間<br>
　　・基本はNextJSの開発元のVercelを使う

### 基本のレンダリング構成
基本的なページはSG、動的に作成する必要があるページはSSRを用いる<br>

### 画面遷移時の挙動
・他のページから遷移してきた場合、CSRとなりブラウザ上で関数が実行される<br>
・URLに直接アクセスや画面リロードの場合はSSRとなる

### ビルド
```
npm run build
```
・getServerSidePropsがあるファイルはSSRでビルドされる<br>
　→その他はSG??

### SG
・exportを使用する<br>
　→package.json にexportを登録する
```
// ビルド→エクスポート
npm run build
npm run export
```
※getServerSidePropsがあると、exportできない<br>
・直列でコマンドを実行するには
```
npm i -D npm-run-all
```
↓
```
// package.json
    "next:export": "next export",
    "export": "run-s build next:export"
```
↓
```
npm run export
```
