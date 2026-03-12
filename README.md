# 🐘 Node + PostgreSQL: Gestión de Finanzas y Clientes

Este proyecto demuestra la implementación de un servidor **Node.js** conectado a una base de datos **PostgreSQL** utilizando el paquete `pg`. Se exploran los dos métodos principales de configuración de un Pool de conexiones para garantizar eficiencia y escalabilidad.

## 🚀 Características
* **Doble Enfoque de Conexión**: Implementación de Pool mediante objeto de configuración y mediante Connection String.
* **API REST**: Endpoints GET para la recuperación de datos en formato JSON.
* **Frontend Dinámico**: Interfaz construida con Vanilla JS que consume los servicios y maneja errores de red.
* **Persistencia de Datos**: Integración con PostgreSQL para el almacenamiento de registros financieros y de clientes.

---

## 🛠️ Métodos de Conexión Implementados

### 1. Pool por Configuración (Campos Detallados)
Utilizado en el endpoint `/finanzas`. Este método desglosa las credenciales (`host`, `user`, `password`, etc.), lo cual es ideal para entornos de desarrollo local donde los parámetros pueden variar.

### 2. Pool por Connection String (URI)
Utilizado en el endpoint `/clientes`. Utiliza una cadena de texto con el formato `postgresql://user:password@host:port/db`. Es el estándar utilizado en servicios de despliegue en la nube.

---

## 📂 Estructura del Proyecto
* `server.js`: Servidor Express con la lógica de conexión a la base de datos.
* `public/index.html`: Dashboard para visualizar los datos de finanzas y clientes.
* `queries.sql`: Scripts para la creación y población de las tablas necesarias.
* `package.json`: Definición de dependencias (`express`, `pg`).

---

## ⚙️ Requisitos Previos
1. Tener instalado **PostgreSQL**.
2. Crear una base de datos y ejecutar el archivo `queries.sql`.
3. Instalar dependencias con `npm install`.
4. Ejecutar con `node server.js`.

---

## 👩🏻‍💻 Autora
Jenoveva Quijada
