import axios from 'axios';
import { useState, useEffect } from 'react';

const randomUrl= `https://api.giphy.com/v1/gifs/random?api_key=TfcamWlgYRWxsqs8yE5LfRFirA5q7LUu`;

const useGif = (tag) => {
  
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
  
  async function fetchData() {
    setLoading(true);
    const {data} = await axios.get(tag ? `${randomUrl}&tag=${tag}`: `${randomUrl}`); 
    setGif(data.data.images.downsized_large.url);
    setLoading(false);
  }
  
  useEffect( () => {
    fetchData();
  }, [])
  
  return {gif, loading, fetchData};

}

export default useGif