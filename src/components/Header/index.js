import './style.css'
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.jpg'


export default function Header() {
    return (
        <div className='header'>
            <div className='div_logo' >
                <img src={logo} alt='logo' />
            </div>
            <div className='div_profile'>
                <img className='profile' src={profile} alt='profile' />
                <span>Bem vindo, Daniel</span>
            </div>
        </div>
    )
}
