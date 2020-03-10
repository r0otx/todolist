import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Divider from "@material-ui/core/Divider";
import SendIcon from "@material-ui/icons/Send";
import {addTodoTask} from "../../../redux/todo-reducer";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 500,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const TodoTaskInput = ({addTodoTask, id, ...props}) => {

    const classes = useStyles();

    let [state, setState] = useState([]);

    console.log(state);

    let handleSubmit = (data) => {
        addTodoTask(id, data.target.todoItem.value);
        data.preventDefault();
        data.target.todoItem.value = "";
    };

    let handleChange = (task) => {
        setState(task.target.value);
    };

    return (
        <Grid container justify="center">
            <form onSubmit={handleSubmit}>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        name="todoItem"
                        placeholder="Enter task"
                        inputProps={{ 'aria-label': 'Enter task' }}
                        onChange={handleChange}
                    />
                    <IconButton type="reset" className={classes.iconButton} aria-label="search">
                        <HighlightOffIcon />
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton color="primary" type="submit" className={classes.iconButton} aria-label="directions">
                        <SendIcon />
                    </IconButton>
                </Paper>
            </form>
        </Grid>
    );
};

export default TodoTaskInput;