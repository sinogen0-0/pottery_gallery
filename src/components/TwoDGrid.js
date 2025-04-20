import React from 'react';
import BaseGrid from './BaseGrid';
import twodData from '../data/twod';

const TwoDGrid = ({ onBack }) => {
    return <BaseGrid data={twodData} onBack={onBack} />;
};

export default TwoDGrid;