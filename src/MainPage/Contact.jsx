import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='box'>
        <div className='form'>
          <form action="">
            <h1>CONTACT FORM</h1><br />
            <label htmlFor="" className='letter'>Name :</label><br />
            <input type="text" name='name' className='name'/><br />
            <label htmlFor="" className='letter'>Email :</label><br />
            <input type="email" name="email"  className='name'/><br />
            <label htmlFor=""className='letter'>Password :</label><br />
            <input type="password" name='password' className='name'/><br />
            <label htmlFor=""className='letter'>Message :</label><br />
            <textarea name='message' className='msg'></textarea><br /><br />
            <button className='btn'>Send</button>
          </form>
        </div>

        <div className='cont'>
          <h1>DO YOU HAVE A PROJECT TO DISCUSS?</h1><br />
          <h2>LET’S CONNECT ⚡</h2>
          <h3>CONTACT :</h3>
          <p className="email">📧 vishnu7797jk@gmail.com</p>
        </div>  
      </div>
      
      <footer className="footer">
        <h3 className='footer-title'>FOLLOW ME ON</h3>
        <div className="social-icons">
          
          <a href="https://www.linkedin.com/in/vishnu-priya-015694296/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="icon" />
          </a>
          <a href="mailto:vishnu7797jk@gmail.com">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="icon" />
          </a>
        </div>
        <p className="footer-text">© 2025 <span>VISHNUPRIYA</span> | Designed with 💜 Passion & Code</p>
      </footer>
    </>
  )
}

export default Contact
