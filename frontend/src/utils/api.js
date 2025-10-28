// api.js
const API_URL ="https://skillswap-backend-0fuf.onrender.com";

export const getToken = () => localStorage.getItem("token");

export const apiGet = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error(`GET ${endpoint} failed`);
  return res.json();
};

export const apiPost = async (endpoint, body) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${endpoint} failed`);
  return res.json();
};

export const apiPut = async (endpoint, body) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`PUT ${endpoint} failed`);
  return res.json();
};

export const apiDelete = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error(`DELETE ${endpoint} failed`);
  return res.json();
};
