import React from 'react'
import { ReactComponent as Stars } from 'svg/info/version.svg'

function HeaderBody() {

  return (
    <div className='header-body'>
      <div className="header-body__data data">
        <div className="data-info">
          <Stars className="data-info__image over-title__image" />
          <p className="data-info__text">v3.1 released. <a href="#Learn" className="data-info__link">Learn more</a></p>
        </div>
        <h1 className="data__title">Your data with <br /> real-time analytics</h1>
        <p className="data__text">Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>
        <div className="data__buttons">
          <button className="data__button-one">Start free trial</button>
          <button className="data__button-two">Learn more</button> <br/>
        </div>
      </div>
      <img src="images/other/first-img.png" alt="Chip" className='header-body__image'/>
    </div>
  )
}

export default HeaderBody