// Write your code here
import Popup from 'reactjs-popup'
import {Redirect, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => {
  const onclickLogo = () => {
    return <Redirect to="/" />
  }
  return (
    <>
      <div className="header-container">
        <Link to="/" className="item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo-img"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hamburger-img" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="popup-container">
              <button
                type="button"
                className="button-2"
                data-testid="closeButton"
              >
                <IoMdClose onClick={() => close()} className="close-img" />
              </button>
              <ul className="pop-up">
                <li className="list-item">
                  <AiFillHome className="icon" />
                  <Link to="/" className="item">
                    <h1>Home</h1>
                  </Link>
                </li>

                <li className="list-item">
                  <BsInfoCircleFill className="icon" />
                  <Link to="/about" className="item">
                    <h1>About</h1>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
      <hr className="separator" />
    </>
  )
}

export default Header
