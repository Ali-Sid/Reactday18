import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  CardActions,
  Grid
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
// import {v4 as uuidv4} from 'uuid'

export default function FetchNews() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=14b1ace4ef6640caaa6fd0b58b63ff47"
      )
      .then((response) => {
        // console.log(response)
        setNews(response.data.articles);
      });
  };

  const handleLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={fetchNews}>
          Fetch API
        </Button>
      </div>
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '5px', marginLeft: '20px', padding: "120px" }}>
      {news.map((value) => (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={value.urlToImage}
                    alt="news img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleLink(value.url)}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </>  
        ))}
        </Grid>
    </>
  );
}
