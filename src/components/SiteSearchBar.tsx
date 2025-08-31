import { useState } from "react";

export default function SiteSearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(q);
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        className="flex-1 border p-2 rounded"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="記事・求人・譲渡を検索"
      />
      <button className="button-primary">検索</button>
    </form>
  );
}