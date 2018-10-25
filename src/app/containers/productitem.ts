import { AppState, Order, Product } from "../store/store";
import ProductItem, { ProductItemOwnProps } from "../components/productitem";
import { Dispatch } from "redux";
import { ActionToProcessProduct, ADD_PRODUCT_UNIT_TO_ORDERS, addProductUnitToOrders } from "../actions/actions";
import { connect } from "react-redux";

export interface ProductItemStateProps {
    isOrdered(): boolean;
}

export interface ProductItemDispatchProps {
    addProductUnitToOrders: () => void;
}

const mapStateToProps: (state: AppState, props: ProductItemOwnProps) => ProductItemStateProps =
    (state: AppState, props: ProductItemOwnProps) => {

        const productIsOrdered: () => boolean = () => {
            const productInOrders: Order[] = state.orders
            .filter((order: Order) => {
                if (order.productId === props.id) {
                    return true;
                }
                return false;
            });
            return (productInOrders.length > 0);
        };

        return {
            isOrdered: productIsOrdered
        };
    };

const mapDispatchToProps: (dispatch: Dispatch, props: ProductItemOwnProps) => ProductItemDispatchProps =
    (dispatch: Dispatch, props: ProductItemOwnProps) => {
        return {
            addProductUnitToOrders: () => {
                dispatch(addProductUnitToOrders(props.id));
            }
        };
    };

const ProductItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductItem);
export default ProductItemContainer;