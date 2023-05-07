# Learn Denoflare R2

## 本リポジトリの目的
[Denoflare](https://denoflare.dev)を利用して[Cloudflare R2](https://developers.cloudflare.com/r2/)の読み込みと書き込みを行うAPIを作成する  
可能であれば[Hono](https://hono.dev)が適用できるかも確認する

## 本リポジトリの達成目標
GitHubで画像管理をしていた画像サーバーを、外部からアクセス可能な状態にできる

## タスクリスト
- [x] ローカル実行成功
- [ ] リモート実行成功
- [ ] R2読み込み成功
- [ ] R2書き込み成功
- [ ] Hono置き換え

## 参考資料
- [denoflare r2 · Denoflare](https://denoflare.dev/cli/r2)
- [denoflare/examples/r2-public-read-worker at master · skymethod/denoflare · GitHub](https://github.com/skymethod/denoflare/tree/master/examples/r2-public-read-worker)
- [Denoflareを使ってCloudflare WorkersをTypescriptで実装する](https://dev.classmethod.jp/articles/quickstart-denoflare/)
- [Deno で、Cloudflare Workers やってみる | Octo's blog](https://www.ccbaxy.xyz/blog/2022/06/25/js51/)
- [CloudFront+S3構成だった自分のサイトをCloudflare+R2に移行した](https://blog.3qe.us/entry/2023/01/15/015921)
