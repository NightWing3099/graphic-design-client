import './App.css'

function App() {

  return (
    <body>
        <div className="navbar-section">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark style="color: white">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                  </ul>
                  <span class="navbar-text">
                    Navbar text with an inline element
                  </span>
                </div>
              </div>
            </nav>
        </div>
      <div className="hero-section"></div>
    </body>
  )
}

export default App
