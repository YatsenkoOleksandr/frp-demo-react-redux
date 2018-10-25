import * as React from "react";
import { ProductItemStateProps, ProductItemDispatchProps } from "../containers/productitem";

export interface ProductItemOwnProps {
    id: number;
    name: string;
    price: number;
}

export default class ProductItem extends React.Component<ProductItemOwnProps & ProductItemStateProps & ProductItemDispatchProps> {
    render(): JSX.Element {
        return (
            <div className="productItem">
                <label>Name:</label>
                <label>{this.props.name}</label>
                <label>Price:</label>
                <label>{this.props.price}</label>
                <button onClick={this.props.addProductUnitToOrders.bind(this)}
                        disabled={this.props.isOrdered()}>Add Product To Orders</button>
            </div>
        );
    }
}