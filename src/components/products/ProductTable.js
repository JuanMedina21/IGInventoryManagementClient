import React from 'react';
// import { Table, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from 'reactstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Product.css'

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#3247B5',
        color: theme.palette.common.white,
        fontSize: 16
    },
    body: {
        fontSize: 15,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '85%',
        overflowX: 'auto',
        marginLeft: '7%',
        marginTop: '1.5%'
    },
    table: {
        width: '100%',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});


function ProductTable(props) {
    const { classes } = props;

    return (
        <div>
            <h3 id="tableTitle">Product History</h3>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead id="tableHeader">
                        <TableRow>
                            <CustomTableCell>ID #</CustomTableCell>
                            <CustomTableCell align="center">Manufacturer</CustomTableCell>
                            <CustomTableCell align="center">Model</CustomTableCell>
                            <CustomTableCell align="center">Description</CustomTableCell>
                            <CustomTableCell align="center">Quantity</CustomTableCell>
                            <CustomTableCell align="center"></CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.products.map((product, id) => {
                            return (
                                <TableRow className={classes.row} key={id}>
                                    <CustomTableCell>{product.id}</CustomTableCell>
                                    <CustomTableCell align="center">{product.manufacturer}</CustomTableCell>
                                    <CustomTableCell align="center">{product.model}</CustomTableCell>
                                    <CustomTableCell align="center">{product.description}</CustomTableCell>
                                    <CustomTableCell align="center">{product.quantity}</CustomTableCell>
                                    <CustomTableCell>
                                        <Fab aria-label="Edit" className={classes.fab} id="editIcon">
                                            <EditIcon id={product.id} onClick={e => props.update(e, product)}>edit_icon</EditIcon>
                                        </Fab>
                
                                        <Button id={product.id} onClick={props.delete} color="danger" className="delete">Delete</Button>
                                    </CustomTableCell>
                                </TableRow>
                            )
                        }
                        )}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}


ProductTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductTable);