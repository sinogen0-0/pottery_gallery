import React, { useState } from 'react';
import BaseGrid from './BaseGrid';
import twodData from '../data/twod';
import loveYaBothData from '../data/loveYaBoth';

const TwoDGrid = ({ onBack }) => {
    const [activeGrid, setActiveGrid] = useState('twod');

    const handleTileClick = (item) => {
        if (item.isTextTile && item.opensGrid === 'loveYaBoth') {
            setActiveGrid('loveYaBoth');
        }
    };

    const handleBack = () => {
        if (activeGrid === 'loveYaBoth') {
            setActiveGrid('twod');
        } else if (onBack) {
            onBack();
        }
    };

    return (
        <BaseGrid
            data={activeGrid === 'twod' ? twodData : loveYaBothData}
            onBack={handleBack}
            onTileClick={handleTileClick}
            showTextTile={activeGrid === 'twod'}
        />
    );
};

export default TwoDGrid;