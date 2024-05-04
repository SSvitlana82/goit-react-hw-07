import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
import { addContact } from "./contactsOps";
import { deleteContact } from "./contactsOps";
/* import { createSelector } from "@reduxjs/toolkit"; */
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, fetchIsLoading)
      .addCase(fetchContacts.rejected, fetchError)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.pending, fetchIsLoading)
      .addCase(addContact.rejected, fetchError)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.pending, fetchIsLoading)
      .addCase(deleteContact.rejected, fetchError)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const deleteContact = state.items.findIndex((contact) => {
          return contact.id === action.payload.id;
        });

        state.items.splice(deleteContact, 1);
      });
  },
});

export const contactReducer = contactsSlice.reducer;
