import axios from "axios";

const API_URL = "https://fakestoreapi.com/";

export const getStoreItems = async () => {
    const res = await axios.get(`${API_URL}products`);
    if (!res.status === 200) throw Error('Failed to fetch data.');

    return res.data;
}

export const getSingleItem = async (id) => {
    const res = await axios.get(`${API_URL}products/${id}`);
    if (!res.status === 200) throw Error('Failed to fetch data.');

    return res.data;
}

export const getCategories = async () => {
    const res = await axios.get(`${API_URL}products/categories`);
    if (!res.status === 200) throw Error('Failed to fetch data.');

    return res.data;
}

export const getCart = async (id) => {
    const res = await axios.get(`${API_URL}carts/${id}`);
    if (!res.status === 200) throw Error('Failed to fetch data.');

    return res.data;
}

export const getCarts = async () => {
    const res = await axios.get(`${API_URL}carts`);
    if (!res.status === 200) throw Error('Failed to fetch data.');

    return res.data;
}

