export const loginPattern = {
  email: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
  password: '^.{6,}$',
};

export const lengthError = (target, length) => {
  return target + ' must have ' + length + 'characters';
};

export const validate = (e) => {};
