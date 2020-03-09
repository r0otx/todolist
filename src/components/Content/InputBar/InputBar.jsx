import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        },
    },
}));

const InputBar = (props) => {

    const classes = useStyles();

    let [state, setState] = useState([]);

    console.log(state);

    let handleSubmit = (data) => {
        props.addTodoPart(data.target.todoItem.value);
        data.preventDefault();
    };

    let handleChange = (task) => {
        setState(task.target.value);
    };

    return (
        <Grid container justify="center">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}
                  style={{marginTop: "15px"}}>
                <TextField id="outlined-basic"
                           label="Input you task"
                           variant="outlined"
                           name="todoItem"
                           autoFocus={true}
                           style={{width: "500px"}}
                           onChange={handleChange}
                           />
                <Button variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<SendIcon/>}
                        style={{height: "55px"}}
                        type="submit">
                    Add
                </Button>
            </form>
        </Grid>
    );
};

export default InputBar;