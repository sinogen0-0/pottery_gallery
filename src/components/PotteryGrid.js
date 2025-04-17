import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import potteryData from '../data/pottery';
import './PotteryGrid.css';

const PotteryGrid = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const handleImageClick = (item) => {
        if (selectedImage && selectedImage.id === item.id) {
            setSelectedImage(null);
        } else {
            setSelectedImage(item);
        }
    };

    return (
        <div className="pottery-grid">
            {potteryData.map(item => (
                <div 
                    key={item.id} 
                    className={`pottery-item ${selectedImage?.id === item.id ? 'enlarged' : ''}`}
                    onClick={() => handleImageClick(item)}
                >
                    <LazyLoad height={200} offset={100} once>
                        <img src={item.imageUrl} alt={item.title} />
                    </LazyLoad>
                </div>
            ))}
            {selectedImage && (
                <div className="overlay" onClick={() => setSelectedImage(null)}>
                    <div className="enlarged-container">
                        <img src={selectedImage.imageUrl} alt={selectedImage.title} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PotteryGrid;