import React from 'react'
import { ReactComponent as Eye } from 'svg/info/eye.svg'
import { ReactComponent as Algorithm } from 'svg/big-data/algorithm.svg'
import { ReactComponent as Bussines } from 'svg/big-data/bussines.svg'
import { ReactComponent as Data } from 'svg/big-data/data.svg'



function BigData() {
    const steps = [
        {image: <Bussines className='steps__image'/>, name: "bussines", title: "Valuable business insights", text: "Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.", id: 1},
        {image: <Algorithm className='steps__image'/>,  name: "algorithm", title: "Powerful Algorithms", text: "With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data.", id: 2},
        {image: <Data className='steps__image'/>,  name: "data", title: "Data in real-time", text: "Collect data in real-time from multiple channels and move it into a data lake, in its original format.", id: 3},
    ]

  return (
    <div className='big-data'>
        <div className="big-data__info lazy-anim">
          <Eye className="big-data__info-image over-title__image" />
          <p className="big-data__info-text">Why Qubly</p>
        </div>
        <h2 className="big-data__title lazy-anim">Get actionable insights from Big Data in 3 steps</h2>
        <p className="big-data__text lazy-anim">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <div className="big-data__steps steps">
            {steps.map(e => (
                <article className="steps__block lazy-anim" key={e.id} style={{'--i': 1 * (e.id)}}>
                    <div className={`steps__image-block`}>
                        {e.image}
                        <div className={`steps__background-${e.name}`}></div>
                    </div>
                    <h3 className="steps__title">{e.title}</h3>
                    <p className="steps__text">{e.text}</p>
                </article>
            ))}
        </div>
    </div>
  )
}

export default BigData