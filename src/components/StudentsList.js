import React from "react";
import Student from "./Student";

class StudentsList extends React.Component {

  getStudents = () => {
    return this.props.studentsArray.map(student => {
      return <Student persistAttendance={this.props.persistAttendance} key={student.id} student={student} />
    })
  }

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
  
        {this.getStudents()}
      </tbody>
    </table>
  )
  }
}
export default StudentsList;
