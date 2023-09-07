export const exerciseOptions = {
    method: 'GET',
    headers: {
    
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'b9ea8a7483msh3bb2fe3493bb227p11d50ajsn3809c2a06dcf'
      
    }
  };
  
  
export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();

    return data;
} 