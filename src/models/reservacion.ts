import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Reservacion = db.define('tbl_reservacion', {
    
    id_reservacion:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
    },
    id_cliente:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    nombre_cliente:{
        type: DataTypes.STRING
    },
    cantidad_personas:{
        type: DataTypes.STRING
    },
    id_mesa:{
        type: DataTypes.INTEGER
    },
    fecha_hora_resevacion:{
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true, //para nombrar al modelo igual que a la tabla en la bd
    createdAt: false,
    updatedAt: false
});

export default Reservacion;