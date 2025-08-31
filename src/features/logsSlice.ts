import { createSlice } from "@reduxjs/toolkit";

const logsSlice = createSlice({
  name: "logs",
  initialState: {
    list: [
      { id: 1, timestamp: "2025-08-30 12:41", user: "admin", action: "記事「○○」を作成" },
      { id: 2, timestamp: "2025-08-30 13:22", user: "admin", action: "求人「△△」を削除" }
      // ...本番はSupabaseから取得
    ],
  },
  reducers: {
    addLog(state, action) {
      state.list.unshift(action.payload);
    },
  },
});

export const { addLog } = logsSlice.actions;
export default logsSlice.reducer;