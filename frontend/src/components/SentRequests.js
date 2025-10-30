

import { useState, useEffect } from "react";
import { apiGet } from "../utils/api";

const SentRequests = () => {
  const [requests, setRequests] = useState([]);

  const fetchSentRequests = async () => {
    // const data = await apiGet("/requests/sent");
    const data = await apiGet("/api/requests/sent");

    setRequests(data);
  };

  useEffect(() => {
    fetchSentRequests();
  }, []);

  return (
    <div>
      <h2>Sent Requests</h2>
      <ul>
        {requests.map((r) => (
          <li key={r._id}>
            <strong>{r.skill.skillName}</strong> to {r.teacher.name} ({r.teacher.email})<br />
            Message: {r.message}<br />
            Meeting Link: {r.meetingLink || "Not provided yet"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SentRequests;
