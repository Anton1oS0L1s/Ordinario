const { DataTypes } = require('sequelize');
// esta es la conexion que yatenemos armada con la base de datos
const sequelize = require('./conexion');

// Creamos el modelo "clientes", que representa la tabla donde vamos a guardar info de los clientes.
// Le decimos a Sequelize que no queremos los timestamps automáticos
const clientes = sequelize.define('clientes', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING }
}, {
    timestamps: false
});
module.exports = clientes;
