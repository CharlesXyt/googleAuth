import React from 'react'
import Card from '@material-ui/core/Card'
import Button from './button'

export default props => {

    return (
        <Card style={{padding:'20px',margin:'3px'}}>
            {props.item}
            <Button onClick={props.clear}>Clear</Button>
        </Card>
    )

}