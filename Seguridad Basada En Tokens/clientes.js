const express = require('express');
const router = express.Router();
const Clientes = require('../modelos/clientes');
const authMiddleware = require('../middlewares/auth');


router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const clientes = await Clientes.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener clientes' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cliente = await Clientes.findByPk(req.params.id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoCliente = await Clientes.create(req.body);
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el cliente' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const cliente = await Clientes.findByPk(req.params.id);
        if (cliente) {
            await cliente.update(req.body);
            res.json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el cliente' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Clientes.destroy({ where: { id: req.params.id } });
        if (eliminado) {
            res.json({ mensaje: 'Cliente eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
});

module.exports = router;
