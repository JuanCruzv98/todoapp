import { Link } from "react-router-dom"
import dummyAPI from "../api/todoAPI";

export const Register = () => {

    return (
        <div className="login-form-container">
        <div className="login-header">
            <h1 className="header-title">Bienvenidos</h1>
            <h2 className="header-subtitle">TODO APP</h2>
        </div>
        <form className="login-form" id="frmLogin" >
            <div className="frm-element">
                <label className="frm-label" htmlFor="userName">Usuario</label>
                <input className="frm-input" type="text" name="username" id="username" />
            </div>
            <div className="frm-element">
                <label className="frm-label" htmlFor="email">email</label>
                <input className="frm-input" type="email" name="email" id="email"/>
            </div>
            <div className="frm-element">
                <label className="frm-label" htmlFor="password">Contraseña</label>
                <input className="frm-input" type="password" name="password" id="password" />
            </div>
            <div className="frm-element">
                <button className="frm-btn btn-login" type="submit">Iniciar Sesion</button>
            </div>
        </form>
        <div className="login-footer">
            <span className="footer-text"> Ya tienes cuenta <Link className="footer-link" to="../auth">Click aqui</Link></span>
        </div>
    </div>
  )
}
