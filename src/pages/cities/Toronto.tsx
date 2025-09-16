import React from 'react';
import CityPage from '@/components/CityPage';
import { getCityData } from '@/data/cityData';

const Toronto = () => {
  const cityData = getCityData('toronto');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPage cityData={cityData} />;
};

export default Toronto;