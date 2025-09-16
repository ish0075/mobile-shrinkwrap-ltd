import React from 'react';
import RegionPage from '@/components/RegionPage';
import { getRegionData } from '@/data/regionData';

const Niagara = () => {
  const regionData = getRegionData('niagara');
  
  if (!regionData) {
    return <div>Region data not found</div>;
  }

  return <RegionPage regionData={regionData} />;
};

export default Niagara;