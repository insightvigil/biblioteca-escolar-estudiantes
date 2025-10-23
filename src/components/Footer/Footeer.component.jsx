import icon from '../../assets/pajaro.png'
import './Footer.styles.scss'
const Footer = () => {
    return (
        <>
        
        <footer className='footer'  title="#OrgullosamenteCenzontles">
            <figure>
                <img src={icon} alt=""/>
            </figure>
            <small>&copy; Instituto Tecnológico de Atitalaquia 2025</small>
        </footer>
        </>
    )
}

export default Footer