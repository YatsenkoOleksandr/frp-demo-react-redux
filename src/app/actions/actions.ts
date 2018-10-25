// object to describe action
export interface AppAction {
    type: string;
    payload?: any;
}

export interface ActionToProcessProduct extends AppAction {
    payload: {
        productId: number;
    };
}

// action types

export const ADD_PRODUCT_UNIT_TO_ORDERS: string = "ADD_PRODUCT_TO_ORDERS";

export const REMOVE_PRODUCT_UNIT_FROM_ORDERS: string = "REMOVE_PRODUCT_UNIT_FROM_ORDERS";

export const REMOVE_PRODUCT_FROM_ORDERS: string = "REMOVE_PRODUCT_FROM_ORDERS";

export const CLEAR_ORDERS: string = "CLEAR_ORDERS";


// action creators

export function addProductUnitToOrders(productId: number): AppAction {
    return {
        type: ADD_PRODUCT_UNIT_TO_ORDERS,
        payload: {
            productId: productId
        }
    };
}

export function removeProductUnitFromOrders(productId: number): AppAction {
    return {
        type: REMOVE_PRODUCT_UNIT_FROM_ORDERS,
        payload: {
            productId: productId
        }
    };
}

export function removeProductFromOrders(productId: number): AppAction {
    return {
        type: REMOVE_PRODUCT_FROM_ORDERS,
        payload: {
            productId: productId
        }
    };
}

export function clearOrders(): AppAction {
    return {
        type: CLEAR_ORDERS
    };
}