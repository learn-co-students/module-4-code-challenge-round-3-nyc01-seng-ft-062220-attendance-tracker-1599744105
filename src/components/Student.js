import React from "react";

const Student = (props) => (
  <tr style={{ textAlign: "center" }}>
    <td>{props.name}</td>
    <td>{props.year}</td>
    <td>{props.percentage}</td>
    <td>
      <input
        type="checkbox"
        checked={
          props.attending 
  }
        onClick={() => props.clickHandler(props.student)}
      />
    </td>
  </tr>
);

export default Student;
