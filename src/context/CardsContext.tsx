import React, { useReducer } from 'react'
import { CardInterface, CardsContextInterface, ContextProps, reducerAction } from '../interfaces/Interfaces'
import { v4 as uuid } from 'uuid'

export const cardsContext = React.createContext<CardsContextInterface | undefined>(undefined)

const initialState: CardInterface[] = [{
    id: uuid(),
    cardNumber: '4444222233331111',
    dueDate: '12/25',
    owner: 'Rene Morgado',
    logo: 'mastercard'
}, {
    id: uuid(),
    cardNumber: '4444222233331111',
    dueDate: '12/25',
    owner: 'Rene Morgado',
    logo: 'visa'
}, {
    id: uuid(),
    cardNumber: '4444222233331111',
    dueDate: '12/25',
    owner: 'Rene Morgado',
    logo: 'amex'
}]

const reducer = (state: CardInterface[], action: reducerAction) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [...state, action.payload];
        default:
            return state;
    }
}

const CardsContextProvider: React.FC<ContextProps> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <cardsContext.Provider value={{ state, dispatch }}>
        {children}
    </cardsContext.Provider>
}

export default CardsContextProvider