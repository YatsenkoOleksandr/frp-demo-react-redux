import { Product, AppState } from "../store/store";
import { connect } from "react-redux";
import { ProductList } from "../components/productlist";

export interface ProductListStateProps {
    products: Product[];
}

const mapStateToProps: (state: AppState) => ProductListStateProps =
    (state: AppState) => {
        return {
            products: state.products
        };
    };

const ProductListContainer = connect(
    mapStateToProps
) (ProductList);
export default ProductListContainer;