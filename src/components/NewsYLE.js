import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';


function NewsYLE() {
   
    const [newsYLE, setNewsYLE] = useState([]);
   
    useEffect(() => {
        getNewsYLE();
      }, [])

    const getNewsYLE = () => {
        return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.yle.fi%2Fuutiset%2Fv1%2Frecent.rss%3FpublisherIds%3DYLE_UUTISET`)
        .then(res => res.json())
        .then(data => setNewsYLE(data.items))
        .catch(console.error);
      }
    return (
        <React.Fragment>
        {newsYLE.map((newsdata, key) => (
        <CardDeck>
            <Card style={{maxWidth: '50%',}}>
            
                <Card.Body>
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
export default NewsYLE;