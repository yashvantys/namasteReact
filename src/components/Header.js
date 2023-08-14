import { useState } from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
export const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={() => {
                        loginBtn === 'Login' ? setLoginBtn("Logout") : setLoginBtn("Login")
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header