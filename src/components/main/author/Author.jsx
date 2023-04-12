import { React, useState, useEffect} from 'react'
import { ReactComponent as Tonkean } from 'svg/works/tonkean.svg'
import { ReactComponent as Bigspring } from 'svg/works/bigspring.svg'
import { ReactComponent as Clearbit } from 'svg/works/clearbit.svg'
import { ReactComponent as Mine } from 'svg/works/mine.svg'
import { ReactComponent as Shake } from 'svg/works/shake.svg'
import { ReactComponent as LeftArrow } from 'svg/arrows/left-arrow.svg'
import { ReactComponent as RightArrow } from 'svg/arrows/right-arrow.svg'

function Author() {
    const [companies] = useState([
        {id: 0, item: <Tonkean className='tonkean'/>},
        {id: 1, item: <Bigspring className='bigspring '/>},
        {id: 2, item: <Clearbit className='clearbit '/>},
        {id: 3, item: <Mine className='mine '/>},
        {id: 4, item: <Shake className='shake '/>},
    ])

    const [currentIndex, setCurrentIndex] = useState(0)
    const [arrowBlock, setArrowBlock] = useState(false)

    useEffect(() => {
        const lastIndex = companies.length - 1;
        if(currentIndex < 0) {
            setCurrentIndex(lastIndex)
        }

        if(currentIndex > lastIndex) {
            setCurrentIndex(0)
        }
    }, [currentIndex, companies])

    useEffect(() => {
        let autoSlider = setInterval(() => setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1), 4000)
        return () => {
            clearInterval(autoSlider)
        }
    }, [currentIndex])

  return (
    <div className='author'>
        <div className="author__background">
            <div className='author__info container'>
                <p className="author__quote"><q>What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process</q></p>
                <div className="author__bio">
                    <img src="images/other/profile.png" alt="Profile_photo" className="author__portrait" />
                    <p className="author__name">Guillaume Cabane</p>
                    <p className="author__cto">CTO @ BigSpring</p>
                </div>
                    <div className="author__companies">
                        {companies.map((item, itemIndex) => {
                            let position = ''

                            if(itemIndex === currentIndex) {
                                position = 'active-slide'
                            }
                            
                            if(itemIndex > currentIndex) {
                                position = 'next-slide'
                            }

                            if(itemIndex < currentIndex) {
                                position='last-slide'
                            }

                            return(
                                <div className={`item ${position}`} key={item.id}>{item.item}</div>
                            )
                        })}
                    </div>
                <div className="author__companies-function">
                    <div className="companies__arrows">
                        <button className='left-arrow__button' disabled={arrowBlock} onClick={() => {
                                setArrowBlock(true)
                                setTimeout(() => setArrowBlock(false), 500)
                                setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1)}
                                }> 
                            <LeftArrow className='left-arrow arrow'/>
                        </button>
                        <button className='right-arrow__button' disabled={arrowBlock} onClick={() => {
                                setArrowBlock(true)
                                setTimeout(() => setArrowBlock(false), 500)
                                setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)}
                                }>
                            <RightArrow className='right-arrow arrow'/>
                        </button>
                    </div>
                    <div className="companies__dots">
                        {companies.map((dot, dotIndex) => {
                            
                            let dotPosition = ''

                            if(dotIndex === currentIndex) {
                                dotPosition = 'active'
                            }

                            if(dotIndex === currentIndex - 1 || (currentIndex === 0 && dotIndex === dot.length - 1)) {
                                dotPosition = ''
                            }

                            return (
                                <span onClick={() => {setCurrentIndex(prevCurrentIndex => prevCurrentIndex = dotIndex)}}
                                    className={`dot ${dotPosition}`} 
                                    key={dot.id} 
                                ></span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Author