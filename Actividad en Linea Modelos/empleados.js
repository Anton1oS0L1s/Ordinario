// Primero importamos lo que necesitamos de Sequelize
const { DataTypes } = require('sequelize');
// Y también traemos la conexión a la base de datos desde el archivo de conexión
const sequelize = require('./conexion');

// aquuiestamos creando el modelo "empleados", que va a representar una tabla en la base de datos con info de los empleados
// También desactivamos los timestamps, porque no necesitamos que se agreguen automáticamente las fechas de creación y actualización
const empleados = sequelize.define('empleados', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    fechaNacimiento: { type: DataTypes.STRING },
    sueldo: { type: DataTypes.FLOAT }
}, {
    timestamps: false
});
module.exports = empleados;
