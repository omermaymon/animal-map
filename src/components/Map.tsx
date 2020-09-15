import React, { useState } from "react";
import GoogleMap from 'google-map-react';
import { EventTypes } from '../EventTypes';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Event } from './Event'

interface IProps  {
  events: any[]
  toShow: any
  markers: any[]
  setMarkers: any
  setCordinates: any
}

const API_KEY = '';

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
    props.toShow(true);
    
  }
  
  props.events.forEach(element => {
      
    });  
    
    
    return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMap 
            bootstrapURLKeys={{
              key: API_KEY,
              language: 'he',
              libraries: 'places'
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          onClick={_onClick}>
            {props.markers}
          </GoogleMap>
        </div>  
      );
}) 
export default Map
