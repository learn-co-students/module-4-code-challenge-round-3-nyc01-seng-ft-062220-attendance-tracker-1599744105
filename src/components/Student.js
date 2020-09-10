import React from "react";

const Student = ({student, course, checkHandler}) => (
  <tr style={{ textAlign: "center" }}>
    <td>{student.name}</td>
    <td>{student.class_year}</td>
    <td>{student.percentage}</td>
    <td>
      <input
        type="checkbox"
        checked={
          student.course === course ? true : false 
          }
        onClick={() => checkHandler(student)}
      />
    </td>
  </tr>
);

export default Student;
