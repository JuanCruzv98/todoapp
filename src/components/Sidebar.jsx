import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
export const Sidebar = () => {
    const [userInfo,setUserInfo] = useState({});
    useEffect(()=>{
        if(sessionStorage.getItem('username')){
            setUserInfo(
                {
                    username: sessionStorage.getItem('username'),
                    image: sessionStorage.getItem('image'),
                    userId: sessionStorage.getItem('userid'),
                }
            )
        }
    },[])

    return (
    <aside className="main-aside">
            <div className="links-area">
                <ul className="list">
                    <li className="list-item">
                        <NavLink to="..">Inicio</NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink to={`../user/${userInfo.userId}`}>Mi cuenta</NavLink>
                    </li>
                </ul>
            </div>
            <div className="user-area">
                <img id="userImg" src={userInfo.image || "https://devemyhg.lycee-darchicourt.net/wp-content/uploads/2018/01/No-picture.png"}alt="user"/>
                <span id="userName">@{userInfo.username}</span>
            </div>
        </aside>
  )
}
