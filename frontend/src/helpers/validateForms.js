export const validateForms = (data) => {
  const errors = {};
  let state = true;

  const keys = Object.keys(data);
  keys.forEach((key) => {
    if (data[key] === "") {
      errors[key] = true;
      state = false;
    }
  });

  return { state, errors };
};
