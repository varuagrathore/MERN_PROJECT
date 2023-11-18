import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'YOUR_SERVICE_ID'; 
    const templateId = 'YOUR_TEMPLATE_ID'; 
    const userId = 'YOUR_USER_ID'; 

    const formData = new FormData(e.target);
    const emailData = Object.fromEntries(formData);

    emailjs.send(serviceId, templateId, emailData, userId)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h4>Get in Touch</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Email</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>About Our Company</h4>
          <p>
            GSR Quote is a web development company committed to building user-friendly and engaging websites. 
            With a team of experienced developers and designers, we focus on creating websites that not only 
            look visually appealing but also provide seamless user experiences.
          </p>
          <p>
            Our services include front-end and back-end development, responsive design, e-commerce solutions, 
            content management systems, and more. We work closely with our clients to understand their unique 
            requirements and deliver tailored solutions to meet their business goals.
          </p>
          <p>
            Whether you need a simple static website or a complex web application, we have the expertise to 
            turn your ideas into reality. Contact us today to discuss your project requirements and let us 
            help you build an outstanding online presence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
