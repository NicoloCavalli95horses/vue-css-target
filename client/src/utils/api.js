export async function apiGetData(url) {
  const response = await fetch(url);
  const json = response.json();
  return json || [];
}