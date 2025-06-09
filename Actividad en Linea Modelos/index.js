// Importamos los modelos y la conexión
const sequelize = require('./conexion');
const Proveedores = require('./proveedores');
const Articulos = require('./articulos');
const Clientes = require('./clientes');
const Empleados = require('./empleados');

// Función para agregar algunos datos de ejemplo
async function agregarDatosEjemplo() {
    try {
        // Esperamos a que la conexión esté lista y las tablas sincronizadas
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        
        // Sincronizamos los modelos con la base de datos
        await sequelize.sync({ force: true });
        console.log('Modelos sincronizados con la base de datos.');

        // Crear un proveedor
        const proveedor = await Proveedores.create({
            id: 1,
            nombre: 'Proveedor Ejemplo',
            direccion: 'Calle Principal 123'
        });
        console.log('Proveedor creado:', proveedor.toJSON());

        // Crear un artículo
        const articulo = await Articulos.create({
            id: 1,
            descripcion: 'Artículo de prueba',
            precio: 99.99,
            existencia: 100
        });
        console.log('Artículo creado:', articulo.toJSON());

        // Crear un cliente
        const cliente = await Clientes.create({
            id: 1,
            nombre: 'Cliente Ejemplo',
            correo: 'cliente@ejemplo.com',
            telefono: '123-456-7890',
            direccion: 'Avenida Central 456'
        });
        console.log('Cliente creado:', cliente.toJSON());

        // Crear un empleado
        const empleado = await Empleados.create({
            id: 1,
            nombre: 'Empleado Ejemplo',
            telefono: '098-765-4321',
            fechaNacimiento: '1990-01-01',
            sueldo: 25000.00
        });
        console.log('Empleado creado:', empleado.toJSON());

    } catch (error) {
        console.error('Error al agregar datos de ejemplo:', error);
    }
}

// Ejecutamos la función
agregarDatosEjemplo(); 