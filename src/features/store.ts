import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articlesSlice";
import jobsReducer from "./jobsSlice";
import transfersReducer from "./transfersSlice";
import usersReducer from "./usersSlice";
import logsReducer from "./logsSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    jobs: jobsReducer,
    transfers: transfersReducer,
    users: usersReducer,
    logs: logsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;