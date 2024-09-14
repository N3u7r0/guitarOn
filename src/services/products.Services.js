import axios from "axios";
import data from "../../public/products.json";

export async function getAllProducts() {
  return await axios.get({ data });
}
