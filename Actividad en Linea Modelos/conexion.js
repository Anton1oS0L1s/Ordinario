const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
// Aquí usamos SQLite como base de datos por su simplicidad
// El archivo 'database.sqlite' se creará automáticamente
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false // Desactivamos los logs de SQL para mantener la consola limpia
});

// Exportamos la conexión para que los modelos puedan usarla
module.exports = sequelize; 