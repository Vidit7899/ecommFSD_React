import { DataTypes } from "sequelize";

const user=( sequelize)=>{
    const User=sequelize.define("users",{
        userId:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phNo:{
            type:DataTypes.BIGINT,
            allowNull:false
        }
    },{
        createdAt:false,
        updatedAt:false
    });

    return User
}

export default user;