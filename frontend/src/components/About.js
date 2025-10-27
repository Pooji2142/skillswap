// const About = () => {
//   return (
//     <div className="mt-4">
//       <h2>About SkillSwap</h2>
//       <p>SkillSwap is a platform where you can share your skills, learn new ones, and connect with others in a collaborative environment.</p>
//       <p>Features:</p>
//       <ul>
//         <li>Add and manage your skills.</li>
//         <li>Explore skills shared by others.</li>
//         <li>Send learning requests and track responses.</li>
//         <li>Interactive dashboard for learners and teachers.</li>
//       </ul>
//     </div>
//   );
// };

// export default About;

const About = () => {
  return (
    <div style={{ maxWidth: 720, margin: "3rem auto", padding: "0 1rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#f0f2f4ff", lineHeight: 1.6 }}>
      <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>About SkillSwap</h2>
      <p style={{ fontSize: "1.125rem" }}>
        SkillSwap is a platform where you can share your skills, learn new ones, and connect with others in a collaborative environment.
      </p>
      <p style={{ fontSize: "1.125rem", marginTop: "2rem", fontWeight: 600 }}>Features:</p>
      <ul style={{ fontSize: "1.125rem", paddingLeft: "1.25rem", listStyleType: "disc" }}>
        <li>Add and manage your skills.</li>
        <li>Explore skills shared by others.</li>
        <li>Send learning requests and track responses.</li>
        <li>Interactive dashboard for learners and teachers.</li>
      </ul>
      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#f4f5f6ff", textAlign: "center" }}>
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
