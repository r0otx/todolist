import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Preloader from "../../../common/Preloader";
import TodoItemPartEdit from "./TodoItemPartEdit/TodoItemPartEdit";
import TodoTaskItem from "./TodoTaskItem";
import TodoTaskInputContainer from "./TodoTaskInputContainer";
import ListIcon from "@material-ui/icons/List";

const useStyles = makeStyles({
    root: {
        width: 610,
        marginBottom: 30,
        marginTop: 30
    },
});

const TodoItems = ({renameTodoPart, delTodoPart, getTodoPart, getTodoTasks, delTodoTask, ...props}) => {

    useEffect(() => {
        getTodoPart();
    }, [getTodoPart]);

    const classes = useStyles();

   if (props.todoItem.todoItem.length === 0) {
        return (
            <div style={{marginTop: "50px"}}>
                <Preloader/>
            </div>

        );
    };

    return (
        <Grid container justify="center">
            <div className={classes.root}>
                {props.todoItem.todoItem.map(item =>
                    <ExpansionPanel key={item.id}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-label="Expand"
                            aria-controls={`additional-actions${item.id}-content`}
                            id={`additional-actions${item.id}-header`}>
                            <FormControlLabel
                            aria-label="Acknowledge"
                            control={<ListIcon />}
                            label={item.title}
                        />
                            <TodoItemPartEdit id={item.id} renameTodoPart={renameTodoPart} delTodoPart={delTodoPart}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <TodoTaskInputContainer id={item.id}/>
                        </ExpansionPanelDetails>
                        <TodoTaskItem id={item.id}
                                          todoTask={props.todoItem.todoTask}
                                          getTodoTasks={getTodoTasks}
                                          delTodoTask={delTodoTask}/>
                    </ExpansionPanel>
                )}
            </div>
        </Grid>
    );
};

export default TodoItems;