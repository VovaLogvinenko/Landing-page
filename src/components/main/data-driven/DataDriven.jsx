import React from 'react'
import { ReactComponent as Engineer } from 'svg/info/engineer.svg'


function DataDriven() {
  return (
    <div className='data-driven'>
        <div className="data-driven__text-block">
            <div className="data-driven__info lazy-anim ">
                <Engineer className="data-driven__info-image over-title__image" />
                <p className="data-driven__info-text">For Engineering Teams</p>
            </div>
        <h2 className="data-driven__title lazy-anim">Data-driven pipelines in minutes</h2>
        <p className="data-driven__text lazy-anim">Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.</p>
        </div>
        <img src="images/other/data-driven.png" alt="Data-driven" width="500" height="400" className='data-driven__image lazy-anim'/>
    </div>
  )
}

export default DataDriven