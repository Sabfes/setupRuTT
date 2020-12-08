import React from 'react'
import classes from './CardMini.module.css'
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const CardMini = (props) => {
    return (
        <Card className={classes.CardMini} variant="outlined">
            <Button className={classes.CardMini__btn} onClick={props.onClick} variant="contained" color="default">
                Посмотреть
            </Button>
            <CardContent className={classes.CardMini__info}>
                <span className={classes.marginR10}>{props.fName}</span>
                <span className={classes.marginR10}>{props.phoneNumber}</span>
                <span className={classes.marginR10}>{props.status}</span>
                <span>{props.dateOfCreate}</span>
            </CardContent>

        </Card>
    )
}

export default CardMini