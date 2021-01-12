import React from 'react'
import {Slider} from '@material-ui/core'
import {createMuiTheme} from '@material-ui/core/styles'
import { ThemeProvider} from '@material-ui/styles'

const CustomSlider = (props) =>{

    const muiTheme = createMuiTheme({
        overrides: {
            MuiSlider:{
                thumb:{
                    color: "yellow",
                },
                track: {
                    color: 'red'
                },
                rail:{
                    color: 'black'
                }
            }
        }
    });


    return(
        <ThemeProvider theme={muiTheme} >
            <Slider 
            value={props.value}
            max ={props.max}
            min = {props.min}
            step = {props.step}
            onChange = {props.onChange}/>
        </ThemeProvider>
    )
}

export default CustomSlider