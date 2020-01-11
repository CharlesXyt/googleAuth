import React from 'react'
import Keywords from './keywords/keywords'
import Settings from './settings/settings'
import Sites from './sites/sites'

class GoogleAwards extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){
        return (
            <Keywords allitems={["test","test","1","2","3"]}/>
        )
    }

}

export default GoogleAwards;