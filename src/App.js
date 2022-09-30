import './App.css';
import photo from './images/aishwarya-photo.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <div><img className='header--img' src={photo} alt='Aishwarya'/></div>
        <h2>Aishwarya Mali</h2>
        <h4>Frontend Developer</h4>
        <a href='https://aishwarya-mali.github.io/portfolio/'><small>aishwarya-mali.github.io/portfolio</small></a>
        <div className='header--btns'>
          <a href="mailto:aishwaryamali29@gmail.com" title="aishwaryamali29@gmail.com"><div className='header--mail'><i class="fa-solid fa-envelope"></i>Email</div></a>
          <a href="https://www.linkedin.com/in/aishwarya-mali-80849a169" title='Aishwarya LinkedIn'><div className='header--li'><i class="fa-brands fa-linkedin"></i>LinkedIn</div></a>
        </div>
      </header>

      <main>
        <div className='about'>
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className='interests'>
          <h3>Interests</h3>
          <p>Food. Music. Reader. Internet fanatic. Travel geek. Coffee fanatic.</p>
        </div>
      </main>

      <footer>
        <a href='https://codepen.io/aishwarya_mali'><i class="fa-brands fa-codepen"></i></a>
        <a href='https://github.com/aishwarya-mali'><i class="fa-brands fa-github"></i></a>
      </footer>
    </div>
  );
}

export default App;
