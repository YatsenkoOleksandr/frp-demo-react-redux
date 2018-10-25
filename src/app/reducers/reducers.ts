import { AppState, Order } from "../store/store";

import {
    AppAction,
    ActionToProcessProduct,
    ADD_PRODUCT_UNIT_TO_ORDERS,
    REMOVE_PRODUCT_UNIT_FROM_ORDERS,
    REMOVE_PRODUCT_FROM_ORDERS, CLEAR_ORDERS
} from "../actions/actions";

import { combineReducers, AnyAction, Reducer } from "redux";

const initialState: AppState = {
    orders: [],
    products: []
};

function addProductUnitToOrders(state: AppState, action: ActionToProcessProduct): AppState {
    if (!action.payload) {
        return state;
    }

    const productIsOrdered: Order[] = state.orders
        .filter((order: Order) => {
            if (order.productId === action.payload.productId) {
                return true;
            }
            return false;
        });

    if (productIsOrdered.length === 0) {
        return addNewProductUnitToOrders(state, action);
    }

    return updateProductCountInOrders(state, action);
}

function addNewProductUnitToOrders(state: AppState, action: ActionToProcessProduct): AppState {
    if (!action.payload) {
        return state;
    }

    const ordersWithNewProduct: Order[] = [
        ...state.orders,
        {
            productId: action.payload.productId, count: 1
        }];

    return Object.assign(
        {},
        state,
        // add new product to orders
        {
            orders: ordersWithNewProduct
        });
}

function updateProductCountInOrders(state: AppState, action: ActionToProcessProduct): AppState {
    if (!action.payload) {
        return state;
    }

    const ordersWithIncreasedProductCount: Order[] = state.orders
        .map((order: Order) => {
            if (order.productId !== action.payload.productId) {
                return order;
            }

            return {
                productId: order.productId,
                count: order.count + 1
            };
        });

    // copying state to another object-instance
    return Object.assign(
        {},
        state,
        {
            // increase count of product
            orders: ordersWithIncreasedProductCount
        });
}

function removeProductUnitFromOrders(state: AppState, action: ActionToProcessProduct): AppState {
    if (!action.payload) {
        return state;
    }

    const ordersWithRemovedProductUnit: Order[] = state.orders.map((order: Order) => {
        // omit if products are not equal or count eqaul to zero
        if (order.productId !== action.payload.productId) {
            return order;
        }
        if (order.count === 0) {
            return order;
        }

        // decrease count
        return {
            productId: order.productId,
            count: order.count - 1
        };
    });

    // copying state to another object-instance
    return Object.assign(
        {},
        state,
        {
            orders: ordersWithRemovedProductUnit
        }
    );
}

function removeProductFromOrders(state: AppState, action: ActionToProcessProduct): AppState {
    if (!action.payload) {
        return state;
    }

    const ordersWithRemovedProduct: Order[] = state.orders
    .filter((order: Order) => {
        if (order.productId !== action.payload.productId) {
            return true;
        }
        return false;
    });

    return Object.assign(
        {},
        state,
        {
            orders: ordersWithRemovedProduct
        }
    );
}

function clearOrders(state: AppState, action: AppAction): AppState {
    // remove all orders
    return Object.assign(
        {},
        state,
        {
            orders: []
        }
    );
}

function processProductInOrders(state: AppState, action: AppAction): AppState {
    const actionToProcessProduct: ActionToProcessProduct = action as ActionToProcessProduct;
    if (!actionToProcessProduct) {
        return state;
    }

    switch(actionToProcessProduct.type) {
        case ADD_PRODUCT_UNIT_TO_ORDERS:
            return addProductUnitToOrders(state, actionToProcessProduct);
        case REMOVE_PRODUCT_UNIT_FROM_ORDERS:
            return removeProductUnitFromOrders(state, actionToProcessProduct);
        case REMOVE_PRODUCT_FROM_ORDERS:
            return removeProductFromOrders(state, actionToProcessProduct);
        default:
            return state;
    }
}

function processOrders(state: AppState = initialState, action: AppAction): AppState {
    // additional checks that "action" is valid
    if (!action) {
        return state;
    }
    if(!action.type) {
        return state;
    }

    switch(action.type) {
        case CLEAR_ORDERS:
            return clearOrders(state, action);
        default:
            return processProductInOrders(state, action);
    }

    return state;
}

// use Redux to combine reducers
export const appStoreReducer = processOrders;