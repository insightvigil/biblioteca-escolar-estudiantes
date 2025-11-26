import icon from '../../../assets/cenzontle.png'
import './Footer.styles.scss'
const Footer = () => {
    return (
        <>
        
        <footer className='footer'  title="#OrgullosamenteCenzontles">
            <figure>
                <img src={icon} alt=""/>
            </figure>
            <small>&copy; Instituto Tecnológico de Atitalaquia 2025</small>
            <small className='brand-profile'> Desarrollado por <a href="https://github.com/insightvigil" title="#NeverStopLearning" ><i class="fa-brands fa-github"></i> Adrián Vigil</a> </small>
            
        </footer>
        </>
    )
}

export default Footer