import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000';

//TODO add crud operations for instances from backend

export const getCategory = async (name) => {
    const res = await axios.get(`/category/${name}`)
    return res.data
}

//...continue
