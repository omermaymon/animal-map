import React from "react";
import GoogleMapReact from 'google-map-react';
import { EventTypes } from '../EventTypes';

interface IProps  {
  events: any[]
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
    const markers: any = [];
    props.events.forEach(element => {
      
    });  
    return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact 
            bootstrapURLKeys={{
              key: API_KEY,
              language: 'he',
              libraries: 'places'
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {markers}
          </GoogleMapReact>
        </div>  
      );
}) 
export default Map