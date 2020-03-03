import React, {useEffect, useState} from 'react';
import News from './News';
import './App.css';


function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsHS();
  }, [])

  const getNewsHS = () => {
   return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://www.hs.fi/rss/tuoreimmat.xml`)
    .then(res => res.json())
    .then(data => setNews(data.items))
    .catch(console.error());
    
  }
  return ( 
    <div className="App">
      {news.map((newsdata, key) => (
        <News title={newsdata.title} content={newsdata.description} key={key} image={newsdata.enclosure.link} link={newsdata.link}/>
      ))}
    </div>
  );
}

export default App;
