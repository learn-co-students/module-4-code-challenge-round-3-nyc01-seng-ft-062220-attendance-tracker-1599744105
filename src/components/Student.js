import React from "react";

const Student = (props) => {


  let checkBoxHandler = () => {
    props.checkBoxHandler(props.student)
  } 
return (


  <tr style={{ textAlign: "center" }}>
    <td>{props.student.name}</td>
    <td>{props.student.class_year}</td>
    <td>{props.student.percentage}</td>
    <td>
      <input
        type="checkbox"
        checked={props.student.attending}
        onClick={() => checkBoxHandler()}
      />
    </td>
  </tr>
)};

export default Student;
