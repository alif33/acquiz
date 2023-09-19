import axios from "axios";
import { toast } from "react-hot-toast";

const api = axios.create({
  baseURL: "/api",
});

const Http = async(method, endPoint, formData, token) => {
    try {
        const __f__ = formData? formData: {}
        const headers = token ? {
          Authorization: `Bearer token`,
          "Content-Type": "application/json",
        } : {};
        const { data } = await api[method](endPoint, __f__, { headers });
        return data;
    } catch (error) {
        toast.error(`${error?.response?.data?.message}`);
        return error;
    }
};

export default Http;