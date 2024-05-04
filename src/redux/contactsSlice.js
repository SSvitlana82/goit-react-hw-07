import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const deleteContact = state.items.findIndex((contact) => {
        return contact.id === action.payload;
      });
      state.items.splice(deleteContact, 1);
    },
  },
});

const persistConfig = {
  key: "root",
  storage: storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
