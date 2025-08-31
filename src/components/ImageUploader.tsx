import { useRef } from "react";
import { useImageUpload } from "../utils/useImageUpload";

export default function ImageUploader({ onUpload }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { uploading, url, error, uploadImage } = useImageUpload();

  function handleChange(e) {
    const file = e.target.files[0];
    if (file) uploadImage(file).then(() => onUpload(url));
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleChange}
      />
      <button
        type="button"
        className="button-primary"
        onClick={() => inputRef.current?.click()}
      >
        画像アップロード
      </button>
      {uploading && <span className="text-sm text-blue-600 ml-2">アップロード中...</span>}
      {url && <img src={url} alt="アップロード画像" className="mt-2 w-32 h-32 object-cover rounded" />}
      {error && <div className="text-red-600 text-sm">{error}</div>}
    </div>
  );
}