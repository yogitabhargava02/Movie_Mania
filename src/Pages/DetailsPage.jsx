import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form, Modal, Card, Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner';
import '../assets/Styles/DetailPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Store name and email in local storage
    localStorage.setItem('bookingName', bookingForm.name);
    localStorage.setItem('bookingEmail', bookingForm.email);
    localStorage.setItem('bookingPhone', bookingForm.phone);

    // Redirect to confirmation page
    navigate(`/confirmation/${id}`);
  };

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  useEffect(() => {
    // Fetch show details using the API
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="details-page">
      <Banner />
      {show ? (
        <div>
        <Row>
      <Col md={4}>
        <Card className= 'cardImage'>
          <Card.Img className= 'image' variant="top" src={show.image?.medium || 'placeholder.jpg'} />
        </Card>
      </Col>
      <Col md={8}>
      <Card.Title className='title'>{show.name}</Card.Title>
<h3> Description</h3>
<p>{show.summary.replace(/<\/?[^>]+(>|$)/g, '')}</p>


<p className="show-info"><span className="field">Show Type:</span> <span className="value">{show.type}</span></p>
<p className="show-info"><span className="field">Language:</span> <span className="value">{show.language}</span></p>
<p className="show-info"><span className="field">Premiered on:</span> <span className="value">{show.premiered}</span></p>
<p className="show-info"><span className="field">Rating:</span> <span className="value">{show.rating.average}</span></p>
<p className="show-info"><span className="field">Status:</span> <span className="value">{show.status}</span></p>
{/* <p>{show.schedule.tim}</p> */}
<p className="show-info"><span className="field">Type:</span> <span className="value">{show.type}</span></p>

        <Button variant="primary" onClick={handleBookNow}>
              Book Now
            </Button>
      </Col>
    </Row>
    
          <Modal show={showBookingForm} onHide={handleCloseBookingForm} className="custom-modal">
            <Modal.Header closeButton>
              <Modal.Title>Book Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleBookingSubmit}>
                <Form.Group controlId="movie">
                <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" value={show.name} disabled />
                 
                 
          </Form.Group>
         
          <Form.Group controlId="name">
         
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DetailsPage;
