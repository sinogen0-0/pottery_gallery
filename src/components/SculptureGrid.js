import React, { useState } from 'react';
import BaseGrid from './BaseGrid';
import sculptureData from '../data/sculpture';
import selfPortraitWithGriefData from '../data/selfPortraitWithGrief';

const SculptureGrid = ({ onBack }) => {
    const [activeGrid, setActiveGrid] = useState('sculpture');

    const handleTileClick = (item) => {
        if (item.isTextTile && item.opensGrid === 'selfPortraitWithGrief') {
            setActiveGrid('selfPortraitWithGrief');
        }
    };

    const handleBack = () => {
        if (activeGrid === 'selfPortraitWithGrief') {
            setActiveGrid('sculpture');
        } else if (onBack) {
            onBack();
        }
    };

    return (
        <BaseGrid
            data={activeGrid === 'sculpture' ? sculptureData : selfPortraitWithGriefData}
            onBack={handleBack}
            onTileClick={handleTileClick}
            showTextTile={activeGrid === 'sculpture'}
        />
    );
};

export default SculptureGrid;