import React from 'react'

function MeetYourHost() {
  return (
    <div>
      <h4 className='mb-4'>Meet your host</h4>
      <div className='hostBox'>
        <div className='hsCenter'>
          <div className='host'>
            <div className='hostImg'>
              <img src="https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240" alt="" />
              <h3>Sagrario</h3>
              <span>Superhost</span>
            </div>
            <div className='hostRate'>
              <div className='hostData'>
                <h6>316</h6>
                <span>Reviews</span>
              </div>
              <div className='hostData'>
                <h6>4.86</h6>
                <span>Rating</span>
              </div>
              <div className='hostData hostData2 '>
                <h6>7</h6>
                <span>Year hosting</span>
              </div>
            </div>
          </div>
          <div className='mb-4'>
            <div className='hostPera mb-3'>             
              <i class="ri-graduation-cap-line"></i>
              <p>Where I went to school: Universidad de Psicología en Valencia</p>
            </div>
            <div className='hostPera mb-3'>             
            <i class="ri-briefcase-line"></i>
              <p>My work: coach</p>
            </div>
            <div className='hostPera mb-3'>             
            <i class="ri-timer-line"></i>
              <p>I spend too much time: Search for activities for guests</p>
            </div>
            <div className='hostPera mb-3'>             
            <i class="ri-hand-heart-line"></i>
              <p>For guests, I always: Help them enjoy Valencia</p>
            </div>
            <div className='hostPera'>             
            <i class="ri-bard-line"></i>
              <p>What makes my home unique: Good energy and feeling at home</p>
            </div>
          </div>

          <div className='border-bottom pb-4 pb-sm-5 mb-3 border-dark-subtle'>
            <p className='mb-2'>Open and communicative, with donation of people and happy to welcome friends from the world at home.</p>
            <a className='d-flex items-center mb-4' href="#">Show more <i class="ri-arrow-right-s-line"></i></a>
            <button className='hostBtn'>Message Host</button>
          </div>
          <span className='note'>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</span>

        </div>
      </div>
    </div>
  )
}

export default MeetYourHost