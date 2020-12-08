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
        display: "flex",
        flexDirection: "column",
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

export default function SimpleModal(props) {
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
        const newUser = {}
        Object.values(event.target).forEach( el => {
            newUser[el.id] = el.value
        })
        props.addNewUser(newUser)
        handleClose()
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Добавить пользователя</h2>
            <p id="simple-modal-description">Заполните все поля</p>
            <form onSubmit={submitHandler} className={classes.root} autoComplete="off">
                <div className={classes.bio}>
                    <TextField required className={classes.input} id="sName" label="Фамилия" variant="outlined" />
                    <TextField required className={classes.input} id="fName" label="Имя" variant="outlined" />
                    <TextField required className={classes.input} id="mName" label="Отчество" variant="outlined" />
                </div>
                <TextField required className={classes.input} id="email" type={'email'} label="Email" variant="outlined" />
                <TextField required className={classes.input} id="password" type={'password'} label="Password" variant="outlined" />
                <TextField required className={classes.input} id="phoneNumber" type={'tel'} label="Тел(82201182290)" variant="outlined" />
                <TextField required className={classes.input} helperText='Client, partner, admin' id="status" label="Статус" variant="outlined" />
                <Button type={"submit"} size="small" color={'primary'} variant="contained">Добавить пользователя</Button>
            </form>

        </div>
    );

    return (
        <div>
            <Button onClick={handleOpen} size="large" color={'primary'} type={"submit"} variant="contained">
                Добавить пользователя
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