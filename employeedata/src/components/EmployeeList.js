import React from "react";

// Sample employee data
const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Software Engineer",
    department: "Development",
  },
  {
    id: 2,
    name: "Bob Smith",
    position: "Product Manager",
    department: "Product",
  },
  {
    id: 3,
    name: "Charlie Brown",
    position: "UX Designer",
    department: "Design",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Data Analyst",
    department: "Analytics",
  },
  {
    id: 5,
    name: "Eve Davis",
    position: "Marketing Specialist",
    department: "Marketing",
  },
];

const EmployeeList = () => {
  // Inline styles
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    margin: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  };

  const titleStyle = {
    color: "#333",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const itemStyle = {
    padding: "10px",
    borderBottom: "1px solid #eee",
  };

  const lastItemStyle = {
    ...itemStyle,
    borderBottom: "none",
  };

  const strongStyle = {
    color: "#007BFF", // Bootstrap primary color
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Employee List</h1>
      <ul style={listStyle}>
        {employees.map((employee, index) => (
          <li
            key={employee.id}
            style={index === employees.length - 1 ? lastItemStyle : itemStyle}
          >
            <strong style={strongStyle}>{employee.name}</strong> -{" "}
            {employee.position} ({employee.department})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
