import logoImg from "../assets/logo.svg"

export default function Navigation() {
    return (
        <nav>
            <img src={logoImg} alt="Logo of room" />
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </nav>
    )
}