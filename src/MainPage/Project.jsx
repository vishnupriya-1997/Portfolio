import React from 'react'
import './Project.css'
const Project = () => {
  return (
    <>
    <div className='pro'>
      <div className='ai'>
      <h2>AI Interview Platform</h2>
      <h4>An interactive AI-based interview system that conducts voice HR interviews directly in the browser.
          The AI asks dynamic, non-repeating questions, listens to the user’s voice answers, and gives context-based follow-up questions using speech-to-text and text-to-speech.
          Built using HTML, CSS, JavaScript, and Spring Boot, it runs fully in the browser with no terminal or API cost</h4>
      <h4> <span style={{color:'rgba(91, 241, 80, 1)'}}>Tech Stack </span>💻 <br /> <span style={{color:'rgba(50, 240, 231, 1)'}}>Frontend:</span> HTML, CSS, JavaScript (Web Speech API)<br /><span style={{color:'rgba(50, 240, 231, 1)'}}>Backend:</span> Java, Spring Boot<br /> <span style={{color:'rgba(50, 240, 231, 1)'}}>AI Engine: </span>Local API / Vapi Integration<br /><span style={{color:'rgba(50, 240, 231, 1)'}}>Tools:</span> VS Code, Maven, Postman</h4>
      <div>
        <img src="https://cdn.dribbble.com/userupload/8367597/file/original-80e26632af0c177fd934874eeeb877b9.png?resize=752x&vertical=center" alt="inter" className='inter' />
      </div>
      </div>
      <div className='stud'>
         <div><img src="https://jpinfotech.org/wp-content/uploads/2023/12/JC04-Employee-Attendance-System-using-QR-Code.jpg" alt="qr" className='qr' /></div>
      <h2>Student Details Using QR in Java</h2>
      <h4>A secure and efficient system for managing student information using QR code technology.
          The project encodes each student’s name, ID, course, and contact details into a unique QR code, allowing quick and contactless identification for activities like attendance, library access, and exam verification.
          Built using Java and ZXing (Zebra Crossing) library, it can generate and scan QR codes, ensuring accuracy, privacy, and scalability across educational institutions.</h4>
          <h4><span style={{color:'rgba(91, 241, 80, 1)'}}>Tech Stack </span>💻 <br /> <span style={{color:'rgba(50, 240, 231, 1)'}}>Language:</span> Java<br /> <span style={{color:'rgba(50, 240, 231, 1)'}}>Library:</span> ZXing (Zebra Crossing) <br /><span style={{color:'rgba(50, 240, 231, 1)'}}>Concepts Used: </span>File handling, QR code generation, and decoding</h4>
       

     </div>
      
    </div>
    </>
  )
}

export default Project
