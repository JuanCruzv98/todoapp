import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import dummyAPI from "../api/todoAPI"

export const Login = () => {
    const navigate = useNavigate();
    const [formValues,setFormValues] = useState({
        username:'',
        password:''
    });

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {data} = await dummyAPI.post('/auth/login',formValues);
        if(data.id){
            sessionStorage.setItem('userid',data.id);
            sessionStorage.setItem('username',data.username);
            sessionStorage.setItem('image',data.image);
            navigate('/dashboard');
        }
    }

    const handleChange = ({target})=>{
        const {name,value} = target;
        setFormValues({
            ...formValues,
            [name]:value  
        })
    }
    
    return (
    <div className="login-form-container">
    <div className="login-header">
        <h1 className="header-title">Bienvenidos</h1>
        <h2 className="header-subtitle">TODO APP</h2>
    </div>
    <form className="login-form" id="frmLogin" onSubmit={handleSubmit}>
        <div className="frm-element">
            <label className="frm-label" htmlFor="username">Usuario</label>
            <input className="frm-input" type="text" name="username" id="username" onChange={handleChange} value={formValues.username}/>
        </div>
        <div className="frm-element">
            <label className="frm-label" htmlFor="password">Contraseña</label>
            <input className="frm-input" type="password"  name="password" id="password" onChange={handleChange} value={formValues.password}/>
        </div>
        <div className="frm-element">
            <button className="frm-btn btn-login" type="submit">Iniciar Sesion</button>
        </div>
    </form>
    <div className="login-footer">
        <span className="footer-text"> No tienes cuenta <Link className="footer-link" to="../register">Crea una aqui</Link></span>
    </div>
    </div>
  )
}
