import axios from "axios";
import data from "../data/products.json";

export async function getAllProducts() {
  return await axios.get(data);
}

export async function getProductsById() {
  return await axios.get(data);
}

export async function getProductsByCategory() {
  return await axios.get(data);
}