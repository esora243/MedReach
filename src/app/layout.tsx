import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <Head>
        <title>MedReach | 医師・医療従事者のための総合情報サイト</title>
        <meta name="description" content="医療従事者のための最新情報・求人・譲渡・ブログ" />
        <meta property="og:title" content="MedReach" />
        <meta property="og:description" content="医療従事者のための最新情報・求人・譲渡・ブログ" />
        <meta property="og:image" content="/ogp/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>{children}</body>
    </html>
  );
}