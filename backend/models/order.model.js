import { DataTypes, Sequelize } from "sequelize";

const ord=(sequelize)=>{
    const order=sequelize.define("orders",{
        ordId:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        ordTotal:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        ordDate:{
            type:DataTypes.DATEONLY,
            allowNull:false,
            defaultValue:Sequelize.NOW
        }
    },{
        createdAt:false,
        updatedAt:false
    })
    return order
}

export default ord;