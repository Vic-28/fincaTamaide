import React, { useEffect } from 'react';
import './links.scss';
import airbnbLogo from '../../assets/img/airbnb.png';
import bookingLogo from '../../assets/img/brand-booking.svg';

const Links: React.FC = () => {

    const images = {
        instagramLogo: "https://i.postimg.cc/V6tBXDhH/image-removebg-preview-5.png"
    }

    useEffect(() => {
        const navElement = document.querySelector('.links-nav.link-non-active');
        if (!navElement) return;

        const handleClick = () => {
            navElement.classList.toggle('link-active');
            navElement.classList.toggle('link-non-active');
        };

        const handleCloseClick: EventListener = (event) => {
            event.stopPropagation(); 
            navElement.classList.add('link-non-active');
            navElement.classList.remove('link-active');
        };

        navElement.addEventListener('click', handleClick);

        const closeIcon = navElement.querySelector('.links-nav-icono-salida');
        if (closeIcon) {
            closeIcon.addEventListener('click', handleCloseClick);
        }

        return () => {
            navElement.removeEventListener('click', handleClick);
            if (closeIcon) {
                closeIcon.removeEventListener('click', handleCloseClick);
            }
        };
    }, []);

    const goToAirbnb = (event: React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation();
        window.location.href = 'https://www.airbnb.es/rooms/49413191?guests=1&adults=1&s=67&unique_share_id=2a4197e9-8510-413e-a079-72cc96ffed19';
    };

    const goToInstagram = (event: React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation();
        window.location.href = 'https://www.instagram.com/ftamaide/';
    };


    return (
        <aside className='links'>
            <nav className='links-nav link-non-active'>
                <span className="material-symbols-outlined links-nav-icono">
                    night_shelter
                </span>
                <span className="material-symbols-outlined links-nav-icono-salida">
                    close
                </span>
                <img
                    className='links-nav-logo'
                    src={airbnbLogo}
                    alt='Airbnb logo'
                    onClick={goToAirbnb}
                />
                <img
                    className='links-nav-logo'
                    src={images.instagramLogo}
                    alt='Instagram logo'
                    onClick={goToInstagram}
                />
                <img
                    className='links-nav-logo'
                    src={bookingLogo}
                    alt='Booking logo'
                    style={{ display: 'none'}}
                />
            </nav>
        </aside>
    );
}

export default Links;
