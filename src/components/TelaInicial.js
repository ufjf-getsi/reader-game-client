import React, { Component, Fragment } from 'react'
import ImageGame from "./Images/ImageGame";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    buttonSize: {
        margin: theme.spacing.unit,
        width: 290
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 290,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class TelaInicial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sala: ""
        }
    }

    handleEntrarSala() {
        this.props.history.push("/jogar/" + this.state.sala);
    }
    handleCriarSala() {
        this.props.history.push("/criar");
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Typography variant="h6" color="inherit">
                    Reader Game Client
          </Typography>
                <Fragment>
                    <ImageGame />

                    <TextField
                        required
                        id="standard-required"
                        label="Código da Sala"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        onChange={(e) => {
                            this.setState({ ...this.state, sala: e.target.value });
                        }}
                    />
                    <Button
                        className={classes.buttonSize}
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={this.handleEntrarSala.bind(this)}
                        disabled={(this.state.sala.length>5)?false:true}
                    >Entrar</Button>
                    <Button variant="contained"
                        size="large"
                        color="primary"
                        className={classes.buttonSize}
                        onClick={this.handleCriarSala.bind(this)}
                    >
                        Criar Sala
                        </Button>
                </Fragment>
            </div>
        );
    }
}

TelaInicial.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TelaInicial);