

// // src/App.js
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import { useState } from "react";

// import Login from "./components/Login";
// import Register from "./components/Register";
// import MySkills from "./components/MySkills";
// import Explore from "./components/Explore";
// import Learning from "./components/Learning";
// import Home from "./components/Home";
// import About from "./components/About";

// function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName"); // clear username too
//     setToken(null);
//   };

//   return (
//     <Router>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//         <div className="container">
//           <Link className="navbar-brand fw-bold" to="/">SkillSwap</Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <Link className="nav-link fw-bold" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link fw-bold" to="/about">About</Link>
//               </li>
//               {token && (
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link fw-bold" to="/my-skills">My Skills</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link fw-bold" to="/explore">Explore</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link fw-bold" to="/learning">Learning</Link>
//                   </li>
//                 </>
//               )}
//             </ul>

//             <ul className="navbar-nav ms-auto">
//               {!token ? (
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link fw-bold" to="/login">Login</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link fw-bold" to="/register">Register</Link>
//                   </li>
//                 </>
//               ) : (
//                 <li className="nav-item">
//                   <button
//                     className="btn btn-light btn-sm fw-bold"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route
//             path="/login"
//             element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/register"
//             element={!token ? <Register setToken={setToken} /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/my-skills"
//             element={token ? <MySkills /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/explore"
//             element={token ? <Explore /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/learning"
//             element={token ? <Learning /> : <Navigate to="/login" />}
//           />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// // src/App.js
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import { useState } from "react";

// import Login from "./components/Login";
// import Register from "./components/Register";
// import MySkills from "./components/MySkills";
// import Explore from "./components/Explore";
// import Learning from "./components/Learning";
// import Home from "./components/Home";
// import About from "./components/About";
// import bg from "./assets/images/bg.jpg"; // background image import

// function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     setToken(null);
//   };

//   const backgroundStyle = {
//     backgroundImage: `url(${bg})`,
//     backgroundSize: "contain",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundAttachment: "fixed", // keeps background fixed on scroll
//     minHeight: "100vh",
//     color: "#fff",
//   };

//   const overlayStyle = {
//     backgroundColor: "rgba(0, 0, 0, 0.6)",
//     minHeight: "100vh",
//   };

//   return (
//     <div style={backgroundStyle}>
//       <div style={overlayStyle}>
//         <Router>
//           <nav
//             className="navbar navbar-expand-lg navbar-light fixed-top"
//             style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
//           >
//             <div className="container">
//               <Link className="navbar-brand fw-bold text-dark" to="/">
//                 SkillSwap
//               </Link>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>

//               <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav me-auto">
//                   <li className="nav-item">
//                     <Link className="nav-link fw-bold text-dark" to="/">
//                       Home
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link fw-bold text-dark" to="/about">
//                       About
//                     </Link>
//                   </li>
//                   {token && (
//                     <>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link fw-bold text-dark"
//                           to="/my-skills"
//                         >
//                           My Skills
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link fw-bold text-dark"
//                           to="/explore"
//                         >
//                           Explore
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link fw-bold text-dark"
//                           to="/learning"
//                         >
//                           Learning
//                         </Link>
//                       </li>
//                     </>
//                   )}
//                 </ul>

//                 <ul className="navbar-nav ms-auto">
//                   {!token ? (
//                     <>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link fw-bold text-dark"
//                           to="/login"
//                         >
//                           Login
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link fw-bold text-dark"
//                           to="/register"
//                         >
//                           Register
//                         </Link>
//                       </li>
//                     </>
//                   ) : (
//                     <li className="nav-item">
//                       <button
//                         className="btn btn-outline-dark btn-sm fw-bold"
//                         onClick={handleLogout}
//                       >
//                         Logout
//                       </button>
//                     </li>
//                   )}
//                 </ul>
//               </div>
//             </div>
//           </nav>

//           {/* Add spacing for fixed navbar */}
//           <div style={{ paddingTop: "70px" }} className="container mt-4">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route
//                 path="/login"
//                 element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />}
//               />
//               <Route
//                 path="/register"
//                 element={!token ? <Register setToken={setToken} /> : <Navigate to="/" />}
//               />
//               <Route
//                 path="/my-skills"
//                 element={token ? <MySkills /> : <Navigate to="/login" />}
//               />
//               <Route
//                 path="/explore"
//                 element={token ? <Explore /> : <Navigate to="/login" />}
//               />
//               <Route
//                 path="/learning"
//                 element={token ? <Learning /> : <Navigate to="/login" />}
//               />
//               <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//           </div>
//         </Router>
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import MySkills from "./components/MySkills";
import Explore from "./components/Explore";
import Learning from "./components/Learning";
import Home from "./components/Home";
import About from "./components/About";
import bg from "./assets/images/bg.jpg"; // background image import

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setToken(null);
  };

  // No backgroundStyle on the outermost div
  const wrapperStyle = {
    minHeight: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover", // Better for a full-page look
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
        style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
      >
        <div className="container">
          <Link className="navbar-brand fw-bold text-dark" to="/">
            SkillSwap
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
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
                    <Link
                      className="nav-link fw-bold text-dark"
                      to="/my-skills"
                    >
                      My Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link fw-bold text-dark"
                      to="/explore"
                    >
                      Explore
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link fw-bold text-dark"
                      to="/learning"
                    >
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
                    <Link
                      className="nav-link fw-bold text-dark"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link fw-bold text-dark"
                      to="/register"
                    >
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

      {/* The background image is set here, just below the navbar */}
      <div style={wrapperStyle}>
        <div style={overlayStyle}>
          {/* Add spacing for fixed navbar */}
          <div style={{ paddingTop: "70px" }} className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/login"
                element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!token ? <Register setToken={setToken} /> : <Navigate to="/" />}
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
