export const validators = {
  email: (value) => /^\S+@\S+\.\S+$/.test(value),
  minLength: (value, min = 8) => value?.length >= min,
  required: (value) => value?.trim().length > 0,
}
