//es imporrtante que la primera letra este capitalizada

import React, {Component} from 'react'

class Saludo extends Component{
    constructor(props){// puede mandarle propiedades al documento 
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

export default Saludo; //para poder uilizar Saludo de afuera