import { useState, React} from 'react'

function SignUp() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    const [emailLength, setEmailLength] = useState(true)
    const [passwordLength, setPasswordLength] = useState(true)
    const [matchPassowrd, setMatchPassword] = useState(true)

    function sendForm(e) {
        if(email.length === 0) {
            setEmailLength(false)
        } else {
            setEmailLength(true)

            if(password.length <= 6) {
                e.preventDefault()
                setPasswordLength(false)
            } else {
                setPasswordLength(true)
    
                if(password !== checkPassword) {
                    e.preventDefault()
                    setMatchPassword(false)
                } else {
                    return setMatchPassword(true)
                }
            }
        }
    }


  return (
    <section className="register">
        <h2 className="register__title">Sign Up</h2>
        <form className='register__form'>
            <button className="register__button" onClick={(e) => sendForm(e)}>Start your free trial</button>
            <div className="register__input-group">
                <input 
                    type="email"
                    className={`register__input ${emailLength ? '' : 'error'}`} 
                    id='email' 
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor="email" className={`register__label ${email.length !== 0 ? 'label-active' : ''}`}>Your primary email</label>
            </div>
            <div className="register__input-group">
                <input 
                    type="password" 
                    className={`register__input ${passwordLength ? '' : 'error'}`}
                    id='password' 
                    required 
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <label htmlFor="password" className='register__label'>Password</label>
                {passwordLength ? '' : <label htmlFor="password" className="register__error">Password should be at least 7 characters long!</label>}
            </div>
            <div className="register__input-group">
                <input 
                    type="password" 
                    className={`register__input ${matchPassowrd ? '' : 'error'}`}
                    id='re-password' 
                    required
                    onChange={e => setCheckPassword(e.target.value)}
                    value={checkPassword}
                />
                <label htmlFor="re-password" className='register__label'>Re-type Password</label>
                {matchPassowrd ? '' : <label htmlFor="re-password" className='register__error'>Passwords don't match</label>}
            </div>
        </form>
        <p className="register__text">OR</p>
        <div className="register__google-authorise">
            <img src='images/other/google.png' alt='googleSignIn' width="200"/>
        </div>
        <div className="register__login">
            <span className="register__login-text">Already have an account? </span>
            <a href="Login" className="register__login-link">Login</a>
        </div>
    </section>
  )
}

export default SignUp