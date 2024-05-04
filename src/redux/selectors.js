import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectfilters = (state) => {
  return state.filters.name;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectfilters],
  (contacts, filters) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filters.toLowerCase().trim());
    });
  }
);
