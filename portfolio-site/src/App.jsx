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
        <div className="overlay">
          <img src="../images/graphic2.jpg"  height={700} width={1366}/>
        </div>
      </div>
    </body>
  )
}

export default App
