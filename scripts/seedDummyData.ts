import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

async function seedArticles() {
  for (let i = 1; i <= 20; i++) {
    await supabase.from("articles").insert([
      {
        title: `ダミー記事${i}`,
        summary: `これはダミー記事${i}の概要です。`,
        body: `<p>これはダミー記事${i}の本文です。</p>`,
        tags: ["テスト", "サンプル"],
        status: "public",
        author: "admin",
        created_at: new Date().toISOString(),
      },
    ]);
  }
  console.log("ダミー記事挿入完了");
}

seedArticles();