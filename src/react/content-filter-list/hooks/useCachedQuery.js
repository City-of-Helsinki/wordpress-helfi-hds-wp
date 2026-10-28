import { useRef } from 'react';

export default function useCachedQuery(get) {
  const cache = useRef(new Map());

  const query = (params) => {
    const key = (new URLSearchParams(params)).toString();

    if (!cache.current.has(key)) {
      const request = get(params)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }

          return response.json();
        })
        .catch(error => {
          cache.current.delete(key);
          throw error;
        });

      cache.current.set(key, request);
    }

    return cache.current.get(key);
  };

  return {query};
}
