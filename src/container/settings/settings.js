import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Checkbox,
    Grid,
    Paper,
    FormGroup,
    FormControlLabel, 
    Typography,
    Input
} from "@material-ui/core"



const styles = {
    paper:{
        width:"100%",
        padding: "3px 3px",
        margin:"10px",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#263044",
    },
    paperColumn:{
        width:"100%",
        height:"250px",
        padding: "5% 5%",
        margin:"10px",
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between",
        backgroundColor: "#263044",
    },
    input:{
        margin: "0 15px",
        width:"45px",
        color:"#f5f6f7",
        
    },
    text:{
        color:"#f5f6f7"
    }
}


class Settings extends React.Component{
    constructor(props){
        super(props)
        this.state={
            settings:{}
        }
    }

    componentWillMount(){

        this.setState({
            settings : this.props.defaultSettings
        })
    }

    checkboxChangeHandler = (el,type) => {
        this.setState((prevState) => {
            const newType = {...prevState.settings[type]}
            newType[el] = !prevState.settings[type][el]
            const newSetting = {...prevState.settings}
            newSetting[type] = newType
            console.log(newSetting)
            return {
                settings:newSetting
            } 
        })
    }

    numInputChangeHandler = (event) => {
        const newInput = {...this.state.settings.inputs}
        newInput[event.target.name] = event.target.value
        const newSettings = {...this.state.settings}
        newSettings.inputs = newInput
        this.setState({
            settings:newSettings
        })
    }

