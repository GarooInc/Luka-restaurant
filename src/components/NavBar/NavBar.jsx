import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { navigate } from "../../store"
import { Link } from "react-scroll"
import "./NavBar.css"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src="/images/logo.png" alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: "#000" }} />)
                        : (<FaBars size={30} style={{ color: "#000" }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li><a href='http://boquiteo.com/'>Delivery</a></li>
                            <li onClick={() => setIsMenuOpen(!isMenuOpen)}><a>Menú +</a></li>
                            <ul className={"nav-menu-submenu" + (isMenuOpen ? " open" : "")}>
                                <li><a className="linkmenu" href="https://cdn.shopify.com/s/files/1/0268/3093/0000/files/Menu_Breakfast_-_LUKA.pdf?v=1694099039">Desayunos</a></li>
                                <li><a className="linkmenu" href="https://cdn.shopify.com/s/files/1/0268/3093/0000/files/Menu_Luka_80644f37-5939-4926-9ac3-f2d287501465.pdf?v=1694099026">Almuerzos/Cenas</a></li>
                            </ul>
                            <li><a href='tel:+50222790967'>Reservaciones</a></li>
                            <li><a href='contactrooms' onClick={() => navigate("/contactrooms")}>Salones Corporativos</a></li>
                            <li><a href='contact' onClick={() => navigate("/contact")}>Eventos especiales</a></li>
                            <li><a href='galery'>Galería</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar