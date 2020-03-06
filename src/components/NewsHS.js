import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';

const NewsHS = ({title,content, image, link}) => {
    return(
        <CardDeck>
            <Card style={{maxWidth: '50%',}}>
            
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {content}
                        </Card.Text>
                <Card.Link href={link}>Linkki uutiseen</Card.Link>
                </Card.Body>
                <Card.Img variant="bottom" src={image} />
            </Card>
        </CardDeck>
    )
}
export default NewsHS;