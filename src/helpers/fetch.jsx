export async function getFetch(endpoint) {
  try {
    // const resp = await fetch(`${baseUrl}/${endpoint}`);
    const resp = await fetch(endpoint);
    console.log('resp:', resp);
    if (resp.ok) {
      return resp.json();
    }
    throw new Error('404 Not Found');
  } catch (err) {
    throw err;
  }
}

export async function postFetch(endpoint, inputData) {
  try {
    const resp = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputData),
    });
    console.log('resp fetch:', resp);
    return resp.json();
  } catch (err) {
    console.log('error in postFetch:', err);
    throw err;
  }
}

export const baseUrl = process.env.REACT_APP_BASE_URL;
if (!baseUrl) throw new Error('baseUrl not found');