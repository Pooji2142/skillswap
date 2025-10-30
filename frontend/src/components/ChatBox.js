import { useEffect, useState, useCallback, useRef } from "react";
import { apiGet, apiPost } from "../utils/api";

const ChatBox = ({ requestId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const chatEndRef = useRef(null);



  const fetchMessages = useCallback(async () => {
    const data = await apiGet(`/api/messages/${requestId}`);
    setMessages(data);
  }, [requestId]);

  const sendMessage = async () => {
    if (!text.trim()) return;
    await apiPost(`/api/messages/${requestId}`, { text });
    setText("");
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000); // auto-refresh
    return () => clearInterval(interval);
  }, [fetchMessages]);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const userId = JSON.parse(
    atob(localStorage.getItem("token").split(".")[1])
  ).id;

  return (
    <div className="card mt-3 p-3">
      <h5>💬 Chat</h5>
      <div
        style={{
          maxHeight: "250px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "8px",
        }}
      >
        {messages.length === 0 ? (
          <p className="text-muted">No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={`mb-2 ${
                msg.sender?._id === userId ? "text-end" : "text-start"
              }`}
            >
              <strong>{msg.sender?.name || "User"}:</strong> {msg.text}
            </div>
          ))
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="d-flex mt-2">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
