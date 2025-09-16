import React from 'react';
import RegionPage from '@/components/RegionPage';
import { getRegionData } from '@/data/regionData';

const GTA = () => {
  const regionData = getRegionData('gta');
  
  if (!regionData) {
    return <div>Region data not found</div>;
  }

  return <RegionPage regionData={regionData} />;
};

export default GTA;