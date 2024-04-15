import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container'>
        <div className="contact">
            <div className="myimg">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQetgVNsmh9tCLuseU2Mf-4aHRmV6PtgtSzfHcl6qy2vLiQtY3b" alt="" />
            </div>
          <form action="">
            <input type={'text'} placeholder='Enter Your Name'  />
            <input type={'email'}  placeholder='Enter Your Email'/>
            <input type={'number'}  placeholder='Mobile num'/>
            <div >
                <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      
    </div>
  )
}

export default Contact
