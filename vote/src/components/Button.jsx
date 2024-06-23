import { Component } from "react";

class Button extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <button type="button" className="btn btn-success" onClick={this.props.onClick}>Show Results</button>
        )
    }
}

export default Button;