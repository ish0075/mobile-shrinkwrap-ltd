import React from 'react';
import CityPage from '@/components/CityPage';
import { getCityData } from '@/data/cityData';

const Windsor = () => {
  const cityData = getCityData('windsor');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPage cityData={cityData} />;
};

export default Windsor;