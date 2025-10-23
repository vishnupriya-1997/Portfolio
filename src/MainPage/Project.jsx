import React from 'react'
import './Project.css'
const Project = () => {
  return (
  <>
    <div className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <img
            src="https://cdn.dribbble.com/userupload/8367597/file/original-80e26632af0c177fd934874eeeb877b9.png?resize=752x&vertical=center"
            alt="Scholarship Management System"
            className="project-image"
          />
          <div className="project-info">
            <h3>AI Interview Platform</h3>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>MySQL</span>
              <span>Spring Boot</span>
              <span>Rest API</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src="https://jpinfotech.org/wp-content/uploads/2023/12/JC04-Employee-Attendance-System-using-QR-Code.jpg"
            alt="Online Fashion Stylist Website"
            className="project-image"
          />
          <div className="project-info">
            <h3>Student Details Using QR in Java</h3>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>Mysql</span>
              <span>Java</span>
            </div>
          </div>
        </div>
       <div className="project-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAq50QEMoAZyIZy6cqdaPwHLHSELXp-tkkbg&s"
            alt="Scholarship Management System"
            className="project-image"
          />
          <div className="project-info">
            <h3>Ayurvedic Health Care Chatbot</h3>
            <div className="tech-stack">
              <span>Html</span>
              <span>Css</span>
              <span>JavaScript</span>
              <span>MongoDB</span>
                
            </div>
          </div>
        </div>
      </div>
    </div>
 </>
  )
}

export default Project