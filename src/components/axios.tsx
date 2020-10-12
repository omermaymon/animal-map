import axios from 'axios'



const url = "http://localhost:3001/events"


const getAll = () =>
    axios.get(`${url}`).then((response)=>response.data)


const addEvent = (event: any) =>
    axios.post(url, event).then((response)=>response.data)


export default {getAll, addEvent}