// Importamos lo necesario desde Sequelize 
const { DataTypes } = require('sequelize');
// También traemos la conexión que ya tenemos armada
const sequelize = require('./conexion');

// aqui definimos el modelo "articulos", que es como decir: vamos a tener una tabla de artículos en la base de datos
// Le decimos a Sequelize que no agregue automáticamente las columnas de timestamps (createdAt, updatedAt)
const articulos = sequelize.define('articulos', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    descripcion: { type: DataTypes.STRING },
    precio: { type: DataTypes.FLOAT },
    existencia: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});
module.exports = articulos;
