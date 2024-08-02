# Documentación de la Aplicación

## Descripción General

Esta aplicación permite a los usuarios gestionar sus tarjetas de crédito. Los usuarios pueden ver un carrusel de tarjetas, agregar nuevas tarjetas y contactar con el soporte a través de un formulario de contacto. La aplicación está construida con React y utiliza varias bibliotecas y componentes para manejar el estado, los formularios y la visualización de datos.

## Estructura del Proyecto

La aplicación se organiza en varios componentes y contextos que trabajan juntos para proporcionar una experiencia de usuario fluida. A continuación se describe cada uno de los componentes principales.

### 1. `CardsContextProvider`

- **Descripción:** Proporciona un contexto global para el estado de las tarjetas utilizando el hook `useReducer`.
- **Archivos:** `CardsContext.tsx`
- **Funcionalidades:**
  - Proporciona el estado y el dispatch para manejar tarjetas a través del contexto.
  - Incluye un `reducer` que maneja la acción de agregar tarjetas.

### 2. `Navbar`

- **Descripción:** Componente de navegación que proporciona enlaces a diferentes secciones de la aplicación y un menú desplegable en dispositivos móviles.
- **Archivos:** `Navbar.tsx`, `Navbar.scss`
- **Funcionalidades:**
  - Muestra enlaces de navegación y un botón de perfil.
  - Alterna la visibilidad del menú de navegación en pantallas pequeñas.

### 3. `Carousel`

- **Descripción:** Componente de carrusel para mostrar las tarjetas utilizando la biblioteca Swiper.
- **Archivos:** `Carousel.tsx`, `Carousel.scss`
- **Funcionalidades:**
  - Muestra las tarjetas en un carrusel deslizable.
  - Utiliza `Pagination` y `Navigation` para la paginación y la navegación entre diapositivas.

### 4. `Card`

- **Descripción:** Componente que representa una tarjeta de crédito individual.
- **Archivos:** `Card.tsx`, `Card.scss`
- **Funcionalidades:**
  - Muestra el número de tarjeta, la fecha de vencimiento, el nombre del titular y el logo de la tarjeta.
  - Formatea el número de tarjeta y elige el logo correspondiente según el tipo de tarjeta.

### 5. `Contact`

- **Descripción:** Formulario de contacto que permite a los usuarios enviar un mensaje.
- **Archivos:** `Contact.tsx`
- **Funcionalidades:**
  - Usa `formik` para el manejo del formulario y `yup` para la validación.
  - Muestra una alerta de éxito después de enviar el formulario.

### 6. `AddCard`

- **Descripción:** Formulario para agregar una nueva tarjeta a la aplicación.
- **Archivos:** `AddCard.tsx`
- **Funcionalidades:**
  - Usa `formik` para el manejo del formulario y `yup` para la validación.
  - Agrega una tarjeta nueva al estado global y muestra una alerta de éxito.
  - Permite al usuario seleccionar el tipo de tarjeta y validar los campos del formulario.

## Interfaces

### `CardInterface`

Define la estructura de una tarjeta de crédito, incluyendo el número, la fecha de vencimiento, el nombre del titular y el logo.

**Archivo:** `Interfaces.ts`

### `CardsContextInterface`

Define la estructura del contexto que proporciona el estado de las tarjetas y el dispatch para actualizar el estado.

**Archivo:** `Interfaces.ts`

### `ContextProps`

Define las propiedades del proveedor del contexto de tarjetas.

**Archivo:** `Interfaces.ts`

### `reducerAction`

Define las acciones que pueden ser despachadas al `reducer` del contexto de tarjetas.

**Archivo:** `Interfaces.ts`

## Dependencias

- **React:** Biblioteca principal para construir la interfaz de usuario.
- **Formik:** Biblioteca para el manejo de formularios.
- **Yup:** Biblioteca para la validación de esquemas de formularios.
- **SweetAlert2:** Biblioteca para mostrar alertas.
- **Swiper:** Biblioteca para crear carruseles.
- **UUID:** Biblioteca para generar identificadores únicos.

## Estilos

La aplicación utiliza SCSS para los estilos personalizados. Los estilos están organizados en archivos correspondientes a cada componente para una mejor modularidad.

- **Estilos Generales:** `App.scss`
- **Estilos de Navegación:** `Navbar.scss`
- **Estilos del Carrusel:** `Carousel.scss`
- **Estilos de la Tarjeta:** `Card.scss`
- **Estilos del Formulario de Contacto:** `Contact.scss`
- **Estilos del Formulario de Agregar Tarjeta:** `AddCard.scss`

## Uso

1. **Iniciar la Aplicación:** Asegúrate de tener todas las dependencias instaladas y ejecuta `npm start` o `yarn start` para iniciar la aplicación.
2. **Navegación:** Usa la barra de navegación para moverte entre las secciones de la aplicación.
3. **Agregar Tarjeta:** Rellena el formulario en la sección "Agregar Tarjeta" y guarda la tarjeta.
4. **Ver Tarjetas:** Revisa el carrusel en la sección principal para ver todas las tarjetas añadidas.
5. **Contacto:** Usa el formulario de contacto para enviar mensajes y recibir una confirmación.

