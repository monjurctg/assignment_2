import React from 'react'

function ClientReview({name,title,discription}) {
  return (
    <div>
        <div className="d-flex client-review ">
            <img src="https://a0.muscache.com/im/pictures/user/c3b9d372-ee99-4e99-aef8-9700a2269d81.jpg?im_w=240" alt="" />
            <div>
                <h6>{name}
                </h6>
                <p style={{fontSize:14,fontWeight:"400",lineHeight:"10px"}}>{title}</p>
            </div>
        </div>
        <p className='mt-4'>{discription}</p>
    </div>
  )
}

export default ClientReview