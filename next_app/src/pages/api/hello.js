// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://localhost:3000/hello
// req：リクエスト
// res: レスポンス
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
