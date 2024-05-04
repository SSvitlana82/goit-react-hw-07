export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectfilters = (state) => {
  return state.filters.name;
};
