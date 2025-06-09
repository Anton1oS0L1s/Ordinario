const express = require('express');
const router = express.Router();
const Empleados = require('../modelos/empleados');
router.get('/', async (req, res) => {
    try {
        const empleados = await Empleados.findAll();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const empleado = await Empleados.findByPk(req.params.id);
        empleado ? res.json(empleado) : res.status(404).json({ error: 'Empleado no encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleado' });
    }
});
router.post('/', async (req, res) => {
    try {
        const nuevo = await Empleados.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear empleado' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const empleado = await Empleados.findByPk(req.params.id);
        if (empleado) {
            await empleado.update(req.body);
            res.json(empleado);
        } else {
            res.status(404).json({ error: 'Empleado no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar empleado' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Empleados.destroy({ where: { id: req.params.id } });
        eliminado ? res.json({ mensaje: 'Empleado eliminado' }) : res.status(404).json({ error: 'No encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar empleado' });
    }
});

module.exports = router;

