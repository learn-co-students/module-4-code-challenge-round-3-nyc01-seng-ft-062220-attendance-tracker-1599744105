import React from "react";
import Student from "./Student";

const StudentsList = (props) => {



  let student = props.students.map(studentObj => <Student key={studentObj.id} student={studentObj} onClick={props.toggleStudent}/>)


  return(

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

      {student}
    </tbody>
  </table>

  )





}




export default StudentsList;
