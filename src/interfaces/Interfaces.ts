import { Dispatch, ReactNode } from "react";

// Interfaz que define la estructura de una tarjeta.
export interface CardInterface {
    id?: string; // Identificador único de la tarjeta (opcional).
    cardNumber: string; // Número de la tarjeta.
    dueDate: string; // Fecha de vencimiento de la tarjeta.
    owner: string; // Titular de la tarjeta.
    logo: 'mastercard' | 'visa' | 'amex' | string; // Logo de la tarjeta, puede ser uno de los valores predefinidos o una cadena de texto.
}

// Interfaz para el componente del carrusel que recibe una lista de tarjetas.
export interface CarouselInterface {
    items?: CardInterface[]; // Lista opcional de tarjetas para mostrar en el carrusel.
}

// Interfaz para las acciones del reductor.
export interface reducerAction {
    type: string; // Tipo de la acción.
    payload: CardInterface; // Datos asociados con la acción, en este caso, una tarjeta.
}

// Interfaz para las propiedades del proveedor del contexto.
export interface ContextProps {
    children: ReactNode; // Elementos hijos que el proveedor del contexto envuelve.
}

// Interfaz para el contexto de tarjetas.
export interface CardsContextInterface {
    state: CardInterface[]; // Estado que contiene la lista de tarjetas.
    dispatch: Dispatch<reducerAction>; // Función para enviar acciones al reductor.
}
