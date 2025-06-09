const express = require('express');
const app = express();

app.use(express.json());

const precios = {
  A: {
    Viernes: { precio: 150, descuento: 0.15 },
    Sábado: { precio: 230, descuento: 0.07 }
  },
  B: {
    Viernes: { precio: 300, descuento: 0.08 },
    Sábado: { precio: 425, descuento: 0.04 }
  },
  C: {
    Viernes: { precio: 500, descuento: 0.10 },
    Sábado: { precio: 670, descuento: 0.07 }
  }
};

app.post('/calcular', (req, res) => {
  const { localidad, fecha, esEstudiante } = req.body;

  if (!localidad || !fecha) {
    return res.status(400).json({ error: 'Faltan datos: localidad o fecha' });
  }

  const localidadDatos = precios[localidad];
  if (!localidadDatos || !localidadDatos[fecha]) {
    return res.status(400).json({ error: 'Combinación de localidad o fecha inválida' });
  }

  const { precio, descuento } = localidadDatos[fecha];
  const precioFinal = esEstudiante ? precio - (precio * descuento) : precio;

  res.json({
    localidad,
    fecha,
    esEstudiante,
    precioOriginal: precio,
    descuento: esEstudiante ? (descuento * 100).toFixed(0) + '%' : '0%',
    precioFinal: precioFinal.toFixed(2)
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${3000}`);
});
