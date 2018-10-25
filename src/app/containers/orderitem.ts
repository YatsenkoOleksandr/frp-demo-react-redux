import { connect } from "react-redux";
import { AppState, Product } from "../store/store";
import OrderItem, { OrderItemOwnProps } from "../components/orderitem";
import { Dispatch, AnyAction } from "redux";
import {
    AppAction, addProductUnitToOrders, removeProductUnitFromOrders, removeProductFromOrders
} from "../actions/actions";



export interface OrderItemDispatchProps {
    addProductUnitToOrders: () => void;
    removeProductUnitFromOrders: () => void;
    removeProductFromOrders: () => void;
}

export interface OrderItemStateProps {
    name: string;
}

const mapDispatchToProps: (dispatch: Dispatch, props: OrderItemOwnProps) => OrderItemDispatchProps
    = (dispatch: Dispatch, props: OrderItemOwnProps) => {

        const processProductInOrders: (actionCreator: (productId: number) => AppAction) => void =
            (actionCreator: (productId: number) => AppAction) => {
                dispatch(actionCreator(props.productId));
            };

        return {
            addProductUnitToOrders: () => {
                processProductInOrders(addProductUnitToOrders);
            },
            removeProductUnitFromOrders: () => {
                processProductInOrders(removeProductUnitFromOrders);
            },
            removeProductFromOrders: () => {
                processProductInOrders(removeProductFromOrders);
            }
        };
    };

const mapStateToProps: (state: AppState, props: OrderItemOwnProps) => OrderItemStateProps
    = (state: AppState, props: OrderItemOwnProps) => {
        const productName: () => string = () => {
            const filteredProducts: Product[] = state.products
                .filter((product: Product) => {
                    if (product.id === props.productId) {
                        return true;
                    }
                    return false;
                });

            const product: Product | undefined = filteredProducts.pop();
            if (!product) {
                return "";
            }

            return product.name;
        };

        return {
            name: productName()
        };
    };

const OrderItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderItem);
export default OrderItemContainer;