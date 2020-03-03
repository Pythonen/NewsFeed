import React from 'react';

const News = ({title,content, image, link}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <img src={image} alt=""/>
            <br/>
            <a href={link}>Linkki uutiseen</a>
            <hr></hr>
        </div>
    )
}
export default News;