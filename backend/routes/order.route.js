import { getOrderDetails, getUserOrders, placeOrder } from "../controllers/order.controller.js"
import verifyToken from "../middlewares/authJWT.js"


const orderRoutes=(app)=>{
    app.post("/shoppy/placeOrder", verifyToken, placeOrder);

    app.get("/shoppy/getOrders", verifyToken, getUserOrders);

    app.get("/shoppy/getOrderDetails/:orderId", verifyToken, getOrderDetails)
}

export default orderRoutes