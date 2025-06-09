const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/articulos', require('./routes/articulos'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/empleados', require('./routes/empleados'));
app.use('/api/proveedores', require('./routes/proveedores'));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
}); 