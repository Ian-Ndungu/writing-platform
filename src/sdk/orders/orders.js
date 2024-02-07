import { client } from "../client/client";

export const getServices = async () => {
  const response = await client.get("/order-types");

  return response;
};

export const getPages = async () => {
  const response = await client.get("/pages");

  return response;
};

export const getUrgency = async () => {
  const response = await client.get("/order-urgency");

  return response;
};

export const getOrderTypes = async () => {
  const response = await client.get("/order-category");

  return response;
};

export const getOrderSubjects = async () => {
  const response = await client.get("/order-subject");

  return response;
};

export const getOrderStyles = async () => {
  const response = await client.get("/citation-styles");

  return response;
};
export const getOrderSources = async () => {
  const response = await client.get("/references");

  return response;
};
export const getOrderAcademicLevels = async () => {
  const response = await client.get("/academic-levels");

  return response;
};

export const createOrder = async (payload) => {
  const response = await client.post("/orders/create", payload);

  return response;
};

export const getOrders = async () => {
  const response = await client.get("/orders");

  return response;
};

export const getMyOrders = async (id) => {
  const response = await client.get(`/orders?userId=${id}`);

  return response;
};
