const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empleados = sequelize.define('Empleados', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    fecha_contratacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true
});

module.exports = Empleados; 