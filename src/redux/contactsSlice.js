import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
import { addContact } from "./contactsOps";
import { deleteContact } from "./contactsOps";
import { createSelector } from "@reduxjs/toolkit";
const fetchIsLoading = (state) => {
  state.isLoading = true;
};
const fetchError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: fetchIsLoading,
    [fetchContacts.rejected]: fetchError,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.pending]: fetchIsLoading,
    [addContact.rejected]: fetchError,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.pending]: fetchIsLoading,
    [deleteContact.rejected]: fetchError,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const deleteContact = state.items.findIndex((contact) => {
        return contact.id === action.payload;
      });
      state.items.splice(deleteContact, 1);
    },
  },
});

export const contactReducer = contactsSlice.reducer;
