import React from 'react';
import BaseGrid from './BaseGrid';
import sculptureData from '../data/sculpture';

const SculptureGrid = ({ onBack }) => {
    return <BaseGrid data={sculptureData} onBack={onBack} />;
};

export default SculptureGrid;