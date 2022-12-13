const { default: axios } = require("api/axios");

export const requestAuthRegiter = (data) => {
  return axios.post("/auth/register", { ...data });
};
export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", { ...data });
};

export const requestAuthFetchUser = (token) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
export const requestRefreshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    "Content-Type": "application/json",
    refreshToken: token,
  });
};
