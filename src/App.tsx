import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./components/Map";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  import Form from "./components/Form"

export interface cordi{
    lat: number | undefined
    lng: number | undefined
}



const App = React.memo(()=>{
    const [events, setEvents] = useState<object[]>([])
    const [show, setShow] = useState<boolean>(false)
    const [markers, setMarkers] = useState<object[]>([])  
    const [cordinates, setCordinates] = useState<cordi>({lat: undefined, lng: undefined})
    

    
    
    if (show){
        return <Form cordinates={cordinates} setShow = {setShow}/>
    }
    else{
        return (<Map events={events} toShow = {setShow} markers = {markers} setMarkers = {setMarkers} setCordinates = {setCordinates} />)
    }
        
})


export default App;

