import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#343a40'
  },
  heading: {
    fontSize: '6rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  },
  link: {
    fontSize: '1.25rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default NotFound;
