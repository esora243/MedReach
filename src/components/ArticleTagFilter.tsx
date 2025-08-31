import { useState } from "react";

export default function ArticleTagFilter({ tags, selectedTags, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`px-3 py-1 rounded-full border ${selectedTags.includes(tag)
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700"
          }`}
          onClick={() =>
            onChange(
              selectedTags.includes(tag)
                ? selectedTags.filter((t) => t !== tag)
                : [...selectedTags, tag]
            )
          }
          type="button"
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}