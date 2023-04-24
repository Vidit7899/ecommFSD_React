import { DataTypes } from "sequelize";


const op=(sequelize)=>{
    const ordPro=sequelize.define("orderProducts",{
        productProdId:{
            type:DataTypes.UUID,
            primaryKey:true
        },
        orderOrdId:{
            type:DataTypes.UUID,
            primaryKey:true
        },
        prodQuantity:{
            type:DataTypes.INTEGER
        }
    },{
        createdAt:false,
        updatedAt:false
    })

    return ordPro
}

export default op;