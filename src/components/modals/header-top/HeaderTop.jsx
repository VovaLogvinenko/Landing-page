import BurgerMenu from 'components/modals/burger-menu/BurgerMenu'
import { ReactComponent as Logo } from 'svg/other/logo.svg'

function HeaderTop() {

  return (
    <div className='header-top'>
      <a href="#Home" className='header-top__logo'><Logo /></a>
      <div className='header-top__block-nav'>
        <nav className="header-top__nav">
          <a href="#About" style={{'--i': 1}} className="header-top__link header-about">About</a> 
          <span style={{'--i': 1}} className='header-top__link-arrow'>&#8250;</span>
          <a href="#Pricing" style={{'--i': 2}} className="header-top__link header-pricing">Pricing</a>
          <a href="#Contact Us" style={{'--i': 3}} className="header-top__link header-contact">Contact Us</a>
          <a href="#Login" style={{'--i': 4}} className="header-top__link header-login">Login</a>
        </nav>
        <button style={{'--i': 5}} className="header-top__button">Start free trial</button>
      </div>
        <BurgerMenu />
    </div>
  )
}

export default HeaderTop