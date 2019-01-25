import React from 'react';
import { Table, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


const ProductTable = (props) => {
    const { classes } = props;
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

                                        <Fab  color="secondary" aria-label="Edit" className={classes.fab}>
                                            <EditIcon id={product.id} onClick={e => props.update(e, product)}>edit_icon</EditIcon>
                                        </Fab>
                                        <Fab  aria-label="Delete" className={classes.fab}>
                                            <DeleteIcon id={product.id} onClick={props.delete}/>
                                        </Fab>
                                        {/* <Button id={product.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={product.id} onClick={e => props.update(e, product)} color="warning">Update</Button> */}
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

ProductTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(ProductTable);