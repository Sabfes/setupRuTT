export const getCurrentTime = () => {
    const date = new Date()
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}
const editHandler = (id) => {
    const user = this.state.data.filter((el) => {
        const newUser = {}
        if (el.id === id) {
            newUser['id']= id
            newUser['email']= 'AUE VORAM'
            newUser['password']= 'AUE VORAM'
            newUser['phoneNumber'] = 'AUE VORAM'
            newUser['fName']= 'AUE VORAM'
            newUser['sName']= 'AUE VORAM'
            newUser['mName']= 'AUE VORAM'
            newUser['status']= 'AUE VORAM'
            newUser['dateOfCreate'] ='AUE VORAM'
            newUser['dateOfLastChange'] = getCurrentTime()
        }
        return newUser
    })
    console.log(id)
    this.setState({data: user})
}