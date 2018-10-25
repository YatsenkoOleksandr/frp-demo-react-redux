import * as React from "react";
import { OrderListStateProps, OrderListDispatchProps } from "../containers/orderlist";
import { Order } from "../store/store";
import OrderItemContainer from "../containers/orderitem";

export default class OrderList extends React.Component<OrderListStateProps & OrderListDispatchProps> {
    render(): JSX.Element {
        return (
            <div className="orderList">
                <button onClick={this.props.clearAllOrders.bind(this)}>Clear All Orders</button>
                <label>Orders:</label>
                <br/>
                {this.props.orders.map((order: Order) => {
                    return (<OrderItemContainer key={order.productId} productId={order.productId} count={order.count} />);
                })}
            </div>
        );
    }
}