import { contactReducer } from "./contactsSlice";
import { filtersReduser } from "./filtersSlice";
import { persistStore } from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReduser,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
