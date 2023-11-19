import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import './CssAll/MyBookingStyle.css'
import Footer from './Footer';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5275/api/bookings`);
        const filteredBookings = response.data.filter((booking) => {
          return booking.userId === username;
        });
        setBookings(filteredBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [username]);

  const formatDateString = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Layout>
        <div>
      <h1 className='headerBooking'>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found for {username}.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {bookings.map((booking) => (
            <div key={booking.bookingId} style={{ width: '30%', margin: '10px', padding: '10px', border: '8px solid #ccc', borderRadius: '10px', textAlign: 'left' }} >
              <div>
                <strong>UserID:</strong> {booking.userId}
              </div>
              <div>
                <strong>Name:</strong> {booking.user.fullName}
              </div>
              <div>
                <strong>Flight ID:</strong> {booking.flightId}
              </div>
              <div>
                <div>
                  <strong>Source:</strong> {booking.flight.source}
                </div>
                <div>
                  <strong>Departure Date:</strong> {formatDateString(booking.flight.departureDate)}
                </div>
                <div>
                  <strong>Departure Time:</strong> {booking.flight.departureTime}
                </div>
                <div>
                  <strong>Destination:</strong> {booking.flight.destination}
                </div>
                <div>
                  <strong>Arrival Date:</strong> {formatDateString(booking.flight.arrivalDate)}
                </div>
                <div>
                  <strong>Arrival Time:</strong> {booking.flight.arrivalTime}
                </div>
                <strong>Number of Passengers:</strong> {booking.noOfPassengers}
              </div>
              <div>
                <strong>Status:</strong> {booking.status}
              </div>
              <div>
                <strong>Price:</strong> {booking.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </Layout>
  );
};

export default MyBookings;
