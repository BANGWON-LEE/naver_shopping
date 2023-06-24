import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import { getShoppingInfoApi } from '../../services/api';

const Main = () => {
  const { data, isLoading, isError } = useQuery('data', getShoppingInfoApi);

  console.log('data', data);

  if (isLoading) {
    return (
      <div className="w-fullb h-[58.09rem] bg-[#171717]">
        <div className="mx-auto">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return <div>메인페이징</div>;
};

export default Main;
