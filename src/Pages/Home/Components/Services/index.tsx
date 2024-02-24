import './Services.css';

const Services = ()=>{
    return <section className='Services' id='services'>
        <div className='Services__header'>            
        <h2 className='Services__headline'>Servicios</h2>
        <p className='services__message'>En nuestro catálogo encontrarás una amplia gama de opciones para satisfacer todas tus necesidades de movilidad y cuidado vehicular</p>
            <img src="https://res.cloudinary.com/dzqoo2so5/image/upload/v1708315925/bluebay/images/pfv4x9zrwgaxaccz8fxw.jpg" alt="" />
        </div>
        <div className='Services__container'>
            <ul className='Services__list'>
                <li className='service'>
                    <img src='https://res.cloudinary.com/dzqoo2so5/image/upload/v1708359631/bluebay/images/ovjmmfj0zmbzzbgkyykk.svg' className='service__image' alt='icon car'/>
                    <h4>RENTA</h4>
                    <button className='service__button'>
                        <small>MÁS INFORMACIÓN</small>
                    </button>
                </li>
                <li className='service'>
                    <img className='service__image' src='https://res.cloudinary.com/dzqoo2so5/image/upload/v1708364729/bluebay/images/eensafvgsiaposzd6gph.svg' alt='steering wheel icon'/>
                    <h4>CHOFER</h4>
                    <button className='service__button'>
                        <small>MÁS INFORMACIÓN</small>
                    </button>
                </li>
            </ul>
        </div>
    </section>
}

export default Services;