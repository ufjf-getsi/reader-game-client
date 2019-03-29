import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import JogadoresList from './JogadoresList';
import { jogadores } from './BDJogadores'
import CriarSalaDialog from './CriarSalaDialog';


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

    handleJogadorCreate = jogador => {
        this.setState(({ jogadores }) => ({
            jogadores: [...jogadores, jogador]
        }))
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
        const { jogador } = this.state;
        console.log(jogador.nome)
        
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

        const { jogador} = this.state
 

        return (
            <Fragment>
                <JogadoresList
                    jogadores={jogadores}
                    jogador={jogador}
                />
                <CriarSalaDialog
                 onJogadorCreate={this.handleJogadorCreate}
                 jogadores={jogadores}
                 />
            </Fragment>
        );
    }
}

CriarSala.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CriarSala);