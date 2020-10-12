import React, { useState } from "react";
import GoogleMap from 'google-map-react';
import { EventTypes } from '../EventTypes';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Event } from './Event'
import { isUndefined } from "util";
import SearchBox from "./SearchBox";
import PropTypes from 'prop-types';
import Marker from "./Marker";
import { AnyARecord } from "dns";


interface IProps  {
  events: any[]
  toShow: any
  markers: any[]
  setMarkers: any
  setCordinates: any
}



const API_KEY = 'AIzaSyAmu9nol12It2xvWk00g4NwocROPL2rFZs';


const defaultProps = {
    center: { lat: 32.06, lng: 34.82 },
    zoom: 13.54
}

const getColorByEventType = (eventType: string) => {
  switch (eventType) {
    case EventTypes.FleeingJackal:
      return 'yellow';
    case EventTypes.OffensiveJackal:
      return 'orange';
    case EventTypes.JackalHit:
      return 'red';
    default:
      return 'green';
  }
}



export const Map = React.memo<IProps>((props) => {

    const _onClick = (obj: any) => {
    console.log(obj.lat, obj.lng)
    let lat = obj.lat
    let lng = obj.lng
    //props.setMarkers(props.markers.concat(<Event lat= {lat} lng = {lng} text={"omer"}/>))
    props.setCordinates({lat: obj.lat, lng: obj.lng})
    //props.toShow(true);
    
  }
  
  props.events.forEach(element => {
      
    });  
    
    

  const [location, setLocation] =  React.useState({address:"דרך מצדה 6, באר שבע, ישראל",
  lat: 31.2591166,
  lng: 34.7955966})
  
    const [state, setState] = React.useState( {
      mapsApiLoaded: false,
      mapInstance: null,
      mapsapi: null,
    })
    const markers: any = [""];
    props.events.forEach(element => {
      
    });  
  const apiLoaded= (map:any, maps:any) => {
    setState({
      mapsApiLoaded: true,
      mapInstance: map,
      mapsapi: maps,
    });
  }
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position:any) => {
      setLocation({
        address:"",
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })     
  })
}
  
    return (
        <div style={{ height: '100vh', width: '100%' }}>
           {state.mapsApiLoaded && <SearchBox map={state.mapInstance} mapsapi={state.mapsapi} placeholder ={PropTypes.string} onPlacesChanged = {PropTypes.func} location = {location} setLocation = {setLocation} />}
          <GoogleMap 
            bootstrapURLKeys={{
              key: API_KEY,
              language: 'he',
              libraries: 'places'
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            center = {location}
            options={getMapOptions}
          onClick={_onClick}
          yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => {
              apiLoaded(map, maps);
            }} >
            {/* {props.markers} */}
            <script type="text/javascript" src="https://maps.google.com/maps/api/js?libraries=places&sensor=false"></script>
            <Marker
            lat={location.lat}
            lng={location.lng}
            name="My Marker"
            color="blue"
          />
           
          </GoogleMap>
                    


        </div>  
      );
}) 
export default Map
