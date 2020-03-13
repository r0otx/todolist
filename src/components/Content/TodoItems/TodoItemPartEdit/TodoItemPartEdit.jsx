import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const TodoItemPartEdit = ({renameTodoPart, delTodoPart, ...props}) => {

    const [open, setOpen] = useState(false);

    let deleteTodo = (id) => {
        delTodoPart(id);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setOpen(false);
    };

    const handleSubmit = (data) => {
        renameTodoPart(props.id, data.target.name.value);
        data.preventDefault();
    };

    return (
        <div>
            <DeleteForeverIcon onClick={() => deleteTodo(props.id)}/>
            <CreateIcon onClick={handleClickOpen}/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit name task part</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            Enter new name to you task group
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="input"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" onClick={handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default TodoItemPartEdit;