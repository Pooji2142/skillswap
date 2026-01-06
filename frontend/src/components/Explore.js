import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../utils/api";

const Explore = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSkills = async () => {
    try {
      const data = await apiGet("/api/skills");
      setSkills(data || []);
    } catch (err) {
      console.error("Explore fetch error:", err.message);
      setSkills([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRequest = async (skillId) => {
    const message = prompt("Enter a short message for the teacher:");
    if (!message) return;

    try {
      const data = await apiPost("/api/requests", { skillId, message });
      alert(data?.message || "Request sent successfully!");
    } catch (err) {
      console.error("Request error:", err.message);
      alert("Failed to send request");
    }
  };

  useEffect(() => { fetchSkills(); }, []);

  if (loading) return <p className="text-center mt-4">Loading skills...</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Explore Skills</h2>
      {skills.length === 0 && <p>No skills found 🙁</p>}
      <div className="row">
        {skills.map((skill) => (
          <div className="col-md-4 mb-3" key={skill._id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{skill.skillName}</h5>
                <p>{skill.description}</p>
                <p><small>Level: {skill.level}</small></p>
                <p>👤 <small>{skill.user?.name} ({skill.user?.email})</small></p>
                <button className="btn btn-outline-success btn-sm" onClick={() => handleRequest(skill._id)}>
                  Request to Learn
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
