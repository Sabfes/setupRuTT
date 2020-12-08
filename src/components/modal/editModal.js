import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    bio: {
        display: "flex",
    },
    input: {
        margin: '10px',
    }
}));

export default function EditModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitHandler = (event) => {
        event.preventDefault()
        const changes = {}
        Object.values(event.target).forEach( el => {
            if (el.id && el.value) {
                changes[el.id] = el.value
            }
        })
        props.editHandler(props.id, changes)
        handleClose()
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Добавить пользователя</h2>
            <p id="simple-modal-description">Заполните все поля</p>
            <form onSubmit={submitHandler} className={classes.root} autoComplete="off">
                <div className={classes.bio}>
                    <TextField   className={classes.input} id="sName" label={props.sName} variant="outlined" >{props.sName}</TextField>
                    <TextField   className={classes.input} id="fName" label={props.fName} variant="outlined" />
                    <TextField   className={classes.input} id="mName" label={props.mName} variant="outlined" />
                </div>
                <TextField  className={classes.input} id="email"  label={props.email} variant="outlined" />
                <TextField  className={classes.input} id="password" label={props.password} variant="outlined" />
                <TextField  className={classes.input} id="phoneNumber"  label={props.phoneNumber} variant="outlined" />
                <TextField  className={classes.input} id="status" label={props.status} variant="outlined" />
                <Button type={'submit'} variant="contained" color="primary">
                    Cохранить изменения
                </Button>
            </form>

        </div>
    );

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary">
                отредактировать
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}