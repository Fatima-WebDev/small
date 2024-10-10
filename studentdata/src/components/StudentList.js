import React from "react";

// Sample student data
const students = [
  { id: 1, name: "Alice Johnson", age: 20, major: "Computer Science" },
  { id: 2, name: "Bob Smith", age: 22, major: "Mathematics" },
  { id: 3, name: "Charlie Brown", age: 19, major: "Physics" },
  { id: 4, name: "Daisy Miller", age: 21, major: "Biology" },
];

const StudentList = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>Name:</strong> {student.name} <br />
            <strong>Age:</strong> {student.age} <br />
            <strong>Major:</strong> {student.major}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
