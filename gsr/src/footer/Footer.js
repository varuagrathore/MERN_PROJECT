import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="card text-center p-4">
          <p>&copy; {new Date().getFullYear()} GSR Quote. All rights reserved.</p>
          <p>Help to Build Website</p>
          <a href="mailto:quote1503@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i className="fas fa-envelope me-2"></i> quote1503@gmail.com
          </a>
          <button className="btn btn-secondary mt-2" onClick={scrollToTop}>
            Go to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
