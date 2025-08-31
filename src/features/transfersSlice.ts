import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../utils/apiClient";

export const fetchTransfers = createAsyncThunk(
  "transfers/fetchTransfers",
  async () => {
    const { data, error } = await supabase
      .from("transfers")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  }
);

export const deleteTransfer = createAsyncThunk(
  "transfers/deleteTransfer",
  async (id: string) => {
    const { error } = await supabase.from("transfers").delete().eq("id", id);
    if (error) throw error;
    return id;
  }
);

const transfersSlice = createSlice({
  name: "transfers",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransfers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchTransfers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransfers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteTransfer.fulfilled, (state, action) => {
        state.list = state.list.filter((t) => t.id !== action.payload);
      });
  },
});

export default transfersSlice.reducer;