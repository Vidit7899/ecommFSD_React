import axios from "axios";


const client = axios.create({
    baseURL: "http://localhost:8080/shoppy" 
  });

async function PlaceOrder(products, prodQuantity) {
    const response=await client.post("/placeOrder", {products:products, prodQuantity:prodQuantity});
    return response

}

export default PlaceOrder