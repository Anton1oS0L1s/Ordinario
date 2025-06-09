const express = require('express');
const router = express.Router();
const Proveedores = require('../modelos/proveedores');
router.get('/', async (req, res) => {
    try {
        const proveedores = await Proveedores.findAll();
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener proveedores' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const proveedor = await Proveedores.findByPk(req.params.id);
        proveedor ? res.json(proveedor) : res.status(404).json({ error: 'Proveedor no encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener proveedor' });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevo = await Proveedores.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear proveedor' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const proveedor = await Proveedores.findByPk(req.params.id);
        if (proveedor) {
            await proveedor.update(req.body);
            res.json(proveedor);
        } else {
            res.status(404).json({ error: 'Proveedor no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar proveedor' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Proveedores.destroy({ where: { id: req.params.id } });
        eliminado ? res.json({ mensaje: 'Proveedor eliminado' }) : res.status(404).json({ error: 'No encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar proveedor' });
    }
});

module.exports = router;
