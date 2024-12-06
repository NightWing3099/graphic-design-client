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
        <div className="about-info">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id blandit dolor, sit amet consectetur quam. 
            Quisque blandit nisi a nibh finibus bibendum eu sed massa. Fusce nisi augue, gravida a enim id, lobortis lobortis justo. Nam sit amet dignissim nulla, sed tincidunt risus. 
            Sed libero urna, ultrices et ex id, iaculis accumsan nulla. Proin non ante eu tellus suscipit imperdiet vel vel nisl. Nam commodo nunc vel libero scelerisque fringilla. 
            Duis commodo pharetra elementum. Quisque facilisis mauris nisl, nec sodales quam rhoncus id. Aliquam quis metus tincidunt, fringilla diam a, dapibus arcu. </p>

            <p>Nullam sagittis a lacus quis semper. Vestibulum nec fringilla eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas pretium hendrerit lacus, et interdum lorem interdum non. Sed lobortis ultricies efficitur. Morbi rhoncus lorem sed justo sagittis porttitor. 
            Mauris dictum lectus nec enim consequat commodo. In aliquet, nibh et pulvinar pharetra, enim nisl maximus dui, vel vestibulum eros eros eu est. 
            Morbi lacinia est eget aliquam sodales.</p>

        </div>
        <div className="about-img">hi</div>
      </div>
    </body>
  )
}

export default App
