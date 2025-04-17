import React, { useState } from 'react';
import PotteryGrid from './components/PotteryGrid';
import './styles/App.css';

function App() {
  const [showArtistInfo, setShowArtistInfo] = useState(false);

  return (
    <div className="App">
      <h1 className="main-title">JENN ANGELL</h1>
      <div className="artist-button-container">
        <button className="artist-info-button" onClick={() => setShowArtistInfo(!showArtistInfo)}>
          Artist Info
        </button>
      </div>
      
      {showArtistInfo && (
        <div className="artist-info-overlay" onClick={() => setShowArtistInfo(false)}>
          <div className="artist-info-content" onClick={e => e.stopPropagation()}>
            <h2>About the Artist</h2>
            <p>Jenn Angell is a contemporary ceramic artist based in the Pacific Northwest, 
               specializing in functional pottery with a modern twist.</p>
            <div className="contact-info">
              <h3>Contact</h3>
              <p>Email: jenn.angell@example.com</p>
              <p>Instagram: @jennangell.ceramics</p>
              <p>Studio visits by appointment only</p>
            </div>
            <button className="close-button" onClick={() => setShowArtistInfo(false)}>×</button>
          </div>
        </div>
      )}
      
      <PotteryGrid />
      
      <footer className="contact-footer">
        <p>For inquiries: jenn.angell@example.com</p>
        <p>Follow on Instagram: @jennangell.ceramics</p>
      </footer>
    </div>
  );
}

export default App;