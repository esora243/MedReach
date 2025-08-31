import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../utils/apiClient";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  }
);

export const deleteArticle = createAsyncThunk(
  "articles/deleteArticle",
  async (id: string) => {
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) throw error;
    return id;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.list = state.list.filter((a) => a.id !== action.payload);
      });
  },
});

export default articlesSlice.reducer;