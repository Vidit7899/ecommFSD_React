import { createProduct, deleteProduct, getAll, getOneProduct, getProductsByCategory, updateProduct } from "../controllers/product.controller.js";

const prodRoutes=(app)=>{

    app.post("/shoppy/addProduct", createProduct)

    app.get("/shoppy/getAllProducts", getAll)

    app.get("/shoppy/getAllProducts/:catId", getProductsByCategory)

    app.get("/shoppy/getProduct/:id", getOneProduct)

    app.put("/shoppy/updateProduct/:id", updateProduct)

    app.delete("/shoppy/deleteProduct/:id", deleteProduct)


}

export default prodRoutes