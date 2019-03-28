import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import { jogadores } from './BDJogadores'


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

class CriarSalaDialog extends Component {
    state = {
        jogadores,
        jogador: {
            nome: ""
        },
        open: false
    }

    handleClose= ()=>{
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = nome => ({ target: { value } }) => {
        this.setState({
            jogador: {
                ...this.state.jogador,
                [nome]: value
            }
        });
    };

    handleCriarSala = () => {
        this.setState({
            open: !this.state.open
        })
    };

    handleSubmit = () => {
        const{jogador} = this.state;
        
        this.props.onJogadorCreate({
            ...jogador,
            id: jogador.nome.toLocaleLowerCase().replace(/ /g, "-")
        })
        this.setState({
            open: false,
            jogador:{
                nome: ""
            }
        })
    }

    render() {

        const {open,
            jogador: { nome } } = this.state
        const { classes } = this.props
        return (
            <Fragment>
                <Button
                    className={classes.buttonSize}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={this.handleCriarSala}
                >
                    Adicionar jogador
                </Button>
                <br/>
                <Button
                    className={classes.buttonSize}
                    variant="contained"
                    size="large"
                    color="primary"
                    
                >
                    Criar
                </Button>
                <Dialog open={open} onClose={this.handleCriarSala}>
                    <DialogTitle id="form-dialog-title">
                        Digite o nome do jogador
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            label="Nome"
                            onChange={this.handleChange("nome")}
                            value={nome}
                            fullWidth
                            type="string"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Criar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

CriarSalaDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CriarSalaDialog);