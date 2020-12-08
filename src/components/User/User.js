import React, {Fragment, useState} from 'react'
import CardMini from "./CardMini/CardMini";
import OpenCard from "./OpenCard/OpenCard";

const User = (props) => {
    const [show, setShow] = useState(false)
    const showHandler = () => {
        setShow(prevState => !prevState)
    }

    return (
        <Fragment>
            {   !show
                ? <CardMini
                    status={props.status}
                    dateOfCreate={props.dateOfCreate}
                    fName={props.fName}
                    phoneNumber={props.phoneNumber}
                    onClick={showHandler}
                />
                : null
            }
            {   show ? <OpenCard {...props} editHandler={props.editHandler} onClick={showHandler}/> : null }
        </Fragment>

    )
}

export default User