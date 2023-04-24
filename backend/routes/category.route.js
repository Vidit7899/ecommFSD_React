import {create, deleteCategory, getAll, getOneCategory, updateCategory} from "../controllers/category.controller.js";

const categoryRoutes = (app)=>{
    
    app.post("/shoppy/addCategory", create)

    app.get("/shoppy/getAllCategories", getAll)

    app.get("/shoppy/getCategory/:id", getOneCategory)

    app.put("/shoppy/updateCategory/:id", updateCategory)

    app.delete("/shoppy/deleteCategory/:id", deleteCategory)
}

export default categoryRoutes