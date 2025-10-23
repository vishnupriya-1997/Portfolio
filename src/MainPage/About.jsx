import React, { useState } from 'react';
import './About.css';
import certificate from '../assets/certificate.jpg';
import certificate1 from '../assets/certificate1.jpg';

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="about">
      {/* Who I Am Section */}
      <div className="who">
        <h2>Who I Am</h2>
        <h3>
          I’m a passionate and creative Full Stack Developer who loves transforming ideas into real-world applications.
          My focus lies in building dynamic, efficient, and user-friendly web solutions that not only work flawlessly
          but also leave a lasting impact. I take pride in writing clean, maintainable code and designing experiences
          that blend performance with aesthetics.
        </h3>
      </div>

      {/* Certificate Buttons */}
      <div className="certificates">
        <h2>🏆 My Certificates</h2>
        <div className="cert-buttons">
          <button className="view-btn" onClick={() => openModal(certificate)}>View Certificate 1</button>
          <button className="view-btn" onClick={() => openModal(certificate1)}>View Certificate 2</button>
        </div>
      </div>

      {/* Quick Facts Section */}
      <div className="quick">
        <h2>🌟 Quick Facts About Me</h2>
        <h3>
          💻 <span className="highlight">Core Skills:</span> Java, Spring Boot, HTML, CSS, JavaScript <br />
          ⚙️ <span className="highlight">Tools & Frameworks:</span> React, MySQL, REST APIs, Git/GitHub <br />
          🧠 <span className="highlight">Strengths:</span> Problem-solving, clean architecture, creative thinking <br />
          🌱 <span className="highlight">Currently Exploring:</span> Cloud Deployment & AI-based automation <br />
          🎨 <span className="highlight">Design Focus:</span> Responsive layouts & interactive user experience
        </h3>
      </div>

      {/* Modal Popup */}
      {selectedCert && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedCert} alt="Certificate" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
