import './App.scss'
import './reset.scss'

function App() {

  return (
    <body>
        <div className="navbar">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      <div className="hero-section">
          <img className="hero-img" src="../images/pexels-tranmautritam-326501.jpg"  height={600} width={1366}/>
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <div className="about-info">
          <p>
            Hi, I’m a graphic designer with 10 years of experience turning ideas into designs that don’t just look good—they work. 
            I use sales psychology and copywriting techniques to create visuals that connect with people and inspire action. 
            Whether it’s building a brand, designing a website, or crafting marketing materials, 
            I focus on making every project resonate with the audience and deliver results. 
            Let’s work together to bring your vision to life.
          </p>

        </div>
        <div className="about-img"></div>
        <div className="background-overlay"></div>
      </div>
      <div className="portfolio-section">
        <h1 className="projects-intro">My Work</h1>
        <div className="projects"></div>
      </div>
    </body>
  )
}

export default App
