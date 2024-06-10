
import { Link } from "react-router-dom"
import dummyAPI from "../api/todoAPI"
export const Login = () => {

    return (
    <div className="login-form-container">
    <div className="login-header">
        <h1 className="header-title">Bienvenidos</h1>
        <h2 className="header-subtitle">TODO APP</h2>
    </div>
    <form className="login-form" id="frmLogin">
        <div className="frm-element">
            <label className="frm-label" htmlFor="username">Usuario</label>
            <input className="frm-input" type="text"  name="username" id="username"/>
        </div>
        <div className="frm-element">
            <label className="frm-label" htmlFor="password">Contraseña</label>
            <input className="frm-input" type="password"  name="password" id="password"/>
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
