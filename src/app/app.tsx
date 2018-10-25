import * as React from "react";
import * as ReactDOM from "react-dom";
import OrderStatusContainer from "./containers/orderstatus";
import OrderListContainer from "./containers/orderlist";
import ProductListContainer from "./containers/productlist";

export default class AppComponent extends React.Component {
    render(): JSX.Element {
        return (<div className="appComponent">
                <OrderStatusContainer />
                <br/>
                <OrderListContainer />
                <br/>
                <ProductListContainer />
            </div>);
    }
}