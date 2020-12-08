import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import classes from './Header.module.css'
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Header = (props) => {
    const [disabledResetBtn, setDisabledBtn] = useState(true)
    const [status, setStatus] = useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    function searchHandler(event) {
        event.preventDefault()
        new Promise((resolve, reject)=> {
            (function(){
                props.resetSearchRes()
                resolve(true)
            })()
        }).then(res => {
            if (res) {
                props.searchHandler(event.target[0].value)
                event.target[0].value = ''
                setDisabledBtn(false)
            }
        })
    }

    function searchStatus(event) {
        event.preventDefault()
        new Promise((resolve, reject)=> {
            (function(){props.resetSearchRes();resolve(true)})()
        }).then(res => {
            if (res) {
                props.searchStatusHandler(event.target[0].value)
            }
        })
    }

    function resetHandler() {
        props.resetSearchRes()
        setDisabledBtn(true)
    }

    return (
        <div className={classes.Header}>
            <form onSubmit={searchHandler} className={classes.Header__form}>
                <TextField name={'field'} id="standard-search" label="Поиск по имени/тел" type="search" />
                <Button size="small" type={"submit"} color={'primary'} variant="contained">Найти</Button>
                <Button size="small" disabled={disabledResetBtn}  onClick={resetHandler} color={'primary'} variant="contained">Сбросить</Button>
            </form>

            <form onSubmit={searchStatus} className={classes.Header__form}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        onChange={handleChange}
                    >
                        <MenuItem value={'client'}>client</MenuItem>
                        <MenuItem value={'partner'}>partner</MenuItem>
                        <MenuItem value={'admin'}>admin</MenuItem>
                    </Select>
                </FormControl>
                <Button size="small" type={"submit"} color={'primary'} variant="contained">Найти</Button>
            </form>
        </div>
    )
}

export default Header