import axios from "axios";

const backendURL = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Warehouses
export const POST_WAREHOUSE = (warehouse) =>
  axios.post(`${backendURL}/warehouses`, warehouse);
