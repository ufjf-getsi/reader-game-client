import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import JogadoresList from './JogadoresList';
import { jogadores } from './Store.js'


const styles = theme => ({
    buttonSize: {
        margin: theme.spacing.unit,
        width: 290
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        overflowY: "auto"
    }
});


class CriarSala extends Component {
    state = {
        jogadores,
        jogador: {},
        open: false
    }


    handleCriarSala = () => {
        this.setState({
            open: !this.state.open
        })
    };

    handleSubmit = () => {

    }

    render() {

        const { open, jogador } = this.state
        const { classes } = this.props
        return (
            <Fragment>
                <JogadoresList
                    jogadores={jogadores}
                    jogador={jogador}
                />
                <Button
                    className={classes.buttonSize}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={this.handleCriarSala}
                >
                    Adicionar jogador
                </Button>
                <Dialog open={open} onClose={this.handleCriarSala}>
                    <DialogTitle id="form-dialog-title">
                        Digite o nome do jogador
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            id="codigo"
                            label="Nome"
                            fullWidth
                            type="string"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Criar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

CriarSala.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CriarSala);