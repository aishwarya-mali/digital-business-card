import photo from '../images/aishwarya-photo.jpg'

export default function Header(){
    return(
        <header>
            <img className='header--img' src={photo} alt='Aishwarya' />
            <h2>Aishwarya Mali</h2>
            <h4>Frontend Developer</h4>
            <a href='https://aishwarya-mali.github.io/portfolio/'><small>aishwarya-mali.github.io/portfolio</small></a>
            <div className='header--btns'>
                <a href="mailto:aishwaryamali29@gmail.com" title="aishwaryamali29@gmail.com"><div className='header--mail'><i class="fa-solid fa-envelope"></i>Email</div></a>
                <a href="https://www.linkedin.com/in/aishwarya-mali-80849a169" title='Aishwarya LinkedIn'><div className='header--li'><i class="fa-brands fa-linkedin"></i>LinkedIn</div></a>
            </div>
        </header>
    )
}