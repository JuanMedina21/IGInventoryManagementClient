import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import AddIcon from '@material-ui/icons/Add';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import './Product.css'


const styles = theme => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});



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
            <div className={styles.root} >
                <ExpansionPanel id="expand">
                    <ExpansionPanelSummary expandIcon={<AddIcon id="icon"/>}>
                        <Typography className={styles.heading} id="expandTitle">Add New Product</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Form inline onSubmit={this.handleSubmit} >
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input id="manufacturer" type="text" name="manufacturer" value={this.state.manufacturer} placeholder="Enter Manufacturer" onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input type="text" name="model" id="model" value={this.state.model} onChange={this.handleChange} placeholder="Enter Model">
                                </Input>
                            </FormGroup>
                            
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input id="description" type="text" name="description" value={this.state.description} placeholder="Enter Description" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input id="quantity" type="text" name="quantity" value={this.state.quantity} placeholder="Enter Quantity" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" id="button"> Submit </Button>
                        </Form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

ProductCreate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCreate);

