import { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group';

function BurgerMenu() {
    const [burgerState, setBurgerState] = useState(false)

    // Remove/Add scroll
    useEffect(() => {
      if(burgerState === true)
        document.body.style.overflow = "hidden" 
      else 
        document.body.style.overflow = "visible"

    }, [burgerState])
    
    const burgerBgStyle = {
      "visibility": burgerState ? "visible" : "",
      "transform": burgerState ? "scale(50)" : "",
    }

  return (
    <div className="burger-menu">
          <div className="burger-menu__button" onClick={() => setBurgerState(prevBurgerState => !prevBurgerState)}>
            <div className="line line1" style={{transform: burgerState ? "rotate(-45deg) translate(-6.8px, 6px)" : ""}}></div>
            <div className="line line2" style={{transform: burgerState ? "scale(0)" : ""}}></div>
            <div className="line line3" style={{transform: burgerState ? "rotate(45deg) translate(-6.8px, -6px)" : ""}}></div>
          </div>
        <div className="burger-menu__background" style={{...burgerBgStyle}}></div>
        <Transition
          in={burgerState}
          timeout={500}
          unmountOnExit
        >
          {state => 
            <nav className={`burger-menu__nav burger-menu__nav-${state}`}>
              <div className='burger-menu__nav-list'>
                <div className='burger-menu__about'>
                    <a href="#About" className="burger-menu__link" onClick={() => setBurgerState(false)}>About</a> 
                    <span className='burger-menu__link-arrow'>&#8250;</span>
                </div>
                <a href="#Pricing" className="burger-menu__link" onClick={() => setBurgerState(false)}>Pricing</a>
                <a href="#Contact Us" className="burger-menu__link" onClick={() => setBurgerState(false)}>Contact Us</a>
                <a href="#Login" className="burger-menu__link" onClick={() => setBurgerState(false)}>Login</a>
              </div>
            </nav>
          }
        </Transition>
    </div>
  )
}

export default BurgerMenu