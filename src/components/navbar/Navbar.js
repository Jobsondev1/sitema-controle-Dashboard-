import "./navbar.css"
import avatar from '../../assets/avatar.png';


const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className = "navbar">
           <div className ="nav_icon" onClick={()=> openSidebar()}>
                <i className="fa fa-bars"></i>
           </div>
           
           <div className ="navbar__left">
            <a href="#">se escreva</a>
            <a href="#">produção</a>
            <a className="active_link" href="#">ADM</a>
           </div>

        <div className="navbar__right">
            <a href="#">
                <i className=" fa fa-search"></i>
            </a>
            <a href="#">
                <i className=" fa fa-clock"></i>
            </a>
            <a href="#">
                <img width="30" src={avatar} alt="avatar"/>
            </a>
        </div>
        </nav>
    )
}

export default Navbar