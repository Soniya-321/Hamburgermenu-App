// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'
const About = () => {
  return (
    <div>
      <Header />
      <Link to='/about' className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
          className="home-sm-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
          className="home-lg-img"
        />
      </Link>
    </div>
  )
}
export default About
