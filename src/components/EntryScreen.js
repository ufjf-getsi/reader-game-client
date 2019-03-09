import React, { Component, Fragment } from 'react'
import NavBar from "./NavBar"
import ImageGame from "./ImageGame";
import EntrarSala from './EntrarSala'
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';



const styles = theme => ({
    buttonSize: {
        margin: theme.spacing.unit,
        width: 290
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


class EntryScreen extends Component {

    handleCriarTela = () => {
        this.props.history.push('/criar')
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <NavBar />
                <ImageGame />
                <Button variant="contained"
                    size="large"
                    color="primary"
                    className={classes.buttonSize}
                    onClick={this.handleCriarTela}>
                    Criar Sala
                </Button>
                <br />
                <EntrarSala />

            </Fragment>
        );
    }
}

EntryScreen.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(EntryScreen);