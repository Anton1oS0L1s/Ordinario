const { Sequelize } = require('sequelize');

class ConexionBD {
    constructor() {
        this.conexion = new Sequelize({
            dialect: 'sqlite',
            storage: '../sueldos.sqlite'
        });
    }

    obtenerConexion() {
        return this.conexion;
    }
}

const instanciaDB = new ConexionBD();
module.exports = instanciaDB.obtenerConexion();