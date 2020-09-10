import React from "react";
import Student from "./Student";


class StudentsList extends React.Component {


  render() {
    return (
      <table className="ui celled striped padded table unstackable">
    <tbody>
      <tr>
        <th>
          <h3 className="ui center aligned header">Student Name</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Class Year</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Course Percentage</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Attending</h3>
        </th>
      </tr>

      {this.props.students.map(studentObj => <Student key={studentObj.id} student={studentObj} course={this.props.course} checkHandler={this.props.checkHandler} />)}
    </tbody>
  </table>
    )
  }
}

export default StudentsList;
