import React, {useState} from 'react';
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
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = useState({phoneNumber: '', password: ''})
    const [errors, setErrors] = useState({phoneNumber: '', password: ''})

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const validate = () => {
        let temp = {}
        temp.phoneNumber = values.phoneNumber.length === 10 ? '' : 'Телефон только 11 чисел'
        temp.password = values.password.length > 4 ? '' : 'Пароль больше 5 цифр'
        setErrors({
            ...temp
        })
    }
    console.log(errors)
    const InputChangehandle = (e) => {
        const {id, value} = e.target
        setValues({...values, [id]: value})
        validate()
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.editHandler(props.id, values)
        setValues({phoneNumber: '', password: '',})
        handleClose()
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Добавить пользователя</h2>
            <p id="simple-modal-description">Заполните все поля</p>
            <form onSubmit={submitHandler} className={classes.root} autoComplete="off">
                <div className={classes.bio}>
                    <TextField
                        className={classes.input}
                        type={'text'}
                        id="sName"
                        label={props.sName}
                        placeholder={'Фамилия'}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.input}
                        id="fName"
                        label={props.fName}
                        placeholder={"Имя"}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.input}
                        id="mName"
                        label={props.mName}
                        placeholder={'Отчество'}
                        variant="outlined"
                    />
                </div>
                <TextField
                    className={classes.input}
                    id="email"
                    label={props.email}
                    placeholder={'email'}
                    variant="outlined"
                />
                <TextField
                    error={errors.password === '' ? false : true}
                    helperText={errors.password === '' ? null : errors.password }
                    className={classes.input}
                    id="password"
                    label={props.password}
                    placeholder={'password'}
                    variant="outlined"
                    onChange={InputChangehandle}
                />
                <TextField
                    error={errors.phoneNumber === '' ? false : true}
                    helperText={errors.phoneNumber === '' ? null : errors.phoneNumber }
                    className={classes.input}
                    id="phoneNumber"
                    label={props.phoneNumber}
                    placeholder={'Телефон'}
                    variant="outlined"
                    onChange={InputChangehandle}
                />
                <TextField
                    helperText='Client, partner, admin'
                    className={classes.input}
                    id="status"
                    label={props.status}
                    placeholder={'status'}
                    variant="outlined"
                />
                <Button
                    type={'submit'}
                    variant="contained"
                    color="primary"
                >
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