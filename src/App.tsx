import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./components/Map";

const App = React.memo(()=>{
    const [events, setEvents] = useState<object[]>([])
    

    return(<Map events={events}/>)
})


export default App;
