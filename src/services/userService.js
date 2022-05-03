import axios from "../axios";

export default function handleLogin(email, password) {
    return axios.post("/api/login", { email, password });
}