const express = require('express');
const router = express.Router();
const Articulos = require('../modelos/articulos');

// Obtener todos los artículos
router.get('/', async (req, res) => {
    try {
        const articulos = await Articulos.findAll();
        res.json(articulos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener artículos' });
    }
});

// Obtener un artículo por ID
router.get('/:id', async (req, res) => {
    try {
        const articulo = await Articulos.findByPk(req.params.id);
        articulo ? res.json(articulo) : res.status(404).json({ error: 'Artículo no encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el artículo' });
    }
});

// Crear un nuevo artículo
router.post('/', async (req, res) => {
    try {
        const nuevo = await Articulos.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear artículo' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const articulo = await Articulos.findByPk(req.params.id);
        if (articulo) {
            await articulo.update(req.body);
            res.json(articulo);
        } else {
            res.status(404).json({ error: 'Artículo no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar artículo' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Articulos.destroy({ where: { id: req.params.id } });
        eliminado ? res.json({ mensaje: 'Artículo eliminado' }) : res.status(404).json({ error: 'No encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar artículo' });
    }
});

module.exports = router;
