import { useState, useContext } from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'
export const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    // subscribing to the store using selector
    const cart = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className='logo-container'>
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>Online Status:{onlineStatus ? "🍏" : "🍎"}</li>
                    <li className='px-4'><Link to="/">Home</Link></li>
                    <li className='px-4'><Link to="/about">About Us</Link></li>
                    <li className='px-4'><Link to="/contactus">Contact Us</Link></li>
                    <li className='px-4 font-bold text-lg'><Link to="/cart" >Cart({cart ? cart.length : 0} Items)</Link></li>
                    <button className='login' onClick={() => {
                        loginBtn === 'Login' ? setLoginBtn("Logout") : setLoginBtn("Login")
                    }}>{loginBtn}</button>
                    <li className='mx-2 font-bold'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header