import React from 'react';
import "../../src/global.css";
import "./styles/menu.css";
import data from "../../src/data.json";

let item
class Menu extends React.Component{
    handleClick=e=>{
        this.setState({
            name:e.target.name
        })
        //console.log(this)
    }
    render(){
        return <div>
        <nav>
            <ul>
            {data.menuInfo.map(itemMenu=>(
            <li key={itemMenu.name}><a name={itemMenu.name} onClick={this.props.onClick} href="#">{itemMenu.name}</a></li> 
            ))}
            </ul>
        </nav>
        <h5>
                Hola, bienvenido, sabemos que quieres viajar en un {this.props.empresa} , por favor
                diligencia el siguiente formulario:
            </h5>
        </div>

    }
}

export default Menu;