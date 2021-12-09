import axios from "axios";

const apiBase = axios.create({
  baseURL: "https://kenzie-habits.herokuapp.com/",
});

export default apiBase;
