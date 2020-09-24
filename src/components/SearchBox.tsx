import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

interface IProps  {
    map: any
    mapsapi: any
    placeholder: any,
    onPlacesChanged: any
    location: {
        address:any
        lat: any
        lng: any
      }
      setLocation: any
      myLoc:any
      setMyLoc:any
  }

const SearchBox = (props:any) =>{
const [myLoc, setMyLoc] = React.useState("")
    // const onPlacesChanged = () => {
  //   props.onPlacesChanged(props.map.getPlaces());
  // }
// return <input placeholder={props.placeholder} type="text"/>
    //return (<input ref="input"{...props} type="text"/>);

    
    const handleAddress = (address:string) => {
      console.log(address)
      setMyLoc(address)
    }
  
    const handleLatLng = async (address: string) => {
      setMyLoc(address)
      const results = await geocodeByAddress(address);
      const latLong = await getLatLng(results[0]);
      console.log(latLong.lat, latLong.lng  )
      props.setLocation({address:myLoc, lat:latLong.lat, lng: latLong.lng})
    } 

    return (
      <div>
                  <PlacesAutocomplete
                  value={myLoc}
                  onChange={handleAddress}
                  onSelect={handleLatLng}
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
            )}
          </PlacesAutocomplete>
                
        </div>
    );
  }



export default SearchBox;

// export default class SearchBox extends React.Component {
//   static propTypes = {
//     placeholder: React.PropTypes.string,
//     onPlacesChanged: React.PropTypes.func
//   }
//   render() {
//     return <input ref="input" {...this.props} type="text"/>;
//   }
//   onPlacesChanged = () => {
//     if (this.props.onPlacesChanged) {
//       this.props.onPlacesChanged(this.searchBox.getPlaces());
//     }
//   }
//   componentDidMount() {
//     var input = React.findDOMNode(this.refs.input);
//     this.searchBox = new google.maps.places.SearchBox(input);
//     this.searchBox.addListener('places_changed', this.onPlacesChanged);
//   }
//   componentWillUnmount() {
//     this.searchBox.removeListener('places_changed', this.onPlacesChanged);
//   }
// }