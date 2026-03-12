CREATE TABLE IF NOT EXISTS finanzas_personales (
    id SERIAL PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    monto DECIMAL(10, 2) NOT NULL
);

INSERT INTO finanzas_personales (descripcion, monto) VALUES 
('Pago de Proyecto Freelance', 1200.50),
('Compra de materiales creativos', -150.20),
('Suscripción herramientas digitales', -25.99),
('Venta de activos digitales', 300.00);

CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO clientes (nombre, email) VALUES 
('Jeno Creativa', 'contacto@jeno.cl'),
('Soporte Tech', 'ayuda@tech.com'),
('Cliente Especial', 'cliente@empatico.org');