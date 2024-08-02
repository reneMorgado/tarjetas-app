import React, { useReducer } from 'react'; // Importa React y el hook useReducer.
import { CardInterface, CardsContextInterface, ContextProps, reducerAction } from '../interfaces/Interfaces'; // Importa las interfaces necesarias.
import { v4 as uuid } from 'uuid'; // Importa la función uuid para generar identificadores únicos.

export const cardsContext = React.createContext<CardsContextInterface | undefined>(undefined); // Crea un contexto para el estado de las tarjetas.

const initialState: CardInterface[] = [
    {
        id: uuid(), // Genera un id único para la tarjeta.
        cardNumber: '4444222233331111', // Número de tarjeta de ejemplo.
        dueDate: '12/25', // Fecha de vencimiento de ejemplo.
        owner: 'Rene Morgado', // Titular de la tarjeta de ejemplo.
        logo: 'mastercard' // Logo de la tarjeta de ejemplo.
    },
    {
        id: uuid(), // Genera un id único para la tarjeta.
        cardNumber: '4444222233331111', // Número de tarjeta de ejemplo.
        dueDate: '12/25', // Fecha de vencimiento de ejemplo.
        owner: 'Rene Morgado', // Titular de la tarjeta de ejemplo.
        logo: 'visa' // Logo de la tarjeta de ejemplo.
    },
    {
        id: uuid(), // Genera un id único para la tarjeta.
        cardNumber: '4444222233331111', // Número de tarjeta de ejemplo.
        dueDate: '12/25', // Fecha de vencimiento de ejemplo.
        owner: 'Rene Morgado', // Titular de la tarjeta de ejemplo.
        logo: 'amex' // Logo de la tarjeta de ejemplo.
    }
];

const reducer = (state: CardInterface[], action: reducerAction) => {
    switch (action.type) {
        case 'ADD_CARD':
            // Devuelve un nuevo estado con la tarjeta añadida al array.
            return [...state, action.payload];
        default:
            // Devuelve el estado actual si la acción no coincide con ningún caso.
            return state;
    }
};

const CardsContextProvider: React.FC<ContextProps> = ({ children }) => {
    // Usa useReducer para manejar el estado y el dispatch.
    const [state, dispatch] = useReducer(reducer, initialState);

    // Proporciona el estado y el dispatch a los componentes hijos a través del contexto.
    return (
        <cardsContext.Provider value={{ state, dispatch }}>
            {children}
        </cardsContext.Provider>
    );
};

export default CardsContextProvider; // Exporta el proveedor del contexto de tarjetas.
