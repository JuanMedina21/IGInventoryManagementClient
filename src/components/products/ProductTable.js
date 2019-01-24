import React from 'react';
import { Table, Button } from 'reactstrap';


const ProductTable = (props) => {

    return (
        <div>
            <h3>Product History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.map((product, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.manufacturer}</td>
                                    <td>{product.model}</td>
                                    <td>{product.description}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <Button id={product.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={product.id} onClick={e => props.update(e, product)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ProductTable;