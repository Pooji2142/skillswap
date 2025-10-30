import { useState, useEffect } from "react";
import { apiGet, apiPost, apiPut, apiDelete } from "../utils/api";

const MySkills = () => {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ skillName: "", description: "", level: "" });
  const [editing, setEditing] = useState(null);

  const fetchSkills = async () => {
    const data = await apiGet("/api/skills/my");
    setSkills(data || []);
  };

  useEffect(() => { fetchSkills(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      // ✅ fixed: added /api/
      await apiPut(`/api/skills/${editing._id}`, form);
      setEditing(null);
    } else {
      // ✅ fixed: added /api/
      await apiPost("/api/skills", form);
    }
    setForm({ skillName: "", description: "", level: "" });
    fetchSkills();
  };

  const handleEdit = (s) => setEditing(s) || setForm(s);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this skill?")) {
      // ✅ fixed: added /api/
      await apiDelete(`/api/skills/${id}`);
      fetchSkills();
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-primary mb-4">My Skills</h2>

      <form className="row g-2 mb-4" onSubmit={handleSubmit}>
        <div className="col-md-3">
          <input
            placeholder="Skill Name"
            className="form-control"
            value={form.skillName}
            onChange={(e) => setForm({ ...form, skillName: e.target.value })}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            placeholder="Description"
            className="form-control"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <input
            placeholder="Level"
            className="form-control"
            value={form.level}
            onChange={(e) => setForm({ ...form, level: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary w-100" type="submit">
            {editing ? "Update Skill" : "Add Skill"}
          </button>
        </div>
      </form>

      <div className="row">
        {skills.map((s) => (
          <div className="col-md-4 mb-3" key={s._id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{s.skillName}</h5>
                <p>{s.description}</p>
                <small className="text-muted">{s.level}</small>
                <div className="mt-2">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(s)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(s._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
