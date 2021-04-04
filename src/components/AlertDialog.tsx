import React from 'react';
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,
        makeStyles} from '@material-ui/core';
type Props = {
    setOpen: Function,
    open: boolean
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

export default (props: Props) => {
    const classes = useStyles();

    const handleClose = () => {
        props.setOpen(false);
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
            <Button className={classes.buttonRemove} onClick={handleClose} variant="contained" disableElevation>Remove</Button>
            <Button className={classes.buttonCancel} onClick={handleClose} variant="contained" disableElevation>Cancel</Button>
        </DialogActions>
    </Dialog>
  );
}