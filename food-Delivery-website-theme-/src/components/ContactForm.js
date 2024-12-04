import React, { useState } from 'react';
import '../App.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted:', formData);
    

    alert(`Thank you ${formData.name}! Your query has been submitted.`);

    setFormData({
      name: '',
      contact: '',
      query: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Us</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="query">Query:</label>
        <textarea
          id="query"
          name="query"
          value={formData.query}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-btn">Submit</button>
      <div className='emp'>
        
        </div>
    </form>


  );
}

export default ContactForm;
