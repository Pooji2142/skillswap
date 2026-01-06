import { useState } from "react";
import { apiPost } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await apiPost("/api/auth/login", { email, password });

      if (!data || !data.token) {
        alert(data?.message || "❌ Login failed. Check credentials or backend URL");
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user?.name || "User");
      setToken(data.token);

      alert("✅ Login successful!");
      navigate("/");

    } catch (error) {
      console.error("Login error:", error);
      alert("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <div className="col-md-4 mx-auto mt-5">
      <h3 className="text-center text-primary mb-4">Login</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
