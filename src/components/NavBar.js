import React, {useState} from "react"
//import NavBar from "./components/NavBar.js"
import { Link } from 'react-router-dom';
import "./style.css"
import DropDown from "./DropDown"


export default function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
      setDropdown(true);
    
  };

  const onMouseLeave = () => {
      setDropdown(false);
    
  };

  return (
    <div className="nav-bar">
    <div className="group-964 flex-row">
      <div className="logo flex-row">
        
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/aj42ydq29ct-143%3A27?alt=media&token=c7c4a190-a966-435e-bd13-10f44499d931"
          alt="Not Found"
          className="open-book-1"
        />
        <Link to='/' style={{ textDecoration: 'none' }} className="txt-396" onClick={closeMobileMenu}>
          BookHelper
        </Link>
      </div>
      
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
            <Link
            to='/'>
              Menu
            </Link>
            {dropdown && <DropDown />}
          </li>
          
        </ul>
    </div>
  </div>
  )
}
