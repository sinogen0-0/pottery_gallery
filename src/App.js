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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setExpanded(!expanded);

    setTimeout(() => {
      setIsTransitioning(false);      
    }, 300);
  };

  return (
    <div className={`card-stack ${expanded ? 'expanded' : ''} ${isTransitioning ? 'transitioning' : ''}`} onClick={handleClick}>
      <div className="card card-1">{expanded ? 'Sculptures' : 'Works'}</div>
      <div className="card card-2">{expanded ? 'Pottery' : ''}</div>
      <div className="card card-3">{expanded ? '2D' : ''}</div>
    </div>
  );
}

export default App;