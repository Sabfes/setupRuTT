import React from 'react'
import classes from './OpenCard.module.css'
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Phone';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ScheduleIcon from '@material-ui/icons/Schedule';
import UpdateIcon from '@material-ui/icons/Update';
import EditModal from "../../modal/editModal";

const OpenCard = (props) => {
    const deleteFunc = () => {
        props.deleteHandler(props.id)
        props.onClick()
    }
    return (
        <Card id={props.id} className={classes.OpenCard} variant="outlined">
            <CardContent>
                <CardActions>
                    <IconButton
                        onClick={props.onClick}
                        className={classes.CloseBtn}
                        aria-label="delete"
                    >
                        <CloseIcon />
                    </IconButton>
                </CardActions>

                <div className={classes.OpenCard__info}>
                    <div>
                        <span><EmailIcon /> {props.email} </span>
                        <span><LockIcon/> {props.password}</span>
                    </div>
                    <span><PhoneIcon />{props.phoneNumber}</span>
                    <div>
                        <span><PermIdentityIcon/>{props.status} </span>
                        <span>{props.sName} </span>
                        <span>{props.fName} </span>
                        <span>{props.mName}</span>
                    </div>
                    <span><ScheduleIcon/>date of create: {props.dateOfCreate}</span>
                    <span><UpdateIcon/>last change: {props.dateOfLastChange}</span>
                </div>
            </CardContent>
            <CardActions>
                <EditModal
                    editHandler={props.editHandler}
                    dateOfCreate={props.dateOfCreate}
                    phoneNumber={props.phoneNumber}
                    password={props.password}
                    fName={props.fName}
                    sName={props.sName}
                    mName={props.mName}
                    status={props.status}
                    email={props.email}
                    id={props.id}
                />
                <Button onClick={ deleteFunc } variant="contained" color="secondary">
                    Удалить
                </Button>
            </CardActions>
        </Card>
    )
}

export default OpenCard