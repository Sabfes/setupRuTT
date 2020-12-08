import React from 'react'
import classes from './MainContainer.module.css'
import User from "../User/User";
import SimpleModal from "../modal/modal";

const MainContainer = props => {
    return (
        <div className={classes.MainContainer}>
            <SimpleModal addNewUser={props.addNewUser}/>
            {
                props.data.map( (el, i) => {
                    return <User
                        editHandler={props.editHandler}
                        searchHandler={props.searchHandler}
                        deleteHandler={props.deleteHandler}
                        dateOfLastChange={el.dateOfLastChange || null}
                        dateOfCreate={el.dateOfCreate}
                        phoneNumber={el.phoneNumber}
                        password={el.password}
                        fName={el.fName}
                        sName={el.sName}
                        mName={el.mName}
                        status={el.status}
                        email={el.email}
                        key={i}
                        id={el.id}
                    />
                })
            }
        </div>
    )

}

export default MainContainer