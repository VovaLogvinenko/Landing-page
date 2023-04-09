import { useState, React} from 'react'
import { ReactComponent as Logo } from 'svg/other/logo.svg'
import { ReactComponent as Facebook } from 'svg/social/facebook.svg'
import { ReactComponent as Twitter } from 'svg/social/twitter.svg'
import { ReactComponent as Instagram } from 'svg/social/instagram.svg'
import { ReactComponent as Send } from 'svg/other/send.svg'
import { product, forDevelopers, company, support } from './info.js'

function Footer() {
    const [email, setEmail] = useState('')
    const [emailLength, setEmailLength] = useState(true)

    function sendForm(e) {
        if(email.length === 0) {
            setEmailLength(false)
        } else {
            setEmailLength(true)
        }
    }
  return (
    <footer className='footer'>
        <div className="footer__info container">
            <section className="footer__description footer__block">
                <div className='footer__description-first'>
                    <Logo className='footer__logo'/>
                    <p className="footer__description-text footer__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim</p>
                </div>
                    <div className="footer__social">
                        <a href="https://uk-ua.facebook.com/" rel='noreferrer' target="_blank" className='footer__social-link'><Facebook /></a>
                        <a href="https://twitter.com/" rel='noreferrer' target="_blank" className='footer__social-link'><Twitter /></a>
                        <a href="https://www.instagram.com/" rel='noreferrer' target="_blank" className='footer__social-link'><Instagram /></a>
                    </div>
            </section>
            <section className="footer__product footer__block">
                <h3 className="footer__product-title footer__title">Product</h3>
                <ul className="footer__product-list footer__list">
                    {product.map(element => (
                        <li className="footer__product-list-element footer__list-item" key={element.id}>{element.item}</li>
                    ))}
                </ul>
            </section>
            <section className="footer__developers footer__block">
                <h3 className="footer__developer-title footer__title">For Developers</h3>
                <ul className="footer__developer-list footer__list">
                    {forDevelopers.map(element => (
                        <li className="footer__developer-list-element footer__list-item" key={element.id}>{element.item}</li>
                    ))}
                </ul>
            </section>
            <section className="footer__company footer__block">
                <h3 className="footer__company-title footer__title">Company</h3>
                <ul className="footer__company-list footer__list">
                    {company.map(element => (
                        <li className="footer__company-list-element footer__list-item" key={element.id}>{element.item}</li>
                    ))}
                </ul>
            </section>
            <section className="footer__support footer__block">
                <h3 className="footer__support-title footer__title">Support</h3>
                <ul className="footer__support-list footer__list">
                    {support.map(element => (
                        <li className="footer__support-list-element footer__list-item" key={element.id}>{element.item}</li>
                    ))}
                </ul>
            </section>
            <section className="footer__newsletter">
                <h3 className="footer__newsletter-title footer__title">Newsletter</h3>
                <form className="footer__newsletter-input-group">
                    <input 
                        type="email" 
                        id="newsletter-email" 
                        className={`footer__newsletter-input ${emailLength ? '' : 'error'}`} 
                        required
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <label htmlFor="newsletter-email" className={`footer__newsletter-label ${email.length !== 0 ? 'label-active' : ''}`}>Email</label>
                    <button className="footer__newsletter-button" onClick={(e) => sendForm(e)}><Send /></button>
                </form>
            </section>
        </div>
        <div className="footer__copyright">
            <h2 className='footer__copyright-name'>Rahul Rao</h2>
            <h2 className='footer__copyright-symbol'>&copy;</h2>
        </div>
    </footer>
  )
}

export default Footer