

import { useState, useEffect } from "react";
import { apiGet, apiPut } from "../utils/api";

const ReceivedRequests = () => {
  const [requests, setRequests] = useState([]);
  const [inputs, setInputs] = useState({}); // message/meetingLink per request

  const fetchReceivedRequests = async () => {
    const data = await apiGet("/requests/received");
    setRequests(data);
  };

  useEffect(() => {
    fetchReceivedRequests();
  }, []);

  const handleChange = (id, field, value) => {
    setInputs(prev => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const handleUpdate = async (id) => {
    const update = inputs[id];
    if (!update) return alert("Enter a message or meeting link");
    await apiPut(`/requests/${id}`, update);
    alert("Updated successfully");
    fetchReceivedRequests();
  };

  return (
    <div>
      <h2>Received Requests</h2>
      <ul>
        {requests.map(r => (
          <li key={r._id}>
            <strong>{r.skill.skillName}</strong> requested by {r.learner.name} ({r.learner.email})<br />
            <input
              placeholder="Message"
              value={inputs[r._id]?.message || ""}
              onChange={(e) => handleChange(r._id, "message", e.target.value)}
            />
            <input
              placeholder="Meeting Link"
              value={inputs[r._id]?.meetingLink || ""}
              onChange={(e) => handleChange(r._id, "meetingLink", e.target.value)}
            />
            <button onClick={() => handleUpdate(r._id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceivedRequests;
