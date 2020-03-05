import React from 'react';

const NewsHS = ({title,content, image, link}) => {
    return(
        <React.Fragment>
            <h1>HELSINGIN SANOMAT</h1>
            <h2>{title}</h2>
            <p>{content}</p>
            <img src={image} alt=""/>
            <br/>
            <a href={link}>Linkki uutiseen</a>
            <hr></hr>
        </React.Fragment>
    )
}
export default NewsHS;