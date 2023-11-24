import './index.scss';
import LogoT from '../../../assets/images/T.svg'

const Logo = () => {
    
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoT} alt="T" />
        </div>
    )
}

export default Logo