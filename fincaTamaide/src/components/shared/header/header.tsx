
import './header.css';

import logo from '/src/assets/img/1-sinFondo-encogida.png';

function Header() {
    return (
        <header>
            <img id='logo' src={logo} alt="Logo Finca Tamaide" />
        </header>
    );
}

export default Header;
