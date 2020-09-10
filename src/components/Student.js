import React from "react";

class Student extends React.Component {
  state = {
    name: "",
    class_year: "", 
    percentage: "", 
    course: "", 


  }

  render() {
    return (
      <tr style={{ textAlign: "center" }}>
    <td>{this.props.student.name}</td>
    <td>{this.props.student.class_year}</td>
    <td>{this.props.student.percentage}</td>
    <td>
      <input
        type="checkbox"
        checked={
          this.props.student.course === this.props.course ? true : false 
          }
        onClick={() => this.props.checkHandler(this.props.student)}
      />
    </td>
  </tr>
  );
        }
      }

  

export default Student;
