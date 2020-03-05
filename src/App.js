import React, {useEffect, useState} from 'react';
import NewsHS from './components/NewsHS';
import NewsIL from './components/NewsIL';
import './App.css';


function App() {

  const [newsHS, setNewsHS] = useState([]);
  const [newsIL, setNewsIL] = useState([]);

  useEffect(() => {
    getNewsHS();
    getNewsIL();
  }, [])

  const getNewsHS = () => {
   return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://www.hs.fi/rss/tuoreimmat.xml`)
    .then(res => res.json())
    .then(data => setNewsHS(data.items))
    .catch(console.error());
  }

  const getNewsIL = () => {
    return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.iltalehti.fi%2Frss%2Frss.xml`)
    .then(res => res.json())
    .then(data => setNewsIL(data.items))
    .catch(console.error);
  }
  return ( 
    <div className="App">
      {newsIL.map((newsdata, key) => (
        <NewsIL title={newsdata.title} content={newsdata.description} key={key} image={newsdata.enclosure.link} link={newsdata.link}/>
      ))}
    </div>
  );
}

export default App;
