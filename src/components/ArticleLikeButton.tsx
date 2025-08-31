import { useState } from "react";
import { supabase } from "../utils/apiClient";

export default function ArticleLikeButton({ articleId, userId }) {
  const [liked, setLiked] = useState(false);

  async function handleLike() {
    await supabase.from("likes").insert([{ article_id: articleId, user_id: userId }]);
    setLiked(true);
  }

  return (
    <button
      className={`px-3 py-1 rounded ${liked ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"}`}
      onClick={handleLike}
      disabled={liked}
    >
      {liked ? "いいね済" : "いいね"}
    </button>
  );
}