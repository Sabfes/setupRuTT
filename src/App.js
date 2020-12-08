import './App.css';
import Header from "./components/Header/Header";
import React from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import {getCurrentTime} from "./utils/utils";

class App extends React.Component {
    state = {
        data: [
            {id:0, email: 'test@mail.ru', password: 'pas123456', phoneNumber: '89123453780', fName: 'Dima', sName: 'Ivanov', mName: 'Ivanovich', status: 'client', dateOfCreate: '22.01.2020',},
            {id:1, email: 'test@mail.ru', password: 'pas123456', phoneNumber: '89123453780', fName: 'Ira', sName: 'Ivanov', mName: 'Ivanovich', status: 'client', dateOfCreate: '22.01.2020',},
            {id:2, email: 'test@mail.ru', password: 'pas123456', phoneNumber: '86723452780', fName: 'Petr', sName: 'Ivanov', mName: 'Ivanovich', status: 'partner', dateOfCreate: '22.01.2020',},
            {id:3, email: 'test@mail.ru', password: 'pas123456', phoneNumber: '82323453780', fName: 'Dima', sName: 'Ivanov', mName: 'Ivanovich', status: 'admin', dateOfCreate: '22.01.2020',},
            {id:4, email: 'test@mail.ru', password: 'pas123456', phoneNumber: '89123453780', fName: 'Misha', sName: 'Ivanov', mName: 'Ivanovich', status: 'client', dateOfCreate: '22.01.2020',},
            {id:5, email: 'test@mail.ru', password: 'pas123456', phoneNumber: '89123453780', fName: 'Den', sName: 'Ivanov', mName: 'Ivanovich', status: 'client', dateOfCreate: '22.01.2020',},
            {id:6, email: 'test@mail.ru', password: 'pas123456', phoneNumber: '89113453780', fName: 'Kostyan', sName: 'Ivanov', mName: 'Ivanovich', status: 'partner', dateOfCreate: '22.01.2020',},
            {id:7, email: 'test@mail.ru', password: 'pas123456', phoneNumber: '89103453780', fName: 'Dimasta', sName: 'Ivanov', mName: 'Ivanovich', status: 'admin', dateOfCreate: '22.01.2020',},
        ],
        prevState: null,
    }
    componentDidMount() {
        const prevState = this.state.data
        localStorage.setItem('prevState', JSON.stringify(prevState))
    }

    render() {

        const deleteHandler = (id) => {
            const res = this.state.data.filter(i => i.id !== id)
            localStorage.setItem('prevState', JSON.stringify(res))
            this.setState({data: res})
        }

        const searchStatusHandler = (value) => {
            const searchRes = this.state.data.filter(i => i.status === value)
            this.setState({data: searchRes})
        }

        const searchHandler = (value) => {
            const searchRes = this.state.data.filter(i => i.phoneNumber === value || i.fName === value)
            this.setState({data: searchRes})
        }

        const resetSearchRes = () => {
            const prevState = JSON.parse(localStorage.getItem('prevState'))
            this.setState({data: prevState})
        }

        const addNewUser = (user) => {
            console.log(user)
            const newUser = {
                id: this.state.data.length,
                email: user.email,
                password: user.password,
                phoneNumber: user.phoneNumber,
                fName: user.fName,
                sName: user.sName,
                mName: user.mName,
                status: user.status,
                dateOfCreate: getCurrentTime(),
            }
            this.setState({data: [...this.state.data, newUser]})
        }

        const editHandler = (id, changes) => {
            if (Object.keys(changes).length === 0) {
                return null
            }
            const newData = this.state.data.map((el) => {
                if (+el.id === +id) {
                    return {
                        id: id,
                        email: changes.email || el.email,
                        password: changes.password || el.password,
                        phoneNumber: changes.phoneNumber || el.phoneNumber,
                        fName: changes.fName || el.fName,
                        sName: changes.sName || el.sName,
                        mName: changes.mName || el.mName,
                        status: changes.status || el.status,
                        dateOfCreate: el.dateOfCreate,
                        dateOfLastChange: getCurrentTime(),
                    }
                }
                return el
            })
            this.setState({data: newData})
        }

        return (
            <div className="App">
                <Header searchStatusHandler={searchStatusHandler} resetSearchRes={resetSearchRes} searchHandler={searchHandler}/>
                <MainContainer editHandler={editHandler} addNewUser={addNewUser} data={this.state.data} deleteHandler={deleteHandler}/>
            </div>
        );
    }
}

export default App;
