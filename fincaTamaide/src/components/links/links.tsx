import React, { useEffect } from 'react';
import './links.css';
import airbnbLogo from '/src/assets/img/airbnb.png';
import bookingLogo from '/src/assets/img/brand-booking.svg';

const Links: React.FC = () => {
    useEffect(() => {
        const navElement = document.querySelector('.links-nav.link-non-active');
        if (!navElement) return;

        const handleClick = () => {
            navElement.classList.toggle('link-active');
            navElement.classList.toggle('link-non-active');
        };

        const handleCloseClick: EventListener = (event) => {
            event.stopPropagation(); // Prevent triggering the parent click event
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
        window.location.href = 'https://www.airbnb.es/rooms/49413191?adults=1&children=0&enable_m3_private_room=true&infants=0&location=San%20Miguel%20de%20Abona%2C%20Espa%C3%B1a&pets=0&search_mode=regular_search&check_in=2024-07-01&check_out=2024-07-06&source_impression_id=p3_1719072932_P3UItdNMq6t-kCJr&previous_page_section_name=1001&federated_search_id=97963ca0-f4af-40b7-87a7-e00d46297100&translate_ugc=false';
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
                    src={bookingLogo}
                    alt='Booking logo'
                    style={{ display: 'none'}}
                />
            </nav>
        </aside>
    );
}

export default Links;
