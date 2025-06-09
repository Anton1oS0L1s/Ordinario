# Sistema CRUD

Este es un sistema CRUD (Create, Read, Update, Delete) para la gestión de artículos, clientes, empleados y proveedores.

## Requisitos

- Node.js
- MySQL

## Instalación

1. Clonar el repositorio
2. Instalar las dependencias:
```bash
npm install
```

3. Configurar la base de datos:
   - Crear una base de datos MySQL llamada `crud_db`
   - Ajustar las credenciales en `config/database.js` si es necesario

4. Iniciar el servidor:
```bash
npm start
```

Para desarrollo, puedes usar:
```bash
npm run dev
```

## Endpoints

### Artículos
- GET /api/articulos - Obtener todos los artículos
- GET /api/articulos/:id - Obtener un artículo por ID
- POST /api/articulos - Crear un nuevo artículo
- PUT /api/articulos/:id - Actualizar un artículo
- DELETE /api/articulos/:id - Eliminar un artículo

### Clientes
- GET /api/clientes - Obtener todos los clientes
- GET /api/clientes/:id - Obtener un cliente por ID
- POST /api/clientes - Crear un nuevo cliente
- PUT /api/clientes/:id - Actualizar un cliente
- DELETE /api/clientes/:id - Eliminar un cliente

### Empleados
- GET /api/empleados - Obtener todos los empleados
- GET /api/empleados/:id - Obtener un empleado por ID
- POST /api/empleados - Crear un nuevo empleado
- PUT /api/empleados/:id - Actualizar un empleado
- DELETE /api/empleados/:id - Eliminar un empleado

### Proveedores
- GET /api/proveedores - Obtener todos los proveedores
- GET /api/proveedores/:id - Obtener un proveedor por ID
- POST /api/proveedores - Crear un nuevo proveedor
- PUT /api/proveedores/:id - Actualizar un proveedor
- DELETE /api/proveedores/:id - Eliminar un proveedor 