import React from 'react'
import {
    Switch,
    Input,
    Checkbox
} from '@material-ui/core'


export default props => {

    let inputElement = null

    switch(props.type) {
        case "switch":
            inputElement =  <Switch/>
        case "input":
            inputElement =  <Input/>
        case "checkbox":
            inputElement =  <Checkbox/>
        default:
            inputElement = <div></div>
    }

    return inputElement;
}