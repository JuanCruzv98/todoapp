import { NavLink } from "react-router-dom"
export const Sidebar = () => {

    
  return (
    <aside className="main-aside">
            <div className="links-area">
                <ul className="list">
                    <li className="list-item">
                        <NavLink to="..">Inicio</NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink to={`../user/1`}>Mi cuenta</NavLink>
                    </li>
                </ul>
            </div>
            <div className="user-area">
                <img id="userImg" src={"" || "https://devemyhg.lycee-darchicourt.net/wp-content/uploads/2018/01/No-picture.png"}alt="user"/>
                <span id="userName">@132</span>
            </div>
        </aside>
  )
}
