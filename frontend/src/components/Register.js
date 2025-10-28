import { useState } from "react";
import { apiPost } from "../utils/api";

const Register = ({ setToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  // Password strength validation
  const checkPasswordStrength = (pwd) => {
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (pwd.length < 8) return "Too short";
    if (!/[A-Z]/.test(pwd)) return "Add uppercase letter";
    if (!/[a-z]/.test(pwd)) return "Add lowercase letter";
    if (!/\d/.test(pwd)) return "Add a number";
    if (!/[@$!%*?&]/.test(pwd)) return "Add special character";
    if (!strongRegex.test(pwd)) return "Weak";
    return "Strong";
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkPasswordStrength(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Recheck password before sending
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    try {
      // ✅ Corrected endpoint: /api/auth/register
      const data = await apiPost("/api/auth/register", { name, email, password });

      console.log("Backend response:", data); // Debug log

      if (data.user) {
        alert("✅ Registration successful! Please log in.");
        setName("");
        setEmail("");
        setPassword("");
        setStrength("");
      } else {
        alert(data.message || "❌ Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("❌ Something went wrong. Try again later.");
    }
  };

  // UI
  return (
    <div className="col-md-4 mx-auto mt-5">
      <h3 className="text-center text-primary mb-4">Register</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <input
          type="text"
          placeholder="Full Name"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        {/* Password Strength Indicator */}
        {password && (
          <div
            style={{
              fontSize: "0.9rem",
              color:
                strength === "Strong"
                  ? "green"
                  : strength === "Too short"
                  ? "red"
                  : "orange",
              marginBottom: "10px",
            }}
          >
            Password strength: {strength}
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100 mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
