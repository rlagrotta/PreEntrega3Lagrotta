# Proyecto de comercio electrónico

## Tabla de contenidos
- [Introducción](#introducción)
- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Configuración e instalación](#configuración-e-instalación)
- [Uso](#uso)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Mejoras futuras](#mejoras-futuras)
- [Licencia](#licencia)

---

## Introducción
Esta es una aplicación web de comercio electrónico completamente funcional creada con React y Firebase. La plataforma permite a los usuarios explorar productos, agregarlos a un carrito y finalizar su compra. La aplicación cuenta con actualizaciones de stock dinámicas, un carrito persistente que utiliza localStorage e integración con Firebase para la gestión de pedidos.

---

## Características
- **Exploración de productos**: Ver detalles, categorías y disponibilidad de productos.
- **Carrito de compras**: agrega, elimina y actualiza las cantidades de artículos.
- **Carrito persistente**: los artículos en el carrito se guardan incluso después de que el usuario actualice la página.
- **Pagar**: los usuarios pueden finalizar su compra completando sus datos.
- **Gestión de stock**: actualizaciones de stock en tiempo real después de cada pedido.
- **Integración con Firebase**: almacena pedidos y administra el inventario de productos.

---

## Tecnologías utilizadas
- **Frontend**:
- React.js
- React Router
- Context API
- Bootstrap
- **Backend**:
- Firebase (base de datos de Firestore)
- Firebase Hosting
- **Herramientas**:
- Vite
- LocalStorage

---

## Configuración e instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/rlagrotta/PreEntrega3.git
```

2. Navegar hasta el directorio del proyecto:
```bash
cd ecommerce-project
```

3. Instalar dependencias:
```bash
npm install
```

4. Configurar Firebase:
- Crear un proyecto de Firebase en [Firebase Console](https://console.firebase.google.com/).
- Habilitar la base de datos y el hosting de Firestore.
- Copia tu configuración de Firebase y pégala en un nuevo archivo `firebase-config.js` en la carpeta `src/services`.

5. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

6. Abre la aplicación en tu navegador en `http://localhost:5173`.

---

## Uso
1. Explora los productos desde la página de inicio.
2. Haz clic en un producto para ver sus detalles.
3. Agrega el producto a tu carrito usando el selector de cantidad.
4. Procede a la compra haciendo clic en el carrito y completando tus datos.
5. Envía el pedido para generar un ID de pedido.

---

## Estructura de carpetas
```
src/
|-- components/ # Componentes de interfaz de usuario reutilizables
|-- context/ # Contexto del carrito para la gestión de estados globales
|-- services/ # Configuración de Firebase y llamadas a la API
|-- styles/ # Archivos CSS personalizados
|-- main.jsx # Componente principal de la aplicación
```

---

## Mejoras futuras
- Agregar autenticación de usuario con Firebase Auth.
- Implementar la búsqueda y el filtrado de productos.
- Integrar pasarelas de pago (p. ej., Stripe, PayPal).
- Agregar panel de administración para la gestión de productos y pedidos.
- Mejorar la interfaz de usuario y la experiencia de usuario con animaciones y diseño responsivo.

---

## Licencia
Este proyecto tiene licencia MIT. Siéntete libre de usarlo, modificarlo y distribuirlo como creas conveniente.