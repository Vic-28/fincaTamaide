import './maps.scss';
import { useEffect } from 'react';

function Maps() {
    
    const checkWindowSize = (width:number) => {
        const iframe = document.querySelector('.maps-iframe') as HTMLIFrameElement;
        
        if (iframe) { 
            if (width < 460) {
                iframe.style.width = '320px';
                iframe.style.height = '225px';
            } else {
                iframe.style.width = '600px';
                iframe.style.height = '450px';
            }
        }
    };

    useEffect(() => {

        checkWindowSize(window.screen.width);

 
        const handleResize = () => {
            checkWindowSize(window.screen.width);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='maps'>
            <div className='maps-details'>
                <h4 className='maps-details-title'>Estamos en:</h4>
                <p className='maps-details-subtitle'>Calle la Fuente, 17, 38628, Santa Cruz de Tenerife</p>
            </div>
            <iframe
                className="maps-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.8217231319127!2d-16.6299668247317!3d28.09098037596481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9eb4e8e885d1%3A0x34d755a0f247606a!2sC.%20la%20Fuente%2C%2017%2C%2038628%2C%20Santa%20Cruz%20de%20Tenerife!5e0!3m2!1ses!2ses!4v1724261304937!5m2!1ses!2ses"
                width="600"
                height="450"
                loading="lazy"
                title="Google Maps"
            ></iframe>
        </section>
    );
}

export default Maps;
