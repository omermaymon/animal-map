import React, { useState } from 'react';
import { cordi } from '../App';
import {
    makeStyles,
    StylesProvider,
    ThemeProvider,
  } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';

interface IProps {
    cordinates: cordi
    setShow: any
  }






const Form = React.memo<IProps>((props)=>{
    console.log(props.cordinates)
return (<div>
    lat is: {props.cordinates.lat}, lng is {props.cordinates.lng}
            <div>
                <Button variant="contained" onClick={()=>props.setShow(false)}>cancle</Button>
            </div>
    </div>)
})


export default Form