import React, { useState, useEffect } from 'react';
import Map from "./components/Map";
import Form from "./components/Form"
import { Button } from '@material-ui/core';
import axios from 'axios'
import Filter from './components/Filter'
import { getAllByAltText } from '@testing-library/react';
import service from './components/axios'


export interface cordi{
    lat: number | undefined
    lng: number | undefined
}

// export interface Fform {
//     address: string
//     date: Date
//     animal: string
//     NumOfAnimals: number
//     typeOfEvent: string
//     nameOfperson: string
//     phone: string
//     lat: number
//     lng: number
//     
// }

const App = React.memo(()=>{
    const [form, setForm] = useState({address:"", date: new Date(), animal: "Cat", numOfAnimals: 0, typeOfEvent: "",
                                    nameOfPerson: "", phone: "", lat: 0, lng: 0, feederName: "", feederPhone: "", sterlizedCats: 0, unsterlizedCats: 0 })
    const [events, setEvents] = useState<object[]>([])
    const [show, setShow] = useState<boolean>(false)
    const [markers, setMarkers] = useState<object[]>([])  
    const [cordinates, setCordinates] = useState<cordi>({lat: undefined, lng: undefined})
    const [animalFilter, setAnimalFilter] = useState<string>("")
    const [eventFilter, setEventFilter] = useState<string>("")
    const [startDateFilter, setStartDateFilter] = useState<Date>()
    const [endDateFilter, setEndDateFilter] = useState<Date>()
    
    console.log(`this is markers:`, markers)
    useEffect(() => {
        console.log('effect')
        service.getAll().then((event) => setMarkers(event))
      }, [])
    
    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log("im in handle1!!!!!!!!!!!")
        service.addEvent(form).then((event) => {setMarkers(markers.concat(form)); setShow(false) }).catch((error)=>console.log(error))
        
        
    }  
    if (show){
        return <Form cordinates={cordinates} setShow = {setShow} form={form} setForm= {setForm} handleSubmit = {handleSubmit}/>
    }
    else{
        return (
                <div>
                    <div>
                        <Button variant="contained" onClick={() => setShow(!show)}>Fill a form</Button>
                    </div>
                    <div>
                        <Filter animalFilter={animalFilter} setAnimalFilter={setAnimalFilter} eventFilter={eventFilter}
                        setEventFilter={setEventFilter} startDateFilter={startDateFilter} setStartDateFilter={setStartDateFilter} 
                        endDateFilter={endDateFilter} setEndDateFilter={setEndDateFilter}/>
                    </div>
                    <div>
                    <Map events={events} toShow = {setShow} markers = {markers} setMarkers = {setMarkers} setCordinates = {setCordinates} />
                    </div>
                </div>    )
    }})


export default App;

