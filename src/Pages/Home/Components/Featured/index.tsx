import "./Featured.css";

const Featured = () => {
    return (
        <section className="Featured">
            <section className="featured__header">
                <h2 className="Featured__headline">Budget-Friendly Choices</h2>
                <ul className="featured__filter">
                    <li>
                        <img src="https://img.icons8.com/material-outlined/24/737373/sedan.png" />
                        <p>chicos</p>
                    </li>
                    <li>
                        <img src="https://img.icons8.com/material-outlined/24/737373/suv-2.png" />
                        <p>grandes</p>
                    </li>
                </ul>
            </section>
            <ul className="featured-cars">
                <span className="bg__tagline">BLUE BLAY</span>
                <li className="featured-car">
                    <div className="features-car__image">
                        <img src="https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/fortesd/specs/Componentes_Forte22_LX.png" />
                    </div>
                    <ul>
                        <li className="featured-car__name">KIA FORTE</li>
                        <li className="featured-car__year">2024</li>
                        <li className="featured-car__price">
                            <p>
                                $1800<small>/Día</small>
                            </p>
                            <a href="#">Ver Más</a>
                        </li>
                    </ul>
                </li>
                <li className="featured-car">
                    <div className="features-car__image">
                        <img src="https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/fortesd/specs/Componentes_Forte22_LX.png" />
                    </div>
                    <ul>
                        <li className="featured-car__name">KIA FORTE</li>
                        <li className="featured-car__year">2024</li>
                        <li className="featured-car__price">
                            <p>
                                $1800<small>/Día</small>
                            </p>
                            <a href="#">Ver Más</a>
                        </li>
                    </ul>
                </li>
                <li className="featured-car">
                    <div className="features-car__image">
                        <img src="https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/fortesd/specs/Componentes_Forte22_LX.png" />
                    </div>
                    <ul>
                        <li className="featured-car__name">KIA FORTE</li>
                        <li className="featured-car__year">2024</li>
                        <li className="featured-car__price">
                            <p>
                                $1800<small>/Día</small>
                            </p>
                            <a href="#">Ver Más</a>
                        </li>
                    </ul>
                </li>

                {/* <li className="featured-car"></li>
                <li className="featured-car"></li> */}
            </ul>
        </section>
    );
};

export default Featured;
