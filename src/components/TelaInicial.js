import React, { Component, Fragment } from 'react'
import NavBar from "./NaoUsados/NavBar"
import ImageGame from "./Images/ImageGame";
import EntrarSala from './EntrarSalaDialog'
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const styles = theme => ({
    buttonSize: {
        margin: theme.spacing.unit,
        width: 290
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


class TelaInicial extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <ImageGame />
                <Link to={{
                    pathname: '/criar'
                }}>
                    <Button variant="contained"
                        size="large"
                        color="primary"
                        className={classes.buttonSize}>
                        Criar Sala
                        </Button>
                </Link>

                <br />
                <EntrarSala />

            </Fragment>
        );
    }
}


TelaInicial.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TelaInicial);