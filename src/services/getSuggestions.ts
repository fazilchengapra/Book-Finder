
export const getSuggestions = async (query : string) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=4`);
    const data = await response.json();
    console.log(data);
    
    return data.docs;
}