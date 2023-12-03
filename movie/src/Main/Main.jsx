import React, { useState, useEffect } from 'react';
import './Main.css';

function Main() {
 const [result, setResult] = useState('');

 useEffect(() => {
    const fetchData = async () => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/top32';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7d9f41e67fmsh6570ff77626ad04p17f8edjsn552318057ec0',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
 }}, []);

 return (
    <div className='main'>
      {/* Display result here */}
    </div>
 );
}

export default Main;