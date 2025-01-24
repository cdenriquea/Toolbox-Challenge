import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/files",
});

export const fetchData = async () => {
  try {
    const response = await apiClient.get("/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
