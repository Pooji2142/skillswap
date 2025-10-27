

import React from "react";

const Home = () => {
  const userName = localStorage.getItem("userName") || "";

  const containerStyle = {
    padding: "80px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    // backgroundColor: "#f0f8ff", // light friendly background
  };

  const headingStyle = {
    fontSize: "4rem",
    fontWeight: "800",
    textAlign: "center",
    color: "#e3edfaff", // bright blue
    marginBottom: "20px",
    textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
  };

  const subTextStyle = {
    fontSize: "1.8rem",
    textAlign: "center",
    color: "#fbfafaff",
    maxWidth: "600px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        {userName ? (
          <>
            {userName} <br />
            Welcome to SkillSwap!
          </>
        ) : (
          "Welcome to SkillSwap!"
        )}
      </h1>
      <p style={subTextStyle}>
        Learn new skills or teach others. <br></br>Share knowledge and grow together!
      </p>
    </div>
  );
};

export default Home;
