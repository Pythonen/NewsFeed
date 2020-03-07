import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';


function NewsIS() {
   
    const [newsIS, setNewsIS] = useState([]);
   
    useEffect(() => {
        getNewsIS();
      }, [])

    const getNewsIS = () => {
        return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.is.fi%2Frss%2Ftuoreimmat.xml`)
        .then(res => res.json())
        .then(data => setNewsIS(data.items))
        .catch(console.error);
      }
    return (
        <React.Fragment>
        {newsIS.map((newsdata, key) => (
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
export default NewsIS;