

import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../utils/api";


const Explore = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSkills = async () => {
    // const data = await apiGet("/skills");
    const data = await apiGet("/api/skills");

    setSkills(data || []);
    setLoading(false);
  };

  const handleRequest = async (skillId) => {
    const message = prompt("Enter a short message for the teacher:");
    if (!message) return;
const data = await apiPost("/api/requests", { skillId, message });
    alert(data.message || "Request sent successfully!");
  };

  useEffect(() => { fetchSkills(); }, []);

  if (loading) return <p>Loading skills...</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Explore Skills</h2>
      <div className="row">
        {skills.length === 0 && <p>No skills found 🙁</p>}
        {skills.map((skill) => (
          <div className="col-md-4 mb-3" key={skill._id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{skill.skillName}</h5>
                <p className="card-text">{skill.description}</p>
                <p><small>Level: {skill.level}</small></p>
                <p>
                  👤 <small>{skill.user?.name} ({skill.user?.email})</small>
                </p>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => handleRequest(skill._id)}
                >
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
