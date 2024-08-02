import { Dispatch, ReactNode } from "react"

export interface CardInterface {
    id?: string,
    cardNumber: string,
    dueDate: string,
    owner: string,
    logo: 'mastercard' | 'visa' | 'amex' | string
}

export interface CarouselInterface {
    items?: CardInterface[]
}

export interface reducerAction {
    type: string,
    payload: CardInterface
}

export interface ContextProps {
    children: ReactNode
}

export interface CardsContextInterface {
    state: CardInterface[],
    dispatch: Dispatch<reducerAction>
}