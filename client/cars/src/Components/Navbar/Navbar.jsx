import React ,{useState} from 'react'
import './Navbar.css'

import logo from '../../assets/car_logo.jpeg'
import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [navbar, setNavbar] = useState('navbar')
    const showNavbar = () =>{
        setNavbar('navbar showNavbar')
    }

    const removeNavbar = () =>{
        setNavbar('navbar')
    }

    const [header, setHeader] = useState('header')
    const addBg = () =>{
        if (window.scrollY >= 20) {
            setHeader('header addBg')
        }
    }
    window.addEventListener('scroll', addBg)
    return (
            <div className={header}>
                <div className="logoDiv">
                    <img src={logo} alt="" className="logo" />
                </div>
                
                <div className={navbar}>
                    <ul className="menu">
                        <li onClick={removeNavbar}  className="listItem"><a href="/" className="link">Home</a></li>
                        <li onClick={removeNavbar}  className="listItem"><a href="/trendings" className="link">Used Cars</a></li>
                        <li onClick={removeNavbar} className="listItem"><a href="/add_car" className="link">New Cars</a></li>
                        <li onClick={removeNavbar} className="listItem"><a href="/cars" className="link">Auctions</a></li>
                        <li onClick={removeNavbar} className="listItem"><a href="/" className="link">Sellers</a></li>
                    </ul>

                    <IoIosCloseCircle className='icon CloseIcon' onClick={removeNavbar} />
                </div>
                <div className="signUp flex">
                    <Link to={"/login"} className='text'>Log In</Link>
                    <Link to={"/signup"} className='text1'>Sign Up</Link>
                    <TbGridDots className='icon toogleNavbarIcon' onClick={showNavbar}/>

                </div>
            </div>
    )
}
