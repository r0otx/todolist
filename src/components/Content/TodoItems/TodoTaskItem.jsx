import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import DeleteIcon from '@material-ui/icons/Delete';
import Preloader from "../../../common/Preloader";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const TodoTaskItem = ({getTodoTasks, delTodoTask, id, ...props}) => {

    const classes = useStyles();

    useEffect(() => {
        getTodoTasks(id);
    }, [getTodoTasks]);

    const delTask = (listId, taskId) => {
        delTodoTask(listId, taskId);
    };

    if (props.todoTask.length === 0) {
        return (
            <div style={{marginBottom: "15px"}}>
                <Preloader/>
            </div>
        );
    }

    return (
        <div>
            <div className={classes.demo}>
                {props.todoTask.map(item =>
                {if (id === item.todoListId) {
                    return (
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <ListIcon />
                                </ListItemAvatar>
                                <ListItemText primary={`${item.title}`} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="done">
                                        <DoneIcon />
                                    </IconButton>
                                    <IconButton onClick={() => delTask(item.todoListId, item.id)} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    )
                }}
                )}
            </div>
        </div>
    );
};

export default TodoTaskItem;