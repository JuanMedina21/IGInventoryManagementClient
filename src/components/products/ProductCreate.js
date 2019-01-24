import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';


class ProductCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            manufacturer: '',
            model: '',
            description: '',
            quantity: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/createproduct`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateProductsArray()
                this.setState({
                    id: '',
                    manufacturer: '',
                    model: '',
                    description: '',
                    quantity: ''
                })
            })
    }

    render() {
        return (
            <div>
                <h3>Enter a New Product</h3>
                <hr />
                
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="manufacturer">Manufacturer</Label>
                        <Input id="manufacturer" type="text" name="manufacturer" value={this.state.manufacturer} placeholder="enter manufacturer" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="model">Model</Label>
                        <Input type="text" name="model" id="model" value={this.state.model} onChange={this.handleChange} placeholder="Model">
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="quantity">Quantity</Label>
                        <Input id="quantity" type="text" name="quantity" value={this.state.quantity} placeholder="enter quantity" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default ProductCreate;