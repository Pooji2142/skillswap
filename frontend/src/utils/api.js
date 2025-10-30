// frontend/src/utils/api.js
const API_URL = process.env.REACT_APP_API_URL;
export const getToken = () => localStorage.getItem("token");

// Helper for error handling
const handleResponse = async (res, endpoint, method) => {
  if (!res.ok) {
    const msg = await res.text();
    console.error(`❌ ${method} ${endpoint} failed:`, msg);
    throw new Error(`${method} ${endpoint} failed: ${msg}`);
  }
  return res.json();
};

// GET
export const apiGet = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return handleResponse(res, endpoint, "GET");
};

// POST
export const apiPost = async (endpoint, body) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  });
  return handleResponse(res, endpoint, "POST");
};

// PUT
export const apiPut = async (endpoint, body) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  });
  return handleResponse(res, endpoint, "PUT");
};

// DELETE
export const apiDelete = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return handleResponse(res, endpoint, "DELETE");
};
