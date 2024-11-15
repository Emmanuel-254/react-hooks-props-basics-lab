// src/components/About.js
import React from 'react';
import Links from './Links';  // Import the Links component

function About({ bio, github, linkedin, image }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Display bio only if passed */}
      {bio && bio.trim() !== '' && <p>{bio}</p>}

      {/* Display image if image path is provided */}
      {image && (
        <img
          image src='data:image/jpeg;base64,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'
          alt="Profile"
          style={{ width: '150px', height: 'auto', borderRadius: '50%', marginBottom: '20px' }}
        />
      )}

      {/* Render the Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
