import db from "../models/index.js"
const Order=db.order
const User=db.user
const Product=db.product
const orderProduct=db.orderProduct

export const placeOrder=async(req, res)=>{

   const user=req.user;
    console.log(user);
    if(!user){
        return res.status(401).send({message:"User not found"})
    }

    const ordDate=new Date();

    const {products, prodQuantity}=req.body;

    const addedProducts=await Product.findAll({where:{prodId:products}});

    let ordTotal=0;

    for(let i=0;i<addedProducts.length;i++){
        ordTotal+=addedProducts[i].prodPrice*prodQuantity[i]
    }

   try{
    const order=await Order.create({
        ordDate:ordDate,
        ordTotal:ordTotal,
        userUserId:user.userId
    })

    
   for(let i=0;i<addedProducts.length;i++){

    await orderProduct.create({
        productProdId:addedProducts[i].prodId,
        orderOrdId:order.ordId,
        prodQuantity:prodQuantity[i]
    })

   }
    

    return res.status(200).send(order);
   }
   catch(error){
    return res.status(500).send(error.message)
   }

}

export const getUserOrders=async (req, res)=>{

    const user=req.user;

    if(!user){
        return res.status(401).send({message:"User not found"})
    }

    const userOrders=await user.getOrders();
    

    return res.status(200).send(userOrders)

}

export const getOrderDetails=async(req, res)=>{

    const user=req.user;

    const{orderId}=req.params

    if(!user){
        return res.status(401).send({message:"User not found"})
    }

    const order=await Order.findByPk(orderId);

    const products=await order.getProducts();

    return res.status(200).send({products, order})

}