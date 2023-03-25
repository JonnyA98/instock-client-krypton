import axios from "axios";

const backendURL = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Warehouses
export const GET_WAREHOUSES = () => axios.get(`${backendURL}/warehouses`);

export const GET_A_WAREHOUSE = (warehouseId) =>
  axios.get(`${backendURL}/warehouses/${warehouseId}`);

export const GET_WAREHOUSE_INVENTORY = (warehouseId) =>
  axios.get(`${backendURL}/warehouses/${warehouseId}/inventories`);

export const POST_WAREHOUSE = (warehouse) =>
  axios.post(`${backendURL}/warehouses`, warehouse);

export const PUT_WAREHOUSE = (warehouseId, warehouse) =>
  axios.put(`${backendURL}/warehouses/${warehouseId}`, warehouse);

export const DELETE_WAREHOUSE = (warehouse) =>
  axios.delete(`${backendURL}/warehouses/${warehouse.id}`);

//Inventories

export const GET_INVENTORY_ALL = () => axios.get(`${backendURL}/inventories/`);

export const GET_INVENTORY_ITEM = (stockId) =>
  axios.get(`${backendURL}/inventories/${stockId}`);

export const PUT_INVENTORY_ITEM = (itemId, newItem) =>
  axios.put(`${backendURL}/inventories/${itemId}`, newItem);

export const DELETE_INVENTORY_ITEM = (item) =>
  axios.delete(`${backendURL}/inventories/${item.id}`);
