import React from 'react'
import UserAdd from './UserAdd/UserAdd'
import {
    defaultSettings,
    allDefaultKeywords,
    allDefaultWebsites
} from '../defaultSetting'
import Settings from './Settings/Settings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag,faTv,faCog } from '@fortawesome/free-solid-svg-icons'
import "../App.css";
import {
    Grid,
    Typography,
} from '@material-ui/core'

export default props => {

    return (
        <Grid className="googleAward"
            container
            direction="row"
            justify="space-evenly"
        >
            <Grid key="keywords" item xs={3}>
                <Grid container>
                    <Grid item xs={2}>
                        <FontAwesomeIcon icon={faTag} style={{color:"blue",fontSize:"25px",margin:"0 50%"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" gutterBottom>Keywords</Typography>
                    </Grid> 
                </Grid>
                <UserAdd label="Keywords" allitems={allDefaultKeywords}/>
            </Grid>
            <Grid key="website" item xs={3}> 
                <Grid container>
                    <Grid item xs={2}>
                        <FontAwesomeIcon icon={faTv} style={{color:"green",fontSize:"25px",magin:"0 50%"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" gutterBottom>Websites</Typography>
                    </Grid> 
                </Grid>
                <UserAdd label="Websites" allitems={allDefaultWebsites}/>
            </Grid>
            <Grid key="settings" item xs={5}>
                <Grid container>
                    <Grid item xs={2}>
                        <FontAwesomeIcon icon={faCog} style={{color:"yellow",fontSize:"25px",paddingLeft:"50%"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" gutterBottom>Settings</Typography>
                    </Grid> 
                </Grid>
                <Settings defaultSettings={defaultSettings} onStart={() => alert("onstart clicked")} onStop={() => alert("onstop clicked")} onExport={() => alert("onexport clicked")}/>
            </Grid>
        
        </Grid>
    )
}
