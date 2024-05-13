import { Collapse, CollapseProps } from 'antd';
import './FAQ.css';
import { FAQProps } from './FAQ.props';

const FAQ: React.FC<FAQProps> = ()=>{

    const questions: CollapseProps['items'] = [
        {
            key:1,
            label:<strong>¿Se requiere tarjeta de crédito para rentar un auto?</strong>,
            children:[<p>No, no se requiere tarjeta de crédito para rentar un auto con nosotros. Aceptamos tanto tarjetas de crédito como efectivo como formas de pago. Queremos que alquilar un automóvil sea conveniente y accesible para todos nuestros clientes, por lo que ofrecemos opciones flexibles de pago para adaptarnos a sus necesidades.</p>]
        },
        {
            key:2,
            label:<strong>¿Hay tarifas adicionales o cargos ocultos?</strong>,
            children:[<p>No, en absoluto. En nuestro sistema de precios, no hay tarifas adicionales ni cargos ocultos. Nos esforzamos por brindar transparencia en todas nuestras transacciones y garantizar que nuestros clientes se sientan seguros y confiados al hacer negocios con nosotros.</p>]
        },
        {
            key:3,
            label:<strong>¿Qué documentos debo presentar al momento de rentar?</strong>,
            children:[<ul className='faq__requirements'>
                    <li className='faq__requirement'>Licencia vigente</li>
                    <li className='faq__requirement'>Credencial de lector</li>
                </ul>
            ]
        }
    ]
    return <section className='faq'>
        <h2 className='faq__headline'>FAQ</h2>
        <Collapse items={questions} defaultActiveKey={['1']} />
    </section>
}
export default FAQ;