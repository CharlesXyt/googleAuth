import React from 'react'
import Button from '@material-ui/core/Button'

export default props => {
    return <Button onClick={props.onClick}>{props.children}</Button>
}