import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Preloader = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="center">
            <CircularProgress />
            </Grid>
        </div>
    );
};

export default Preloader;