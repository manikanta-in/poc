export const getFilterRegex = inputValue => {
  return new RegExp(`^${inputValue.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')}`, 'i');
};
