import {NavLink, Link} from 'react-router-dom';
import logo from '../_assets/logo.png';
export const NavBar = (props) => {

    return (
        <>
            <Link to='/' >
                <img src={logo} />
            </Link>
            <ul>
                <li>
                    <NavLink to='/report' >Report</NavLink>
                </li>
                <li>
                    <NavLink to='/sensory-preferences'> Sensory Preferences</NavLink>
                </li>
                <li>
                    <NavLink to='/sample-survey' > Sample Survey</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
            </ul>
        
        </>

    )
}

// export default NavBar;