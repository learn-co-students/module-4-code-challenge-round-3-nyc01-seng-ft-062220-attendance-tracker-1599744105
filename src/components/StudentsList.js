import React from "react";
import Student from "./Student";

const StudentsList = (props) => {

  let renderStudents = props.students.filter((students) => students.course === props.course)
  
  let rendering = renderStudents.map((studentObj) => <Student clickHandler={props.clickHandler} student={props.course === studentObj.course ? studentObj : null} key={studentObj.id} name={props.course === studentObj.course ? studentObj.name: null} year ={ props.course === studentObj.course ? studentObj.class_year: null } percentage={props.course === studentObj.course ? studentObj.percentage : null } attending={props.course === studentObj.course ? studentObj.attending : null} />)
  
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
      {rendering}
      {/* {props.students.map((studentObj) => <Student clickHandler={props.clickHandler} student={props.course === studentObj.course ? studentObj : null} key={studentObj.id} name={props.course === studentObj.course ? studentObj.name: null} year ={ props.course === studentObj.course ? studentObj.class_year: null } percentage={props.course === studentObj.course ? studentObj.percentage : null } attending={props.course === studentObj.course ? studentObj.attending : null} />)} */}
    </tbody>
  </table>
  )
};
  

export default StudentsList;
