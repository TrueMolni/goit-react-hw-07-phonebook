export const getAllContacts = ({ contacts }) => contacts.items;
export const getFilter = ({ filter }) => filter;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) return contacts.items;
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
    );
  });

  return result;
};
