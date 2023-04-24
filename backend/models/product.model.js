import { DataTypes } from "sequelize";

const prod=(sequelize)=>{
    const product=sequelize.define("products",{
        prodId:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        prodName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        prodDesc:{
            type:DataTypes.STRING,
            allowNull:false
        },
        prodPrice:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        createdAt:false,
        updatedAt:false
    })
    return product
}

export default prod;