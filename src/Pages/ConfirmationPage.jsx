import React from 'react';
import Banner from '../components/Banner';
import '../assets/Styles/Confirmation.css';

const ConfirmationPage = () => {
  const bookingName = localStorage.getItem('bookingName');
  const bookingEmail = localStorage.getItem('bookingEmail');
  const bookingPhone = localStorage.getItem('bookingPhone');

  return (
    <div className="confirmation-page">
      <Banner />
      <div className="confirmation-content">
        <h1 className="confirmation-heading">Booking Confirmation</h1>
        <div className="confirmation-details">
          <h1 className="congratulations">Congratulations, {bookingName}!!</h1>
          <h2 className="seat-booked">Your seat is booked.</h2>
          <div className="booking-info">
            
            <p>
              <span className="info-label">Email:</span> {bookingEmail}
            </p>
            <p>
              <span className="info-label">Phone:</span> {bookingPhone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
