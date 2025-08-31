export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function validatePassword(password: string): boolean {
  return password.length >= 8;
}
export function validateNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}