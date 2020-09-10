import React from "react";

class Student extends React.Component {

  state = {
    checked: this.props.student.attending 
  }

  clickHandler = () => {
    this.setState({
      checked: !this.state.checked
    })
    this.props.persistAttendance(this.props.student, !this.state.checked)
  }

  render() {
    return (
      (
        <tr style={{ textAlign: "center" }}>
          <td>{this.props.student.name}</td>
          <td>{this.props.student.class_year}</td>
          <td>{this.props.student.percentage}</td>
          <td>
            <input
              type="checkbox"
              checked={this.state.checked}
              onClick={this.clickHandler}
            />
          </td>
        </tr>
      )
    )
  }
} 

export default Student;
