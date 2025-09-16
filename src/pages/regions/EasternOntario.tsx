import React from 'react';
import RegionPage from '@/components/RegionPage';
import { getRegionData } from '@/data/regionData';

const EasternOntario = () => {
  const regionData = getRegionData('eastern-ontario');
  
  if (!regionData) {
    return <div>Region data not found</div>;
  }

  return <RegionPage regionData={regionData} />;
};

export default EasternOntario;