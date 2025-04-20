import React from 'react';
import BaseGrid from './BaseGrid';
import potteryData from '../data/pottery';

const PotteryGrid = ({ onBack }) => {
    return <BaseGrid data={potteryData} onBack={onBack} />;
};

export default PotteryGrid;