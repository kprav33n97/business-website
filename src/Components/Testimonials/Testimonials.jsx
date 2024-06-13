import React, { useRef } from 'react'
import './Testimonials.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx>-50) {
            tx-=25;
        }

        slider.current.style.transform = `translateX(${tx}%)`    
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx+=25;
         }

        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
      <img src={nextIcon} alt="Next Icon" className='next-btn' onClick={slideForward} />
      <img src={backIcon} alt="Next Icon" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="User Image" />
                        <div>
                            <h3>Name</h3>
                            <span>Country</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis vitae iure libero quisquam nisi, sapiente illum magnam magni. Sit adipisci, qui exercitationem illo totam eum.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="User Image" />
                        <div>
                            <h3>Name</h3>
                            <span>Country</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis vitae iure libero quisquam nisi, sapiente illum magnam magni. Sit adipisci, qui exercitationem illo totam eum.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="User Image" />
                        <div>
                            <h3>Name</h3>
                            <span>Country</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis vitae iure libero quisquam nisi, sapiente illum magnam magni. Sit adipisci, qui exercitationem illo totam eum.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="User Image" />
                        <div>
                            <h3>Name</h3>
                            <span>Country</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis vitae iure libero quisquam nisi, sapiente illum magnam magni. Sit adipisci, qui exercitationem illo totam eum.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
