import React from 'react'
import InputElement from '../../component/UI/input'
import Tag from '../../component/UI/tag'
import Button from '../../component/UI/button'
import PropTypes from 'prop-types'
import {
    Paper
} from '@material-ui/core'


const styles = {
	card: {
		boxSizing: "border-box",
		textAlign: "center",
		backgroundColor: "#263044",
		margin: "0 auto",
		padding: 20,
		alignItems: "center",
		width: "100%"
	},
	paper: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center"
	},
	input: {
		marginLeft: 8,
		flex: 1
	},
	word: {
		boxSizing: "border-box",
		margin: "5px auto 0 auto",
		padding: 5,
		backgroundColor: "#263044",
		color: "white",
		width: "100%",
		height: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between"
	},
	button: {
		color: "grey",
		border: "grey",
		textTransform: "lowercase"
	}
};



class Keywords extends React.Component{
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
        return (
            <React.Fragment>
                <Paper style={styles.paper}>
                    <InputElement type="input" value={this.state.inputContent} onChange={this.inputChangeHandler}/>
                    <Button onClick={() => this.addClickHandler(this.state.inputContent)}>ADD</Button>
                </Paper>
                {this.state.allitems.map((el,index) => <Tag key={el+"_"+index} item={el} clear={() => this.tagRemoveHandler(index)}/>)}
            </React.Fragment>
        )
    }

}

Keywords.propTypes = {
    allElement:PropTypes.arrayOf(PropTypes.string)
}


export default Keywords;