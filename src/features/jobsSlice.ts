import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../utils/apiClient";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async () => {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  }
);

export const deleteJob = createAsyncThunk(
  "jobs/deleteJob",
  async (id: string) => {
    const { error } = await supabase.from("jobs").delete().eq("id", id);
    if (error) throw error;
    return id;
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.list = state.list.filter((j) => j.id !== action.payload);
      });
  },
});

export default jobsSlice.reducer;