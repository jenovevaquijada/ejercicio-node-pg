const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Pool 1
const poolConfig = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'db-demo-01',
    password: 'm0ch1',
    port: 5432,
});

app.get('/finanzas', async (req, res) => {
    try {
        const query = 'SELECT * FROM finanzas_personales';
        const { rows } = await poolConfig.query(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error en /finanzas:", error.message);
        res.status(500).json({ 
            error: "Error al obtener finanzas", 
            detalle: error.message 
        });
    }
});

// Pool 2
const connectionString = 'postgresql://postgres:m0ch1@localhost:5432/db-demo-01';

const poolString = new Pool({
    connectionString: connectionString,
});

app.get('/clientes', async (req, res) => {
    try {
        const query = 'SELECT * FROM clientes';
        const result = await poolString.query(query);
        res.status(200).json(result.rows); 
    } catch (error) {
        res.status(500).json([]); 
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor PG corriendo en http://localhost:${PORT}`);
});