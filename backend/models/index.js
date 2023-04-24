import Sequelize from "sequelize";



import config from "../configs/db.config.js";

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host:config.HOST,
        dialect:config.dialect,
        operatorAliases:false,
        pool:{
            max:config.pool.max,
            min:config.pool.min,
            acquire:config.pool.acquire,
            idle:config.pool.idle
        }
    }
);

const db={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import user from "./user.model.js";
db.user=user(sequelize);

import prod from "./product.model.js";
db.product=prod(sequelize);

import cat from "./category.model.js";
db.category=cat(sequelize);

import ord from "./order.model.js";
db.order=ord(sequelize)

import op from "./orderProduct.model.js";
db.orderProduct=op(sequelize)


db.category.hasMany(db.product,{foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
db.product.belongsTo(db.category);

db.user.hasMany(db.order,{foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
db.order.belongsTo(db.user)


db.product.belongsToMany(db.order,{through:"orderProducts"});
db.order.belongsToMany(db.product,{through:"orderProducts"})


export default db;