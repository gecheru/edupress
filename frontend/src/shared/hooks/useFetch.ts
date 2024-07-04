import axios from 'axios';
import qs from 'qs';
import { useCallback, useEffect, useMemo, useState } from 'react';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `bearer ${import.meta.env.VITE_APP_TOKEN}`,
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => qs.stringify(params, { encodeValuesOnly: true })
})

const useFetch = <T>(url: string, params?: unknown, method: string = 'GET') => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const requestParams = useMemo(() => qs.stringify(params, { encodeValuesOnly: true }), [params])

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await instance.request({
          url,
          params: qs.parse(requestParams),
          method,
        });
        setData(response.data.data);
      } catch (err: unknown) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [method, requestParams, url]);
  
  return { data, isLoading, error };
};

export { useFetch };
