// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

// User data, including GitHub and LinkedIn links
const user = {
  name: 'John Doe',
  city: 'New York',
  bio: 'I am a passionate web developer with a love for creating interactive and responsive websites.',
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
  image: '/assets/profile.jpg' // Assuming the image is stored in the public/assets folder
};

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About
        bio={user.bio}
        github={user.github}
        linkedin={user.linkedin}
        image={user.image}  // Passing image path to About component
      />
    </div>
  );
}

export default App;
