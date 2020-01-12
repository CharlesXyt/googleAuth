import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Paper,
    TextField,
    Card,
    Typography
} from '@material-ui/core'



const styles = {
    card: {
        display:"flex",
		textAlign: "left",
		backgroundColor: "#263044",
		margin: "10px auto",
		padding: "15px",
        justifyContent: "space-around",
        alignItems:"center",
		width: "100%"
	},
	paper: {
        width:"100%",
		padding: "2px 4px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#263044",
    },
    buttonClear:{
        color:"grey",
        backgroundColor:"Transparent",
        borderColor:"Transparent",
        borderStyle:"none",
        height:"80%"
    },
    textField:{
        margin:"2%",
        width:"80%",
        backgroundColor:"white"
    },
    text:{
        color:"#f5f6f7"
    }
}



class UserAdd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputContent:"",
            allitems:[]
        }
    }


    componentDidMount(){
        this.setState({
            allitems:this.props.allitems ? this.props.allitems : [],
        })
    }


    inputChangeHandler = (event) => {
        const inputValue = event.target.value
        
        this.setState({
            inputContent:inputValue
        })   
    }

    tagRemoveHandler = (index) => {
        const newItems = [...this.state.allitems]
        newItems.splice(index,1)
        this.setState({
            allitems:newItems
        })
    }


    addClickHandler = (newItem) => {
        if(newItem === ""){
            alert("please use valid input")
        }else{
            const newItems = [...this.state.allitems]
            newItems.push(newItem)
            this.setState({
                inputContent:"",
                allitems:newItems
            })
        }
    }

    render(){
        const {classes} = this.props 
        return (
            <React.Fragment>
                <Paper className={classes.paper}>
                    <TextField 
                        id="outlined-search" 
                        className={classes.textField} 
                        label={this.props.label === "Keywords" ? "enter your keywords here(optional)" : "enter your site here"} 
                        type="search" 
                        variant="outlined" 
                        value={this.state.inputContent} 
                        onChange={this.inputChangeHandler} />
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => this.addClickHandler(this.state.inputContent)}>ADD</Button>
                </Paper>
                {this.state.allitems.map((el,index) => (
                    <Card  key={el+"_"+index} className={classes.card}>
                        <Typography variant="subtitle2" gutterBottom className={classes.text}>{el}</Typography>
                        <Button className={classes.buttonClear} onClick={() => this.tagRemoveHandler(index)}>
                            Clear
                        </Button>
                    </Card>
                ))}
            </React.Fragment>
        )
    }

}

UserAdd.propTypes = {
    allElement:PropTypes.arrayOf(PropTypes.string),
    label:PropTypes.oneOf(["Keywords","Websites"])
}


export default withStyles(styles)(UserAdd);