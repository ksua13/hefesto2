
import { DataTypes } from 'sequelize'
import db from '../db/connection'


const Producto = db.define('Producto',{
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    stock:{
        type: DataTypes.NUMBER
    }
},{
    timestamps:false
})

export default Producto