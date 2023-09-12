import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('tbl_estado', {
    // name: {
    //     type: DataTypes.STRING
    // },
    // description: {
    //     type: DataTypes.STRING
    // },
    // price: {
    //     type: DataTypes.DOUBLE
    // },
    // stock: {
    //     type: DataTypes.NUMBER
    // }
    id_estado:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
    },
    descripcion:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true, //para nombrar al modelo igual que a la tabla en la bd
    createdAt: false,
    updatedAt: false
});

export default Producto;
