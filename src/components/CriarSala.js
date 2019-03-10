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
        jogador: {
            nome: ""
        },
        open: false
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

    handleJogadorCreate = jogador =>
        this.setState(({ jogadores }) => ({
            jogadores: [...jogadores, jogador]
        }));

    handleSubmit = () => {
        const { jogador } = this.state;
        console.log(jogador.nome)
        this.handleJogadorCreate({
            ...jogador,
            id: jogador.nome.toLowerCase()
            //id: jogador.nome.toLocaleLowerCase().replace(/ /g, "-"),
        })
        console.log(jogador.nome)
        console.log(jogadores)
        this.setState({
            open: false,
            jogador: {
                id: "",
                nome: ""
            }
        });
        console.log(jogador)
    }

    render() {

        const { jogador, open,
            jogador: { nome } } = this.state
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
                            label="Nome"
                            onChange={this.handleChange("nome")}
                            value={nome}
                            fullWidth
                            type="string"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
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

CriarSala.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CriarSala);