import { useState, useEffect } from "react";
import { supabase } from "../utils/apiClient";

export default function ArticleComments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase
      .from("comments")
      .select("*")
      .eq("article_id", articleId)
      .order("created_at", { ascending: false })
      .then(({ data }) => setComments(data ?? []));
  }, [articleId]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await supabase.from("comments").insert([{ article_id: articleId, body }]);
    setBody("");
    setLoading(false);
    // 再読込
    const { data } = await supabase
      .from("comments")
      .select("*")
      .eq("article_id", articleId)
      .order("created_at", { ascending: false });
    setComments(data ?? []);
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2">コメント</h3>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded p-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="コメントを入力"
        />
        <button className="button-primary" disabled={loading}>
          投稿
        </button>
      </form>
      <ul className="space-y-2">
        {comments.map((c) => (
          <li key={c.id} className="bg-gray-100 rounded p-2 text-sm">
            {c.body}
            <span className="ml-2 text-gray-400">
              {new Date(c.created_at).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}