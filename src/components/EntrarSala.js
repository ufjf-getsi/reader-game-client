import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

const styles = theme => ({
    buttonSize: {
        margin: theme.spacing.unit,
        width: 290
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


class EntrarSala extends Component {
    state = {
        open: false
    }

 
    handleEntrarSala = () => {
        this.setState({
            open: !this.state.open
        })
    };

    handleSubmit = () =>{
        
    }

    render() {
        const { open } = this.state
        const {classes} = this.props
        return (
            <Fragment>
                <Button
                    className={classes.buttonSize}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={this.handleEntrarSala}
                >
                    Entrar
                </Button>
                <Dialog open={open} onClose={this.handleEntrarSala}>
                    <DialogTitle id="form-dialog-title">
                        Entrar em uma sala
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Digite o Código da Sala
                        </DialogContentText>

                        <TextField
                            autoFocus
                            id="codigo"
                            label="Código"
                            fullWidth
                            type="string"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary">
                            Entrar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

EntrarSala.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(EntrarSala);