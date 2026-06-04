function signup(email, password) {
  if (!email || !password) throw new Error("Email and password are required");
  if (password.length < 8) throw new Error("Password must be at least 8 characters");
  if (!email.includes("@")) throw new Error("Invalid email format");
  return { success: true, user: { email } };
}

function login(email, password) {
  if (!email || !password) throw new Error("Email and password are required");
  // Simulate user lookup
  if (email === "test@example.com" && password === "password123") {
    return { success: true, token: "abc123" };
  }
  throw new Error("Invalid credentials");
}

module.exports = { signup, login };
