import { NavLink } from 'react-router-dom';
import './NavButton.css';

function NavButton(props) {
    return (
        <div className='box'>
            <NavLink to={props.link} activeClassName="nav-active" className='btn-nav'>
                <p>{props.title}</p>
            </NavLink>
        </div>
    );
  }
  
  export default NavButton;
  