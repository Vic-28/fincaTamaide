import { useState } from 'react';
import './info.css';

const cardContents = [
    { icon: 'a', title: 'Piscina' },
    { icon: 'a', title: 'Jardín' },
    { icon: 'a', title: 'Barbacoa' },
    { icon: 'a', title: 'Internet' },
    { icon: 'a', title: 'Parking Privado' },
    { icon: 'a', title: 'Llegada Autónoma' }
];

function Info() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleNextClick = () => {
        setActiveCardIndex((prevIndex) =>
            prevIndex === cardContents.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevClick = () => {
        setActiveCardIndex((prevIndex) =>
            prevIndex === 0 ? cardContents.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className='info'>
            <aside className='info-cards'>
                <section className='info-card-left'>
                    <img className='info-card-image left' src='https://i.postimg.cc/J4WyDJF9/IMG-8109.avif' alt='info-card-left-image' />
                    <div className='info-card-left-content'>
                        <h5 className='info-card-left-content-title'>Experiencias únicas</h5>
                        <div className='info-card-content-separator' />
                        <p>Entorno perfecto para disfrutar del clima de Tenerife</p>
                    </div>
                </section>
                <section className='info-card-right'>
                    <div className='info-card-right-content'>
                        <h5 className='info-card-right-content-title'>Vistas perfectas</h5>
                        <div className='info-card-content-separator' />
                        <p>Todo lo necesario para un descanso sin molestias</p>
                    </div>
                    <img className='info-card-image right' src='https://i.postimg.cc/rF8V293F/IMG-8138.avif' alt='info-card-right-image' />
                </section>
                <section className='info-card-left'>
                    <img className='info-card-image left' src='https://i.postimg.cc/rsVv3fmB/IMG-8174.avif' alt='info-card-left-image' />
                    <div className='info-card-left-content'>
                        <h5 className='info-card-left-content-title'>Parte exterior ideal</h5>
                        <div className='info-card-content-separator' />
                        <p>Con todo lo necesario para un buen día de piscina</p>
                    </div>
                </section>
            </aside>

            <div className='info-separator' />

            <aside className='info-text'>
                <h3 className='info-text-title'>Detalles del alojamiento</h3>
                <hr className='info-text-separator' />
                <div className='info-text-description'>
                    <p className='info-text-description-phr1'>
                        La vivienda cuenta con una un excelente ambiente para disfrutar de unas vacaciones en Tenerife.
                    </p>
                    <p className='info-text-description-phr1'>
                        Cuenta con todos los elementos necesarios para disfrutar unas vacaciones ideales en la isla.
                    </p>
                    <p className='info-text-description-phr1'>
                        Posee barbacoa, piscina y un amplio jardín para disfrutar del clima de la isla con buena compañía.
                    </p>
                    <p className='info-text-description-phr1'>
                        Ademas de todas las utilidades para acomodar la mejor estancia posible.
                    </p>
                </div>
                <div className='info-text-cards'>
                    
                    {cardContents.map((card, index) => (
                        <div
                            key={index}
                            className={`info-text-card ${index === activeCardIndex ? 'active' : ''}`}
                            style={{ display: index === activeCardIndex ? 'grid' : 'none' }}
                        >
                            <div className="info-text-card-left" onClick={handlePrevClick}></div>
                            {card.icon}
                            <h5 className='info-text-card-title'>{card.title}</h5>
                            <div className="info-text-card-right" onClick={handleNextClick}></div>
                        </div>
                    ))}
                </div>
            </aside>
        </section>
    );
}

export default Info;
