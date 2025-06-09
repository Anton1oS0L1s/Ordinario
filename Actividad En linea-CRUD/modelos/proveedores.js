const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Proveedores = sequelize.define('Proveedores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contacto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    telefono: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: true
});

module.exports = Proveedores; 