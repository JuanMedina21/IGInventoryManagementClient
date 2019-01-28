import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ProductEdit extends React.Component {
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

    componentWillMount() {
        this.setState({
            id: this.props.product.id,
            manufacturer: this.props.product.manufacturer,
            model: this.props.product.model,
            description: this.props.product.description,
            quantity: this.props.product.quantity
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Enter New Product</ModalHeader>
                    <ModalBody>
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
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}

export default ProductEdit;



