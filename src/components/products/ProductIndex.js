import React from 'react';
import ProductCreate from './ProductCreate';
import ProductTable from './ProductTable';
import ProductEdit from './ProductEdit';
import APIURL from '../../helpers/environment';




class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            updatePressed: false,
            productToUpdate: {}
        }
    }

    componentWillMount() {
        this.fetchProducts()
    }

    fetchProducts = () => {
        fetch(`${APIURL}/api/product`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })

            .then((res) => res.json())
            .then((logData) => {
                return this.setState({ products: logData })
            })

    }

    productUpdate = (event, product) => {
        fetch(`${APIURL}/api/product/${product.id}`, {
            method: 'PUT',
            body: JSON.stringify({ log: product }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })

            .then((res) => {
                this.setState({ updatePressed: false })
                this.fetchProducts();
            })
    }

    setUpdatedProduct = (event, product) => {
        this.setState({
            productToUpdate: product,
            updatePressed: true
        })
    }

    productDelete = (event) => {
        fetch(`${APIURL}/api/product/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ log: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })

            .then((res) => this.fetchProducts())
    }

    render() {
        const products = this.state.products.length >= 1 ?
            <ProductTable products={this.state.products} delete={this.productDelete} update={this.setUpdatedProduct} /> :
            <div></div>

        return (
            <div>

                <ProductCreate token={this.props.token} updateProductsArray={this.fetchProducts} />
                {products}
                {

                    this.state.updatePressed ? <ProductEdit t={this.state.updatePressed} update={this.productUpdate} product={this.state.productToUpdate} />
                        : <div></div>
                }

            </div>
        )
    }

}

export default ProductIndex;