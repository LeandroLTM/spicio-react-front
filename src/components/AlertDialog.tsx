import React from 'react';
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,
        makeStyles} from '@material-ui/core';
import { Server } from '../NestApi';
type Props = {
    setOpen: Function,
    open: boolean,
    setApiDelete: Function,
    item: Server
}

export default (props: Props) => {
    const classes = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleCloseRemove = () => {
        props.setOpen(false);
        props.setApiDelete(props.item._id);
    };

    return (
    <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">{"Remove from your library"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove “Rocky IV” from your library? It contains a audio review and you will lose it if your remove.
            </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttons}>
            <Button className={classes.buttonRemove} onClick={handleCloseRemove} variant="contained" disableElevation>Remove</Button>
            <Button className={classes.buttonCancel} onClick={handleClose} variant="contained" disableElevation>Cancel</Button>
        </DialogActions>
    </Dialog>
  );
}


const useStyles = makeStyles({
    buttons:{
        display: 'flex',
        justifyContent: 'center'
    },
    buttonRemove: {
        background: '#FE6D8E',
        color: '#FFFFFF',
        borderRadius: '10px',
        width: '40%',
    },
    buttonCancel: {
        background: '#A1A1A1',
        color: '#FFFFFF',
        borderRadius: '10px',
        width: '40%'
    }
  })