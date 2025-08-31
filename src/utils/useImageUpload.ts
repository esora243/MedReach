import { useState } from "react";
import { supabase } from "./apiClient";

export function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  async function uploadImage(file: File) {
    setUploading(true);
    setError("");
    const filename = Date.now() + "_" + file.name;
    const { error } = await supabase.storage
      .from("images")
      .upload(filename, file);
    if (error) {
      setError(error.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from("images").getPublicUrl(filename);
    setUrl(data.publicUrl);
    setUploading(false);
  }

  return { uploading, url, error, uploadImage };
}