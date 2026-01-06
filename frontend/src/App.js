import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import MySkills from "./components/MySkills";
import Explore from "./components/Explore";
import Learning from "./components/Learning";
import Home from "./components/Home";
import About from "./components/About";
import bg from "./assets/images/bg.jpg";

function App() {
  const [token, setToken] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  // ✅ stabilize token on first load
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
    setAuthReady(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setToken(null);
  };

  if (!authReady) {
    return (
      <div className="text-center mt-5">
        <h5>Loading...</h5>
      </div>
    );
  }

  const wrapperStyle = {
    minHeight: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    color: "#fff",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    minHeight: "100vh",
  };

  return (
    <Router>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
      >
        <div className="container">
          <Link className="navbar-brand fw-bold text-dark" to="/">
            SkillSwap
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark" to="/about">
                  About
                </Link>
              </li>

              {token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/my-skills">
                      My Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/explore">
                      Explore
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/learning">
                      Learning
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <ul className="navbar-nav ms-auto">
              {!token ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn btn-outline-dark btn-sm fw-bold"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div style={wrapperStyle}>
        <div style={overlayStyle}>
          <div style={{ paddingTop: "70px" }} className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route
                path="/login"
                element={!token ? <Login setToken={setToken} /> : <Navigate to="/my-skills" />}
              />
              <Route
                path="/register"
                element={!token ? <Register setToken={setToken} /> : <Navigate to="/my-skills" />}
              />

              <Route
                path="/my-skills"
                element={token ? <MySkills /> : <Navigate to="/login" />}
              />
              <Route
                path="/explore"
                element={token ? <Explore /> : <Navigate to="/login" />}
              />
              <Route
                path="/learning"
                element={token ? <Learning /> : <Navigate to="/login" />}
              />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
