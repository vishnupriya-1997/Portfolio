import React from 'react';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className="technologies">
      <h1>SKILLS</h1>
      <h3>The skills, tools, and technologies I use:</h3>

      <div className="tech-row">
        <div className="tech-item">
          <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" />
          <p>Java</p>
        </div>

        <div className="tech-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
          <p>HTML</p>
        </div>

        <div className="tech-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" />
          <p>CSS</p>
        </div>

        <div className="tech-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
      </div>

      <div className="tech-row">
        <div className="tech-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" />
          <p>Figma</p>
        </div>

        <div className="tech-item">
          <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL" />
          <p>MySQL</p>
        </div>

        <div className="tech-item">
          <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB" />
          <p>MongoDB</p>
        </div>

        <div className="tech-item">
          <img src="data:image/jpeg;base64,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" alt="React" />
          <p>React</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
