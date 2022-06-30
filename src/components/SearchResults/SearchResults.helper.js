import { URLS, API_BASE_URL } from '../../utils/constants';

export function fetchSearch(searchQuery, setResult) {
  const getData = async () => {
    const url = `${API_BASE_URL}${URLS.search.replace('{searchQuery}', searchQuery)}`;
    console.log(url);
    const data = await fetch(url);
    const response = await data.json();
    setResult(response);
  };

  try {
    getData();
  } catch (error) {
    console.error(error);
  }
}