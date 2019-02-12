import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

var texto1 = "Questao 1"
var texto2 = "Questao 2"
var texto3 = "Questao 3"
var texto4 = "Questao 4"
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
        width: 290
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    }
});

function ButtonSizes(props) {
    const { classes } = props;
    return (
        <div>
            <div>
                <Button
                    id="questao1"
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.margin}
                >
                    {texto1}
                </Button>
            </div>
            <div>
                <Button
                    id="questao2"
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.margin}
                >
                    {texto2}
                </Button>
            </div>
            <div>
                <Button
                    id="questao3"
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.margin}
                >
                    {texto3}
                </Button>
            </div>
            <div>
                <Button
                    id="questao4"
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.margin}

                >
                    {texto4}                   
                </Button>

            </div>
        </div>
    );
}

ButtonSizes.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonSizes);