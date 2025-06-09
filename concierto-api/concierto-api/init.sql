
CREATE TABLE IF NOT EXISTS boletos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  localidad TEXT NOT NULL,
  fecha TEXT NOT NULL,
  precio REAL NOT NULL,
  descuento REAL NOT NULL
);

INSERT INTO boletos (localidad, fecha, precio, descuento) VALUES
  ('A', 'Viernes', 150, 0.15),
  ('A', 'Sábado', 230, 0.07),
  ('B', 'Viernes', 300, 0.08),
  ('B', 'Sábado', 425, 0.04),
  ('C', 'Viernes', 500, 0.10),
  ('C', 'Sábado', 670, 0.07);
