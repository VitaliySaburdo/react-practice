const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "31530619-c8ff0ea55f4ca3c44478c1e7e";

export const fetchData = async () => {
    const url = `${BASE_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await fetch(url);
    return response.json();
}

