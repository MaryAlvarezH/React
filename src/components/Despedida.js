
import React, {Component} from 'react'

class Despedida extends Component{
    constructor(props){
        super(props);//variable pasada como parametro recomendable llamarla props
    }
  
    render(){
        return (
            <div>
                <h3>{this.props.text}</h3>
            </div>
        );
    }
}

export default Despedida; //para poder uilizar Saludo de afuera