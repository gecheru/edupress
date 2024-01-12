import { useEffect, useState } from 'react';

const useFetch = (url: string, params?: unknown, method: string = 'GET') => {
  const [data, setData] = useState<unknown[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, {
          method,
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_APP_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });
        const responseData = await response.json();
        if (responseData.error) {
          throw Error(responseData.error);
        }
        setData(responseData.data);
      } catch (err: unknown) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url, params, method]);

  return { data, isLoading, error };
};

export { useFetch };
