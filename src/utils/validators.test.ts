import { validateEmail, validatePassword } from "./validators";

describe("validators", () => {
  it("validates email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("bademail")).toBe(false);
  });
  it("validates password", () => {
    expect(validatePassword("12345678")).toBe(true);
    expect(validatePassword("short")).toBe(false);
  });
});