import axios from "axios";
export const getDataAPI = async (url, token) => {
  const res = await axios.get(`http://localhost:8000/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`http://localhost:8000/api/${url}`, post, {
    headers: { Authorization: token },
    withCredentials: true,
  });

  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`http://localhost:8000/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`http://localhost:8000/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`http://localhost:8000/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};
