import React, { useState, useEffect } from 'react';
import { useSearchApi } from '../context/SearchApiService';
import { Results } from '../utils/types';

function useSearchKeyword(
  keyword: string,
  setData: React.Dispatch<React.SetStateAction<Results>>,
) {
  const searchApi = useSearchApi();

  const callApi = async () => {
    if (keyword.trim() === '') return;
    const response = await searchApi.getResultsByKeyword(keyword);
    setData(response);
  };

  useEffect(() => {
    callApi();
  }, [keyword]);
}

export default useSearchKeyword;
