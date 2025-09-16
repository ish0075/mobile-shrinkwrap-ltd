import React from 'react';
import CityPage from '@/components/CityPage';
import { getCityData } from '@/data/cityData';

const Mississauga = () => {
  const cityData = getCityData('mississauga');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPage cityData={cityData} />;
};

export default Mississauga;