import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';


function NewsKL() {
   
    const [newsKL, setNewsKL] = useState([]);
   
    useEffect(() => {
        getNewsKL();
      }, [])

    const getNewsKL = () => {
        return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.kauppalehti.fi%2Frss%2Fklnyt`)
        .then(res => res.json())
        .then(data => setNewsKL(data.items))
        .catch(console.error);
      }
    return (
        <React.Fragment>
        {newsKL.map((newsdata, key) => (
        <CardDeck>
            <Card style={{maxWidth: '50%',}}>
            
                <Card.Body key={key}>
                    <Card.Title>{newsdata.title}</Card.Title>
                        <Card.Text>
                        {newsdata.description}
                        </Card.Text>
                <Card.Link href={newsdata.link}>Linkki uutiseen</Card.Link>
                </Card.Body>
                <Card.Img variant="bottom" src={newsdata.enclosure.link} />
            </Card>
        </CardDeck>
        ))}
        </React.Fragment>
    )
}
export default NewsKL;