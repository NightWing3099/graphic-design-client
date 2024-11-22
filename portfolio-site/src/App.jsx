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
        About the designer
      </div>
    </body>
  )
}

export default App
