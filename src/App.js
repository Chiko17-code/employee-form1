import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';

function App() {
  // Load existing employee data from Local Storage (if available)
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  // Function to add an employee and update Local Storage
  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees)); // Save to Local Storage
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            <strong>{emp.name}</strong> - {emp.email} - {emp.title} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


