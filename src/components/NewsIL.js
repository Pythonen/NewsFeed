import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React, {useEffect, useState} from 'react';


function NewsIL() {
   
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
        <React.Fragment>
        {newsIL.map((newsdata, key) => (
        <Grid container spacing={2}>
        <Grid item xs={12}>
         <Card variant="outlined">
            <CardContent>
                <h3>
                    {newsdata.title}
                </h3>
                <h5>
                    {newsdata.description}
                 </h5>
                 <CardMedia
                 alt={key}
                 style={{height: 0, paddingTop: '56.25%'}} 
                 image={newsdata.enclosure.link} />
                <Typography variant="h6">
                 <Link href={newsdata.link}>
                     Linkki uutiseen
                 </Link>
                </Typography>
            </CardContent>
         </Card>
         </Grid>
        </Grid>
        ))}
        </React.Fragment>
    )
}
export default NewsIL;