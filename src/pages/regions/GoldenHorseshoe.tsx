import React from 'react';
import RegionPage from '@/components/RegionPage';
import { getRegionData } from '@/data/regionData';

const GoldenHorseshoe = () => {
  const regionData = getRegionData('golden-horseshoe');
  
  if (!regionData) {
    return <div>Region data not found</div>;
  }

  return <RegionPage regionData={regionData} />;
};

export default GoldenHorseshoe;