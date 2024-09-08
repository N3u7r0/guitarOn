 import axios from "axios";
import data from "../data/products.json";

 export async  function getAllProducts() {
    return await axios.get(data); 
   
} 
  
 

/* export function getAllProducts(){data}; */