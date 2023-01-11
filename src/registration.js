import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState({});

  const { name, email, password, password2 } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setErrors({}); // reset errors
    let error=0;

    // validate form fields
    if (name.length <= 2) {
      setErrors(errors => ({ ...errors, name: 'Name must be at least 2 characters' }));
      error++;
    }
    if (!email.includes('@')) {
      setErrors(errors => ({ ...errors, email: 'Email must be a valid address' }));
      error++;
    }
    if (password !== password2) {
      setErrors(errors => ({ ...errors, password: 'Passwords do not match' }));
      error++;
    }
    if (error === 0) {
       
        navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
      {errors.name?<p className="error">{errors.name}</p>:""}
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email? <p className="error">{errors.email}</p>:""}
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        type="password"
        name="password2"
        value={password2}
        onChange={handleChange}
        placeholder="Confirm Password"
      />
      {errors.password?<p className="error">{errors.password}</p>:""}
      <button type="submit" >Submit</button>
    </form>
  );
}
export default Form;
