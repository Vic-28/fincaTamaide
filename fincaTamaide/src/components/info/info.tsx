import './info.css'

function Info()
{
    return(
        <section className='info'>
            <aside className='info-cards'>
                <section className='info-card-left'>
                    <img className='info-card-image left' src='https://i.postimg.cc/J4WyDJF9/IMG-8109.avif' alt='info-card-left-image'/>
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
                    <img className='info-card-image right' src='https://i.postimg.cc/rF8V293F/IMG-8138.avif' alt='info-card-right-image'/>
                </section>
                <section className='info-card-left'>
                    <img className='info-card-image left' src='https://i.postimg.cc/rsVv3fmB/IMG-8174.avif' alt='info-card-left-image'/>
                    <div className='info-card-left-content'>
                        <h5 className='info-card-left-content-title'>Parte exterior ideal</h5>
                        <div className='info-card-content-separator' />
                        <p>Con todo lo necesario para un buen día de piscina</p>
                    </div>
                </section>
            </aside>
            
            <div className='info-separator'/>

            <aside className='info-text'>
                <h1>Info Text</h1>
            </aside>
        </section>
    )
}

export default Info;