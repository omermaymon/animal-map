
import React, { SyntheticEvent, useState } from 'react';
import { cordi } from '../App';
import {
    makeStyles,
    StylesProvider,
    ThemeProvider,
  } from "@material-ui/core/styles";
import { Button, Input, InputLabel, NativeSelect, TextField } from '@material-ui/core';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import API_KEY from "./Map";

interface IProps {
    cordinates: cordi
    setShow: any
    form: any
    setForm: any
  }






const Form = React.memo<IProps>((props)=>{
  
  
  const handleAddress = (address:string) => {
    props.setForm({...props.form, address:address})
  }

  const handleLatLng = async (address: string) => {
    const results = await geocodeByAddress(address);
    const latLong = await getLatLng(results[0]);
    props.setForm({...props.form, lat:latLong.lat, lng: latLong.lng})
  } 

  const handleDateHour = (event: any) => {
    console.log(event.target.value)
    props.setForm({...props.form, date: event.target.value})
  }

  const handleAnimal = (event: any) => {
    console.log(event.target.value)
    props.setForm({...props.form, animal: event.target.value})
  }

  const handlenumOfAnimals = (event: any) => {
    console.log(event.target.value)
    props.setForm({...props.form, numOfAnimals: event.target.value})
  }

  const handleTypeOfEvent = (event: any) => {
    props.setForm({...props.form, typeOfEvent: event.target.value})
  }

  const handlePerson = (event: any) => {
    console.log(event.target.value)
    props.setForm({...props.form, nameOfPerson: event.target.value})
  }

  const handlePhone = (event: any) => {
    const regex = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
    if (regex.test(event.target.value)){
      props.setForm({...props.form, phone: event.target.value})
    }   
  }

  const handleFeederName = (event: any) => {
    props.setForm({...props.form, feederName: event.target.value})
  }

  
  const handleFeederPhone = (event: any) => {
    props.setForm({...props.form, feederPhone: event.target.value})
  }

  
  const handleSterlized = (event: any) => {
    props.setForm({...props.form, sterlizedCats: event.target.value})
  }

  const handleUnsterlized = (event: any) => {
    props.setForm({...props.form, unsterlizedCats: event.target.value})
  }

  const eventsForAnimals = (animal: string) => {
    switch (animal){
      case "Cat" :
        return (<NativeSelect id="select" onChange = {handleTypeOfEvent}>
                  <option value="Feeded cats">Feeded cats</option>
                  <option value="None Feeded cats">None Feeded cats</option>
                  <option value="Giving Birth">Giving Birth</option>
                </NativeSelect>);
      case "Dog" :
        return (<NativeSelect id="select" onChange = {handleTypeOfEvent}>
                  <option value="Wondering dog without owner">Wondering dog without owner</option>
                  <option value="Dog not on a leash with owner">Dog not on a leash with owner</option>
                  <option value="Wondering and aggressive dog">Wondering and aggressive dog</option>
                  
                </NativeSelect>);
      case "Fox" :
        return (<NativeSelect id="select" onChange = {handleTypeOfEvent}>
                  <option value="Seen from a distance">Seen from a distance</option>
                  <option value="Seen with puppies">Seen with puppies</option>
                  <option value="Seen and came closer">Seen and came closer</option>
                  <option value="Seen aggressive/attacking">Seen aggressive/attacking</option>
                </NativeSelect>);
      case "Jackle" :
        return (<NativeSelect id="select" onChange = {handleTypeOfEvent}>
                  <option value="Seen from a distance">Seen from a distance</option>
                  <option value="Seen with puppies">Seen with puppies</option>
                  <option value="Seen and came closer">Seen and came closer</option>
                  <option value="Seen aggressive/attacking">Seen aggressive/attacking</option>
                </NativeSelect>); 
                                    
    }
    

  }

  const addedForCats = (animal: string) => {
    if (animal === "Cat") {
      return (<div>
                <InputLabel htmlFor="input">Name of feeder:</InputLabel>
                <Input placeholder="name" inputProps={{ 'aria-label': 'description' }} onChange={handleFeederName} /> 
                <InputLabel htmlFor="input">Phone of feeder:</InputLabel>
                <Input placeholder="name" inputProps={{ 'aria-label': 'description' }} onChange={handleFeederPhone} />
                <InputLabel htmlFor="number">Number of sterilized cats:</InputLabel>            
                <input type="number" min="0" onChange={handleSterlized}></input>
                <InputLabel htmlFor="number">Number of unsterilized cats:</InputLabel>            
                <input type="number" min="0" onChange={handleUnsterlized}></input>

              </div>)
    }
  }



  const avigdush = (shmigli: any) => {console.log(shmigli.target.value)} // to delete later
  return (<form>
            <div>
                <div>
                <TextField
                  onChange = { handleDateHour}
                  id="date"
                  label="Date and time of event:"
                  type="datetime-local"
                  defaultValue={props.form.date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </div>
                <div>
                  <label>
                    address:
                  </label>
                  <PlacesAutocomplete
                  value={props.form.address}
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
          <div>
            <InputLabel htmlFor="input">Insert name:</InputLabel>
            <Input placeholder="name" inputProps={{ 'aria-label': 'description' }} onChange={handlePerson} /> 
          </div>
          <div>
          <InputLabel htmlFor="input">Insert phone number:</InputLabel>
            <Input inputProps={{ 'aria-label': 'description' }} onChange={handlePerson} /> 
          </div>
          <div>
            
            <InputLabel htmlFor="select">Type of animal:</InputLabel>
              <NativeSelect id="select" onChange = {handleAnimal}>
                <option value="Cat">Cat</option>
                <option value="Fox">Fox</option>
                <option value="Dog">Dog</option>
                <option value="Jackle">Jackle</option>
              </NativeSelect>
              <InputLabel htmlFor="number">Number of animals</InputLabel>            
              <input type="number" min="0" onChange={handlenumOfAnimals}></input>
            <div>
            <InputLabel htmlFor="select">Type of event:</InputLabel>
              {eventsForAnimals(props.form.animal)}          
            </div>  
            {addedForCats(props.form.animal)}
          </div>  
              <div>
                  <Button variant="contained" onClick={()=>props.setShow(false)}>cancle</Button>
              </div>
            </div>
          </form>)
  })


export default Form
