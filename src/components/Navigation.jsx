import { useEffect, useState } from "react"
import menuHamburgerImg from "../assets/icon-hamburger.svg"
import menuCloseImg from "../assets/icon-close.svg"
import logoImg from "../assets/logo.svg"

export default function Navigation() {
    const [menuSize, setMenuSize] = useState(window.innerWidth < 950 ? true : false);
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
        window.addEventListener("resize", handleMenuState)
        return () => window.removeEventListener("resize", handleMenuState)
    }, [])
    function handleMenuState() {
        if(window.innerWidth < 950) {
            setMenuSize(true);
        } else {
            setMenuSize(false);
        }
    }
    return (
        <nav>
            {menuSize && <button id="menu_button" onClick={() => setOpenMenu(prev => !prev)}><img src={openMenu ? menuCloseImg : menuHamburgerImg} /></button>}
            <img src={logoImg} alt="Logo of room" />
            <div className={`navigation ${openMenu && "open_menu"}`}>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}