export const setItemLocal = (key, value) => {
  const stringJson = JSON.stringify(value);
  localStorage.setItem(key, stringJson);
};

export const getItemLocal = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
