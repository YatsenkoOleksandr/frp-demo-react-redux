import { createStore } from "redux";
import { appStoreReducer } from "../reducers/reducers";

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface Order {
    productId: number;
    count: number;
}

export interface AppState {
    products: Product[];

    orders: Order[];
}

const initialState: AppState = {
    products: [
        {
            id: 1,
            name: "Product1",
            price: 10
        },
        {
            id: 2,
            name: "Product2",
            price: 20
        },
        {
            id: 3,
            name: "Product3",
            price: 30
        },
        {
            id: 4,
            name: "Product4",
            price: 40
        }
    ],
    orders: []
};

// "Redux" store with initial state
export const appStore = createStore(
    appStoreReducer,
    initialState
);