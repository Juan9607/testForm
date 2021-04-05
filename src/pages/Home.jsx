import React from 'react';
import Menu from '../components/menu';
import Form from '../components/testForm'
import "./styles/Home.css";

class Home extends React.Component{
    state={linka:"(Opción del menú)"}
    handleClick=e=>{
        this.setState({
            linka:e.target.name,
        })
    }
    render(){
        return(
            <div>
                <Menu onClick={this.handleClick} empresa={this.state.linka}/>
                <div className="Form">
                    <Form/>
                </div>
            </div>

        )
    }
}

export default Home;