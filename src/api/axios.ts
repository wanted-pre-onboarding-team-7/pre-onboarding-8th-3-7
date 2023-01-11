import axiosClient from "../cache/axiosClient";

const baseUrl:string = "http://localhost:4000";
const client = new axiosClient(baseUrl)

export const getResult = (keyword:string) => client.get(`/sick?q=${keyword}`)