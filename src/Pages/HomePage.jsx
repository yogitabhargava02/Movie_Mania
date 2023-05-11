


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../assets/Styles/Home.css';

const HomePage = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data.map((item) => item.show));
      } catch (error) {
        console.error(error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <Banner />
      <h1 className='mainHeading'>TV Shows</h1>
      
      <div className="d-flex flex-wrap justify-content-around">
        {shows.map((show) => (
          <Card key={show.id} className="my-3 mx-2" style={{ width: '18rem', backgroundColor: '#0C134F' }}>
            <Container >
              <figure className='position-relative'>
              <div className='img-container'>
              <Card.Img variant="top" className='img-fluid' src={show.image?.medium} />
              </div>
               
                <figcaption className="figure-caption">
                  {show.genres[0]}
                </figcaption>
              </figure>
            </Container>
            <Card.Body>
              <Card.Title className='text'>{show.name}</Card.Title>
              <Link to={`/details/${show.id}`}>
                <Button className='view'>View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
