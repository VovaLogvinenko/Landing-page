import { useState, React } from 'react'
import SignUp from 'components/modals/sign-up/SignUp'
import { ReactComponent as Accenture } from 'svg/companies/accenture.svg'
import { ReactComponent as Reactimg } from 'svg/companies/react.svg'
import { ReactComponent as Airbnb } from 'svg/companies/airbnb.svg'
import { ReactComponent as Sky } from 'svg/companies/sky.svg'

function MainBottom() {
    const [companies] = useState([
        {id: 0, item: <Accenture className='accenture'/>},
        {id: 1, item: <Reactimg className='react '/>},
        {id: 2, item: <Airbnb className='airbnb '/>},
        {id: 3, item: <Sky className='sky '/>},
    ])
  return (
    <div className='main-bottom'>
        <div className="main-bottom__trusted trusted">
            <h2 className="trusted__title">See why the world's best companies use Qubly to become truly data-driven.</h2>
            <div className="trusted__text">Trusted by</div>
            <div className="trusted__companies">
                {companies.map((element) => (
                    <div className='company' key={element.id}>{element.item}</div>
                ))}
            </div>
        </div>
        <div className="main-bottom__signup">
            <div className="main-bottom__signup-background"></div>
            <SignUp />
        </div>
    </div>
  )
}

export default MainBottom