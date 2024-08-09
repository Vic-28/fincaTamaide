
import './header.scss';

import logo from '../../../assets/img/casa.png';

function Header() {
    return (
        <header>
            <div className='logo'>
                <img className='logo-image' src={logo} alt="Favicon de casa" />
                <div className='logo-textContainer'>
                    <h2 className='logo-textContainer-title'>Finca Tamaide</h2>
                    <div className='logo-textContainer-separator'></div>
                    <p className='logo-textContainer-subTitle'>Vivienda Vacacional</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
