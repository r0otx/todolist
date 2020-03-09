import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';
import Preloader from "../../../common/Preloader";
import TodoItemPartEdit from "./TodoItemPartEdit/TodoItemPartEdit";

const useStyles = makeStyles({
    root: {
        width: 610,
        marginBottom: 30,
        marginTop: 30
    },
});

const TodoItems = ({renameTodoPart, delTodoPart, getTodoPart, ...props}) => {

    useEffect(() => {
        getTodoPart();
    }, [getTodoPart]);

    const classes = useStyles();

    let deleteTodo = (id) => {
        delTodoPart(id);
    };

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
                                onClick={() => deleteTodo(item.id)}
                                onFocus={event => event.stopPropagation()}
                                control={<DeleteForeverIcon/>}
                                label={item.title}
                            />
                            <TodoItemPartEdit id={item.id} renameTodoPart={renameTodoPart}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography color="textSecondary">
                                The click event of the nested action will propagate up and expand the panel unless you
                                explicitly stop it.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )}
            </div>
        </Grid>
    );
};

export default TodoItems;