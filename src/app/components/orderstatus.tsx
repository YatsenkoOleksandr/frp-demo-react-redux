import * as React from "react";
import { OrderStatusStateProps } from "../containers/orderstatus";

export default class OrderStatus extends React.Component<OrderStatusStateProps> {
    render(): JSX.Element {
        return (
            <div className="orderStatus">
                <label>Total Orders Price:</label>
                <label>{this.props.totalOrdersPrice}$</label>
            </div>
        );
    }
}
