import './carrousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar JavaScript de Bootstrap

const fotos = [
  'https://i.postimg.cc/nrrDdtvN/IMG-8040.avif',
    'https://i.postimg.cc/HsfytRjP/IMG-8044.avif',
    'https://i.postimg.cc/rmF0mLYz/IMG-8048.avif',
    'https://i.postimg.cc/3NkkXFhT/IMG-8052.avif',
    'https://i.postimg.cc/vBNBZxVS/IMG-8070.avif',
    'https://i.postimg.cc/76d2QWm6/IMG-8086.avif',
    'https://i.postimg.cc/3NGvMFcZ/IMG-8088.avif',
    'https://i.postimg.cc/9F39dsDg/IMG-8091.avif',
    'https://i.postimg.cc/fWdtR58c/IMG-8107.avif',
    'https://i.postimg.cc/br1sVNZC/IMG-8108.avif',
    'https://i.postimg.cc/J4WyDJF9/IMG-8109.avif',
    'https://i.postimg.cc/90Hf95LG/IMG-8117.avif',
    'https://i.postimg.cc/L6TsJWL1/IMG-8119.avif',
    'https://i.postimg.cc/rF8V293F/IMG-8138.avif',
    'https://i.postimg.cc/K8jmR8m6/IMG-8140.avif',
    'https://i.postimg.cc/mkTsRbd6/IMG-8144.avif',
    'https://i.postimg.cc/qMbTVH2j/IMG-8166.avif',
    'https://i.postimg.cc/Gm41bgQr/IMG-8169.avif',
    'https://i.postimg.cc/0yh1jGWS/IMG-8170.avif',
    'https://i.postimg.cc/rsVv3fmB/IMG-8174.avif'
];

function Carrousel() {
  return (
    <section className='carrousel'>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {fotos.map((foto, index) => (
            <button 
              key={index} 
              type="button" 
              data-bs-target="#carouselExampleIndicators" 
              data-bs-slide-to={index} 
              className={index === 0 ? 'active' : ''} 
              aria-current={index === 0 ? 'true' : 'false'} 
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {fotos.map((foto, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={foto} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Carrousel;
