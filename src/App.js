import React, {useEffect, useState} from 'react';
import NewsHS from './components/NewsHS';
import NewsIL from './components/NewsIL';
import './App.css';
import Header from './components/Header';


function App() {

  
  const [newsIL, setNewsIL] = useState([]);

  useEffect(() => {
    getNewsIL();
  }, [])

  

  const getNewsIL = () => {
    return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.iltalehti.fi%2Frss%2Frss.xml`)
    .then(res => res.json())
    .then(data => setNewsIL(data.items))
    .catch(console.error);
  }
  return ( 
    <div className="App">
      <Header/>
      <React.Fragment>
      {newsIL.map((newsdata, key) => (
        <NewsIL title={newsdata.title} content={newsdata.description} key={key} image={newsdata.enclosure.link} link={newsdata.link}/>
      ))}
      </React.Fragment>
    </div>
  );
}

export default App;
