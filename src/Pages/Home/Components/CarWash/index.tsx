import "./CarWash.css";
import { CiCircleCheck } from "react-icons/ci";

const Carwash = () => {
    return (
        <section className="Carwash">
            <h3 className="Carwash__title">Servicio de carwash</h3>
            <ul className="pricing">
                <li className="pricing__card">
                    <p className="pricing__name">service name</p>
                    <p className="pricing__price">$200</p>
                    <ul className="pricing__features">
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                    </ul>
                </li>
                <li className="pricing__card">
                    <p className="pricing__name">service name</p>
                    <p className="pricing__price">$200</p>
                    <ul className="pricing__features">
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                    </ul>
                </li>
                <li className="pricing__card">
                    <p className="pricing__name">service name</p>
                    <p className="pricing__price">$200</p>
                    <ul className="pricing__features">
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                        <li className="pricing__feature">
                            <CiCircleCheck />
                            Feature 1
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Carwash;
