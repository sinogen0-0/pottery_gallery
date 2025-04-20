import React, { useState } from 'react';
import './styles/App.css';
import PotteryGrid from './components/PotteryGrid';
import SculptureGrid from './components/SculptureGrid';
import TwoDGrid from './components/TwoDGrid';

function App() {
  const [showArtistInfo, setShowArtistInfo] = useState(false);
  const [currentView, setCurrentView] = useState('card-stack');

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
            <p>-----------------------</p>
            <div className="contact-info">
              <h3>Contact</h3>
              <p>Email: </p>
              <p>Instagram: @jennxangell</p>
            </div>
            <button className="close-button" onClick={() => setShowArtistInfo(false)}>×</button>
          </div>
        </div>
      )}
      
      {currentView === 'card-stack' && <CardStack onViewChange={setCurrentView} />}
      {currentView === 'pottery' && <PotteryGrid onBack={() => setCurrentView('card-stack')} />}
      {currentView === 'sculpture' && <SculptureGrid onBack={() => setCurrentView('card-stack')} />}
      {currentView === '2d' && <TwoDGrid onBack={() => setCurrentView('card-stack')} />}

      <footer>
      </footer>
    </div>
  );
}

function CardStack({ onViewChange }) {
  const [expanded, setExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    if(expanded) return;
    
    setIsTransitioning(true);
    setExpanded(!expanded);

    setTimeout(() => {
      setIsTransitioning(false);      
    }, 300);
  };

  const handleCardClick = (e) => {
    if(!expanded) return;
    if(isTransitioning) return;
    e.stopPropagation(); // Prevent the click event from bubbling up to the parent div

    switch(e.target.className) {
      case 'card card-1':
        onViewChange('sculpture');
        break;
      case 'card card-2':
        onViewChange('pottery');
        break;
      case 'card card-3':
        onViewChange('2d');
        break;
      default:
        break;
    }
  };

  return (
    <div className={`card-stack ${expanded ? 'expanded' : ''} ${isTransitioning ? 'transitioning' : ''}`} onClick={handleClick}>
      <div className="card card-1" onClick={handleCardClick}>{expanded ? 'Sculptures' : 'Works'} </div>
      <div className="card card-2" onClick={handleCardClick}>{expanded ? 'Pottery' : ''}</div>
      <div className="card card-3" onClick={handleCardClick}>{expanded ? '2D' : ''}</div>
    </div>
  );
}

export default App;