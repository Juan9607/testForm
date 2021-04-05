import React from 'react';
import "./styles/testForm.css";
import swal from 'sweetalert';

class Form extends React.Component{
    state={};
    handleChange= e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault();
        console.log(this.state)
        swal({
            title:"Formulario enviado",
            icon:"success",
            timer:5000
        })
        document.getElementById("testForm").reset();
    }

    render(){
        return(
            <div>

            <form id="testForm" onSubmit={this.handleSubmit}>  
                <div className="form-group">
                    <label>Nombre completo</label>
                    <input 
                        onChange={this.handleChange}  
                        className="form-control" 
                        type="text" 
                        name="nombre" 
                        required="required"/>
                    <label>Email</label>
                    <input 
                        onChange={this.handleChange} 
                        className="form-control" 
                        type="email" 
                        name="email" 
                        required="required"/>
                    <label>Celular</label>
                    <input 
                        onChange={this.handleChange} 
                        className="form-control" 
                        type="number" 
                        name="celular" 
                        required="required"/>
                    <label>Edad</label>
                    <input 
                        onChange={this.handleChange} 
                        className="form-control" 
                        min="18" 
                        max="100" 
                        type="number" 
                        name="edad" 
                        required="required"/>
                </div>
                <button onClick={this.handleClick} className="btn btn-primary">Enviar</button>
            </form>
            </div>


        )
    }
}

export default Form;