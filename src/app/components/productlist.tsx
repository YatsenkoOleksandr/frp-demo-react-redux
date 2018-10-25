import * as React from "react";
import { ProductListStateProps } from "../containers/productlist";
import { Product } from "../store/store";
import ProductItemContainer from "../containers/productitem";

export class ProductList extends React.Component<ProductListStateProps> {
    render(): JSX.Element {
        return (
            <div className="productList">
                <label>Products:</label>
                <br/>
                {this.props.products.map((product: Product) => {
                    return (<ProductItemContainer key={product.id} id={product.id} name={product.name} price={product.price}/>);
                })}
            </div>
        );
    }
}