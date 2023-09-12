import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Login = sequelize.define('tbl_login', {
    id_login: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    usuario: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empleado: {
        type: DataTypes.STRING
    },
    nombreyapellido: {
        type: DataTypes.STRING
    },
    cedula: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true, //para nombrar al modelo igual que a la tabla en la bd
    createdAt: false,
    updatedAt: false
} )