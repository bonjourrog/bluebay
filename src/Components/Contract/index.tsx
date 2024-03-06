import { Steps } from 'antd';
import { ContractProps } from './Contrac.props';
import './Contract.css';

const Contract: React.FC<ContractProps> = ()=>{
    return <section className='contract'>
        <Steps 
            className='contract__steps'
            direction='vertical'
            current={1}
            items={[
            {
                title: 'Finished',
                description:"descrioption here",
            },
            {
                title: 'In Progress',
                description:"descrioption here",
            },
            {
                title: 'Waiting',
                description:"descrioption here",
            },
            ]}
        />
    </section>
}

export default Contract;