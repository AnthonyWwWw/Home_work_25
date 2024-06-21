import { Component } from "react";

class Button extends Component{
    constructor(props){
        super(props)

        this.showResult = this.showResult.bind(this);
    }

    showResult(){
        console.log('1');
    }

    render(){

        return(
            <button type="button" className="btn btn-success" onClick={this.props.onClick}>Show Results</button>
        )
    }
}

export default Button;