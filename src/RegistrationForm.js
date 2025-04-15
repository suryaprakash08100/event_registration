// RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    ticketType: 'general',
    dietary: '',
    document: null
  });

  const [dietaryLimit, setDietaryLimit] = useState(200);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'document') {
      setFormData(prev => ({
        ...prev,
        document: files[0]
      }));
    } else if (name === 'dietary') {
      if (value.length <= dietaryLimit) {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    // Reset
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      ticketType: 'general',
      dietary: '',
      document: null
    });
  };

  return (
    <div className="form-container">
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ticketType">Ticket Type:</label>
          <select
            id="ticketType"
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
          >
            <option value="general">General Admission</option>
            <option value="vip">VIP</option>
            <option value="student">Student</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dietary">Dietary Requirements:</label>
          <textarea
            id="dietary"
            name="dietary"
            value={formData.dietary}
            onChange={handleChange}
            placeholder="Enter any dietary restrictions..."
          />
          <small>{formData.dietary.length}/{dietaryLimit} characters</small>
        </div>

        <div className='form-group'>
          <label htmlFor='document'>Upload Document:</label>
          <input
            type='file'
            id='document'
            name='document'
            accept='.pdf, .doc, .docx'
            onChange={handleChange}
            required
          />
          {formData.document && (
            <small>Selected File: {formData.document.name}</small>
          )}
        </div>

        <button type="submit">Register</button>

        {submitted && <p className="success-msg">✅ Successfully registered!</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
