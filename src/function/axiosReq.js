import axios from "axios";

const API = axios.create({
  baseURL: "https://backend.doubtconnect.in",
});

export const getBlog = async () => {
  let res = await API.get("/blogs/");
  return res;
};

export const getSingleBlog = async (id) => {
  let res = await API.get(`/blogs/blog/${id}`);
  return res;
};

export const getCategories = async () => {
  let res = await API.get(`/blogs/categories`);
  return res;
};




export const setFilterCategory = async (pBody) => {
  let res = await API.post(`/blogs/filter`, pBody);
  return res;
};

