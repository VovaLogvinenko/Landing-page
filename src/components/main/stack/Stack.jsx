import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ReactComponent as Product } from 'svg/info/product.svg'
import { ReactComponent as BlueLogo } from 'svg/stack/blue-logo.svg'
import { ReactComponent as Amazon } from 'svg/stack/amazon.svg'
import { ReactComponent as Azure } from 'svg/stack/azure.svg'
import { ReactComponent as Bigquery } from 'svg/stack/bigquery_1.svg'
import { ReactComponent as Google } from 'svg/stack/google-cloud.svg'
import { ReactComponent as MySql } from 'svg/stack/mysql.svg'
import { ReactComponent as Redshift } from 'svg/stack/redshift.svg'
import { ReactComponent as Snowflake } from 'svg/stack/snowflake.svg'

function Stack() {
    const [stackCircle] = useState([
        {id: 0, name: 'logo', item: <BlueLogo className='item'/>},
        {id: 1, name: 'snowflake', item: <Snowflake className='item'/>},
        {id: 2, name: 'mysql', item: <MySql className='item'/>},
        {id: 3, name: 'redshift', item: <Redshift className='item'/>},
        {id: 4, name: 'bigquery', item: <Bigquery className='item'/>},
        {id: 6, name: 'azure', item: <Azure className='item'/>},
        {id: 7, name: 'google', item: <Google className='item'/>},
    ])

    const [active, setActive] = useState(false) 
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true
    })

    useEffect(() => {
        if(inView) {
            setActive(true)
        }
    }, [inView])

  return (
    <div className='stack'>
        <div className="stack__circle lazy-anim">
            <div className="stack__circle-items">
                {stackCircle.map(e => (
                    <div className={`stack__circle-${e.name} ${active ? 'active' : ''} reset`} style={{'--i': 1 * (e.id)}} key={e.id}>
                        {e.item}
                    </div>
                ))}
                    <div ref={ref} className={`stack__circle-amazon lazy-anim reset`} style={{'--i': 1 * 5}}>
                        <Amazon className='item'/>
                    </div>
                {stackCircle.map(e => (
                    <div className={`stack__circle-${e.name} lazy-anim reset toggle`} key={e.id + 1}>
                        {e.item}
                    </div>
                ))}
                    <div className={`stack__circle-amazon lazy-anim reset toggle`}>
                        <Amazon className='item'/>
                    </div>
            </div>
        </div>
        <div className="stack__text-block">
            <div className="stack__info lazy-anim ">
                <Product className="stack__info-image over-title__image" />
                <p className="stack__info-text">For Product Teams</p>
            </div>
        <h2 className="stack__title lazy-anim">Launch with the best stack</h2>
        <p className="stack__text lazy-anim">A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind</p>
        </div>
    </div>
  )
}

export default Stack