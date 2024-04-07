import './PaymentMethods.css';
import { PaymentMethodsProps } from './PaymentMethods.props';

const PaymentMethods: React.FC<PaymentMethodsProps> = ()=>{
    return <div className='payment-methods'>
        <h3 className='methods__title'>Aceptamos</h3>
        <div className='methods'>
            <img width="50" height="50" src="https://img.icons8.com/ios/200/022677/visa.png" alt="visa"/>
            <img width="50" height="50" src="https://img.icons8.com/ios/200/022677/mastercard.png" alt="mastercard"/>
            <img width="50" height="50" src="https://img.icons8.com/pastel-glyph/200/022677/pay.png" alt="pay"/>
        </div>
    </div>
}

export default PaymentMethods;