    render(){
        const { classes } = this.props
        const browserLeft = Object.entries(this.state.settings.browsers).filter(([el,value]) => el !== "incognito")
        const devices = Object.entries(this.state.settings.devices)
        const options = Object.entries(this.state.settings.options)
        return (
            <React.Fragment>
                <Grid container  
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Grid item xs={9}>
                        <Paper className={classes.paper}>
                            <FormGroup row>
                                {browserLeft.map(([el,value]) => (<FormControlLabel
                                        className={classes.text}
                                        key={el}
                                        control={<Checkbox checked={value} onChange={() => this.checkboxChangeHandler(el,"browsers")} value={el} />}
                                        label={el}/>
                                ))}
                            </FormGroup>
                        </Paper>
                    </Grid>

                    <Grid item xs={2}>
                        <Paper className={classes.paper}>
                        <FormControlLabel 
                            className={classes.text}
                            control={<Checkbox
                                checked={this.state.settings.browsers.incognito}
                                onChange={() => this.checkboxChangeHandler("incognito","browsers")}
                                value="incognito"
                            />}
                            label="incognito"/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.paperColumn}>
                            <FormGroup row>
                               <Typography className={classes.text} variant="body2" gutterBottom>Wait</Typography>
                               <Input
                                    className={classes.input}
                                    name='waitFirst'
                                    value={this.state.settings.inputs.waitFirst}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider"
                                    }}
                                />
                                <Input
                                    className={classes.input}
                                    name='waitSecond'
                                    value={this.state.settings.inputs.waitSecond}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider"
                                    }}
                                />
                               <Typography className={classes.text} variant="body2" gutterBottom>seconds on the targeted website.</Typography>
                            </FormGroup>
                            <FormGroup row>
                                <FormControlLabel
                                    className={classes.text}
                                    control={<Checkbox
                                        checked={this.state.settings.inputs.PageInSite}
                                        onChange={() => this.checkboxChangeHandler("PageInSite","inputs")}
                                        value="PageInSite"
                                        />}
                                    label="Visit the Page within the Site"/>
                            </FormGroup>
                            <FormGroup row>
                                <Input
                                    className={classes.input}
                                    name='numPages'
                                    value={this.state.settings.inputs.numPages}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider"
                                    }}
                                />
                               <Typography className={classes.text} variant="body2" gutterBottom>Pages</Typography>
                               <Input
                                    className={classes.input}
                                    name='numPagesFirst'
                                    value={this.state.settings.inputs.numPagesFirst}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider"
                                    }}
                                />
                                <Input
                                    className={classes.input}
                                    name='numPagesSecond'
                                    value={this.state.settings.inputs.numPagesSecond}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider"
                                    }}
                                />
                               <Typography className={classes.text} variant="body2" gutterBottom>visit from to second.</Typography>
                            </FormGroup>
                            <FormGroup row>
                               <Typography className={classes.text} variant="body2" gutterBottom>After the operation is complete</Typography>
                               <Input
                                    className={classes.input}
                                    name='operationFirst'
                                    value={this.state.settings.inputs.operationFirst}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider"
                                    }}
                                />
                                <Input
                                    className={classes.input}
                                    name='operationSecond'
                                    value={this.state.settings.inputs.operationSecond}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}                                   
                                    type="number"
                                />
                               <Typography className={classes.text} variant="body2" gutterBottom>seconds wait.</Typography>
                            </FormGroup>
                            <FormGroup row>
                               <Typography className={classes.text} variant="body2" gutterBottom>Target site</Typography>
                               <Input
                                    className={classes.input}
                                    name='targetSite'
                                    value={this.state.settings.inputs.targetSite}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider"
                                    }}
                                />
                               <Typography className={classes.text} variant="body2" gutterBottom>if not found times</Typography>
                               <Input
                                    className={classes.input}
                                    name='timeTarget'
                                    value={this.state.settings.inputs.timeTarget}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider"
                                    }}
                                />
                               <Typography className={classes.text} variant="body2" gutterBottom>minutes wait</Typography>
                            </FormGroup>
                            <FormGroup row>
                                <Input
                                    className={classes.input}
                                    name='timeReset'
                                    value={this.state.settings.inputs.timeReset}
                                    margin='dense'
                                    onChange={(event) => this.numInputChangeHandler(event)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider"
                                    }}
                                />
                               <Typography className={classes.text} variant="body2" gutterBottom>automatic reset after operation.</Typography>
                            </FormGroup>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <FormGroup row>
                                {devices.map(([el,value]) => (<FormControlLabel
                                        key={el}
                                        control={<Checkbox checked={value} onChange={() => this.checkboxChangeHandler(el,"devices")} value={el} />}
                                        label={el}/>
                                ))}
                            </FormGroup>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <FormGroup row>
                                {options.map(([el,value]) => (<FormControlLabel
                                        key={el}
                                        control={<Checkbox checked={value} onChange={() => this.checkboxChangeHandler(el,"options")} value={el} />}
                                        label={el}/>
                                ))}
                            </FormGroup>
                        </Paper>
                    </Grid>
                    <Grid 
                        container 
                        spacing={2}
                        style={{marginTop:"50px"}}
                        >
				        <Grid item xs={4}>
                            <Button 
                                variant="contained" 
                                onClick={() => this.props.onExport(this.state.settings)}
                                style={{
                                    backgroundColor:"#f1c40f",
                                    borderRadius: 3,
                                    border: 0,
                                    color: 'white',
                                    }}>Export</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button 
                                variant="contained" 
                                onClick={() => this.props.onStop()}
                                style={{
                                    backgroundColor:"#3498db",
                                    borderRadius: 3,
                                    border: 0,
                                    color: 'white',
                                    }}>Stop</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button 
                                variant="contained" 
                                onClick={() => this.props.onStart(this.state.settings)}
                                style={{
                                    backgroundColor:"#2ecc71",
                                    borderRadius: 3,
                                    border: 0,
                                    color: 'white',
                                    }}>Start</Button>
                        </Grid>
                          
                    </Grid>
                </Grid>
            </React.Fragment>
            
        )
    }

}

Settings.propTypes = {
    onStart:PropTypes.func,
    onStop:PropTypes.func,
    onExport:PropTypes.func,
    defaultSettings:PropTypes.object
}

export default withStyles(styles)(Settings);