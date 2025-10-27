import { useState } from "react";
import { apiPost } from "../utils/api";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await apiPost("/auth/login", { email, password });

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user.name); // store the name
      setToken(data.token);
      alert("Login successful!");
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div className="col-md-4 mx-auto mt-5">
      <h3 className="text-center text-primary">Login</h3>
      <form onSubmit={handleSubmit}>
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
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
