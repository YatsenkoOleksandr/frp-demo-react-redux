import { Dispatch, AnyAction } from "redux";
import { Order, Product, AppState } from "../store/store";
import { connect } from "react-redux";
import OrderStatus from "../components/orderstatus";

export interface OrderStatusStateProps {
    totalOrdersPrice: number;
}

const mapStateToProps: (state: AppState) => OrderStatusStateProps
    = (state: AppState) => {

        const totalOrdersPriceSum: number = state.orders
            .reduce(
                (previousSum: number, currentOrder: Order) => {
                    const productsFromOrder: Product[] = state.products
                        .filter((product: Product) => {
                            if (product.id === currentOrder.productId) {
                                return true;
                            }
                            return false;
                        });

                    const product: Product | undefined = productsFromOrder.pop();
                    if (!product) {
                        return previousSum;
                    }

                    return previousSum + product.price * currentOrder.count;
                },
                0);

        return {
            totalOrdersPrice: totalOrdersPriceSum
        };
    };

const OrderStatusContainer = connect(
    mapStateToProps
) (OrderStatus);
export default OrderStatusContainer;