import React from 'react';
import CityPage from '@/components/CityPage';
import { getCityData } from '@/data/cityData';

const NiagaraOnTheLake = () => {
  const cityData = getCityData('niagara-on-the-lake');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPage cityData={cityData} />;
};

export default NiagaraOnTheLake;