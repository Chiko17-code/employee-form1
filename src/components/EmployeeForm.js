import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    title: '',
    department: ''
  });

  // Handles input changes
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee); // Pass employee data to parent component
    setEmployee({ name: '', email: '', title: '', department: '' }); // Reset form
  };

  return (
    <div className="employee-form-container">
      <h2>New Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={employee.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={employee.email} onChange={handleChange} required />

        <label>Job Title:</label>
        <input type="text" name="title" value={employee.title} onChange={handleChange} required />

        <label>Department:</label>
        <input type="text" name="department" value={employee.department} onChange={handleChange} required />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;




