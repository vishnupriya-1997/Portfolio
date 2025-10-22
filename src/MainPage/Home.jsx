import React from 'react'
import './Home.css'
import photo from '../assets/photo.png'

const Home = () => {
  return (
    <div className='main'>
      <h1 className='full'>Full Stack Developer</h1>
      <h2 className='hi'>Hi!!! <br />I Am VISHNUPRIYA.K </h2><br />
      <h3 className='intro'>
        <span style={{ color: 'cyan' }}>Intro Paragraph:</span><br /><br />
        I’m a passionate Full Stack Developer specializing in designing and developing end-to-end <br />
        web solutions. I enjoy turning complex problems into simple, elegant, and efficient digital <br />
        experiences.
      </h3>
      <div>
        <img src={photo} alt="photo" className='photo' />
      </div>
      <div className='res'>
        <a href="/vishnupriya k.pdf" target="_blank" rel="noopener noreferrer" className='resbtn'>View Resume</a>
      </div>
    </div>
  )
}

export default Home
