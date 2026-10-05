export default function useRestApi({route, nonce}) {
  const get = async (data) => {
    let requestUrl = route;

    const params = {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        'X-WP-Nonce': nonce,
      },
    };

    if (data) {
      requestUrl = requestUrl.concat('?', (new URLSearchParams(data)).toString());
    }

    const response = await fetch(requestUrl, params);

    return response;
  };

  return {get};
}
