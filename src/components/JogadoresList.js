import React, { Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";



const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: "auto"
    }
};

export default ({
    jogadores,
    jogador: {
        id,
        nome = ""
    }
}) => (
        <Grid container>
            <Grid item xs={3}>
                <Paper style={styles.Paper}>
                    <Fragment>
                        <Typography
                            variant="headline"
                            style={{ textTransform: "capitalize" }}
                            align= "center"
                        >
                            Jogadores
                            </Typography>
                        <List component="ul">
                            {jogadores.map(({ nome }) => (
                                <ListItemText primary={nome} key={nome} />
                            ))}

                        </List>
                    </Fragment>
                </Paper>
            </Grid>
        </Grid>
    )