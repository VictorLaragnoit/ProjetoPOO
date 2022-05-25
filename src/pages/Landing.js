import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom' 
function Landing() {
  return (
      <Wrapper>
          <nav>
              <Logo/>
          </nav>
          <div className='container page'>
              <div className='info'>
                  <h1>
                      job <span>tracking</span> app
                  </h1>
                  <p>
                        What's up everybody, 
                        this is John from Coding Addict and 
                        welcome to my MERN Stack course . 
                        During the course we will build full stack application 
                        (Jobify) from scratch, using MongoDB, 
                        Express, React 
                        and Node.js
                  </p>
                  <Link to='/register' className='btn btn-hero'>
                      Login/Register
                  </Link>
              </div>
              <img src={main} alt='job hunt' className='img main-img'>

              </img>
          </div>
      </Wrapper>
  )
}

export default Landing