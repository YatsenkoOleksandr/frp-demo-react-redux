import { Order, AppState } from "../store/store";
import { Dispatch } from "redux";
import { AppAction, clearOrders } from "../actions/actions";
import { connect } from "react-redux";
import OrderList from "../components/orderlist";

export interface OrderListStateProps {
    orders: Order[];
}

export interface OrderListDispatchProps {
    clearAllOrders: () => void;
}

const mapStateToProps: (state: AppState) => OrderListStateProps =
    (state: AppState) => {
        return {
            orders: state.orders
        };
    };

const mapDispatchToProps: (dispatch: Dispatch) => OrderListDispatchProps =
    (dispatch: Dispatch) => {

        return {
            clearAllOrders: () => {
                dispatch(clearOrders());
            }
        };
    };

const OrderListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (OrderList);
export default OrderListContainer;