import { DataTypes } from "sequelize";

const cat=(sequelize)=>{
    const category=sequelize.define("categories",{
        catId:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        catName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        catDesc:{
            type:DataTypes.STRING,
            allowNull:false
        }
        
    },{
        createdAt:false,
        updatedAt:false
    })
    
    return category
}

export default cat;