import photo from '../images/aishwarya-photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header(){
    return(
        <header>
            <img className='header--img' src={photo} alt='Aishwarya' />
            <h2>Aishwarya Mali</h2>
            <h4>Frontend Developer</h4>
            <a href='https://aishwarya-mali.github.io/portfolio/'><small>aishwarya-mali.github.io/portfolio</small></a>
            <div className='header--btns'>
                <a href="mailto:aishwaryamali29@gmail.com" title="aishwaryamali29@gmail.com"><div className='header--mail'> <FontAwesomeIcon icon={faEnvelope}/>Email</div></a>
                <a href="https://www.linkedin.com/in/aishwarya-mali-80849a169" title='Aishwarya LinkedIn'><div className='header--li'><FontAwesomeIcon icon={faLinkedin}/>LinkedIn</div></a>
            </div>
        </header>
    )
}