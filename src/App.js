import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [showArtistInfo, setShowArtistInfo] = useState(false);

  return (
    <div className="App">
      <h1 className="main-title">JENNXANGELL</h1>
      <div className="artist-button-container">
        <button className="artist-info-button" onClick={() => setShowArtistInfo(!showArtistInfo)}>
          Artist Info
        </button>
      </div>
      
      {showArtistInfo && (
        <div className="artist-info-overlay" onClick={() => setShowArtistInfo(false)}>
          <div className="artist-info-content" onClick={e => e.stopPropagation()}>
            <h2>About the Artist</h2>
            <p>Jenn Angell is an amazing artist.</p>
            <div className="contact-info">
              <h3>Contact</h3>
              <p>Email: she has an email somewhere</p>
              <p>Instagram: @jennxangell</p>
            </div>
            <button className="close-button" onClick={() => setShowArtistInfo(false)}>×</button>
          </div>
        </div>
      )}
      
      <CardStack />

      <footer className="contact-footer">
        <p>For inquiries: </p>
        <p>Follow on Instagram: @jennxangell</p>
      </footer>
    </div>
  );
}

function CardStack() {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card-stack ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
      <div className="card card-1">Card 1</div>
      <div className="card card-2">Card 2</div>
      <div className="card card-3">Card 3</div>
    </div>
  );
}

export default App;