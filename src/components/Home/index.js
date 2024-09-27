// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => {
  return (
    <div>
      <Header />
      <Link to='/' className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="home-sm-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="home-lg-img"
        />
      </Link>
    </div>
  )
}

export default Home
