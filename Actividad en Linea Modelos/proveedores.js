// aqui estamos importando lo necesario de Sequelize
const { DataTypes } = require('sequelize');
// Y también traemos la conexión a la base de datos que ya creamos
const sequelize = require('./conexion');

// Creamos el modelo de "proveedores", que es básicamente como una tabla en la base de datos.
// Le ponemos 3 campos:
// - id: que es un número entero y va a ser la clave primaria (o sea, el identificador único)
// - nombre: una cadena de texto para guardar el nombre del proveedor
// - direccion: otra cadena para la dirección del proveedor

// Además, le decimos que no queremos usar los timestamps automáticos de Sequelize
const proveedores = sequelize.define('proveedores', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING }
}, {
    timestamps: false
});

// Por último, exportamos el modelo para poder usarlo en otras partes del proyecto
module.exports = proveedores;
