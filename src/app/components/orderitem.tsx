import * as React from "react";
import * as ReactDOM from "react-dom";
import { OrderItemStateProps, OrderItemDispatchProps } from "../containers/orderitem";

export interface OrderItemOwnProps {
    productId: number;
    count: number;
}

export default class OrderItem extends React.Component<OrderItemStateProps & OrderItemDispatchProps & OrderItemOwnProps> {
    render(): JSX.Element {
        return (
        <div className="orderItem">
            <label>Product:</label><label>{this.props.name}</label>
            <label>Count:</label><label>{this.props.count}</label>
            <button onClick={this.props.addProductUnitToOrders.bind(this)}>Add Unit</button>
            <button onClick={this.props.removeProductUnitFromOrders.bind(this)}>Remove Unit</button>
            <button onClick={this.props.removeProductFromOrders.bind(this)}>Remove Product</button>
        </div>);
    }


}