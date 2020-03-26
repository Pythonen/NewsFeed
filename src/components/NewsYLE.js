import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
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
export default NewsYLE;