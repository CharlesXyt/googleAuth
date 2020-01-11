import React from 'react'
import {
    Switch,
    Input,
    Checkbox
} from '@material-ui/core'


export default React.forwardRef((props,ref) => {

    let inputElement = null

    switch(props.type) {
        case "switch":
            inputElement =  <Switch/>
            break
        case "input":
            inputElement =  <Input value={props.value} onChange={props.onChange}/>
            break
        case "checkbox":
            inputElement =  <Checkbox/>
            break
        default:
            inputElement = <div></div>
    }

    return inputElement;
})