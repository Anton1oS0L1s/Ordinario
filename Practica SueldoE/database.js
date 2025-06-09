const { Sequelize } = require('sequelize');

// Configuración de la base de datos SQLite
class BaseDeDatos {
    constructor() {
        this.conexion = new Sequelize({
            dialect: 'sqlite',
            storage: './empleados.sqlite',
            logging: false // Desactivar logs para una salida limpia
        });
    }

    async verificarConexion() {
        try {
            await this.conexion.authenticate();
            console.log('Base de datos conectada exitosamente');
        } catch (error) {
            console.error('Error de conexión:', error.message);
        }
    }
}

const baseDeDatos = new BaseDeDatos();
baseDeDatos.verificarConexion();

module.exports = baseDeDatos.conexion; 