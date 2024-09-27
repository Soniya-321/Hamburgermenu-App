// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => {

  return (
    <div>
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="failure-img"
      />
      <h1 className="failure-heading">Lost Your Way?</h1>
      <p className="para">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
    </div>
  )
}

export default NotFound
