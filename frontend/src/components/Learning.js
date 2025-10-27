import { useEffect, useState } from "react";
import { apiGet, apiPut } from "../utils/api";
import ChatBox from "./ChatBox";

const Learning = () => {
  const [sent, setSent] = useState([]);
  const [received, setReceived] = useState([]);
  const [meetingTime, setMeetingTime] = useState("");
  const [teacherContactInfo, setTeacherContactInfo] = useState("");

  const fetchRequests = async () => {
    const sentData = await apiGet("/requests/sent");
    const receivedData = await apiGet("/requests/received");
    setSent(sentData || []);
    setReceived(receivedData || []);
  };

  const handleAction = async (id, status) => {
    const body = { status };
    if (status === "approved") {
      const link = prompt("Enter meeting link (optional):");
      if (link) body.meetingLink = link;
      if (meetingTime) body.meetingTime = meetingTime;
      if (teacherContactInfo) body.teacherContactInfo = teacherContactInfo;
    }
    await apiPut(`/requests/${id}`, body);
    alert(`Request ${status}`);
    setMeetingTime("");
    setTeacherContactInfo("");
    fetchRequests();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary">Learning Dashboard</h2>

      {/* Sent Requests */}
      <section className="mt-4">
        <h4>📤 Sent Requests</h4>
        {sent.length === 0 ? (
          <p>No requests sent yet.</p>
        ) : (
          <ul className="list-group">
            {sent.map((r) => (
              <li key={r._id} className="list-group-item">
                To <strong>{r.teacher?.name}</strong> – Skill: {r.skill?.skillName}{" "}
                <span
                  className={`badge bg-${
                    r.status === "approved"
                      ? "success"
                      : r.status === "rejected"
                      ? "danger"
                      : "warning"
                  } ms-2`}
                >
                  {r.status}
                </span>
                {r.status === "approved" && <ChatBox requestId={r._id} />}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Received Requests */}
      <section className="mt-5">
        <h4>📥 Received Requests</h4>
        {received.length === 0 ? (
          <p>No requests received.</p>
        ) : (
          <ul className="list-group">
            {received.map((r) => (
              <li key={r._id} className="list-group-item">
                From <strong>{r.learner?.name}</strong> – Skill: {r.skill?.skillName}
                <p className="mt-2">{r.message}</p>
                <div>
                  Status:{" "}
                  <span
                    className={`badge bg-${
                      r.status === "approved"
                        ? "success"
                        : r.status === "rejected"
                        ? "danger"
                        : "warning"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>

                {r.status === "pending" && (
                  <div className="mt-2">
                    <input
                      type="datetime-local"
                      className="form-control mb-2"
                      value={meetingTime}
                      onChange={(e) => setMeetingTime(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Enter your contact info"
                      className="form-control mb-2"
                      value={teacherContactInfo}
                      onChange={(e) => setTeacherContactInfo(e.target.value)}
                    />
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => handleAction(r._id, "approved")}
                      disabled={!meetingTime}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleAction(r._id, "rejected")}
                    >
                      Reject
                    </button>
                  </div>
                )}

                {r.status === "approved" && <ChatBox requestId={r._id} />}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Learning;
