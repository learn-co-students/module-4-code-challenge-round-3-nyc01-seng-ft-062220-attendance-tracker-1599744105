import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {

  state = {
    studentsArray: [],
    coursesArray: []
  }

  persistAttendance = (stud, someValue) => {

    let obj = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        attending: someValue
      })
    }

    fetch(`http://localhost:6001/students/${stud.id}`, obj)
    .then(resp=>resp.json())
    .then(updStud => {
      console.log(updStud)
    })
  }

  componentDidMount() {
    this.getStudents()
    this.getCourses()
  }

  updateStudentsArray = (course) => {
    this.setState({
      studentsArray: this.filterArray(course)
    })
  }

  filterArray = (course) => {
    return this.state.studentsArray.filter(student => {
      return student.course === course
    })
  }

  getCourses = () => {
    fetch(`http://localhost:6001/courses`)
    .then(resp => resp.json())
    .then(courses => {
      this.setState({
        coursesArray: courses  
      })
    })
  }

  getStudents = () => {
    fetch(`http://localhost:6001/students`)
    .then(resp => resp.json())
    .then(students => {
      this.setState({
        studentsArray: students 
      })
    })
  }

  render() {
    return (
      <div className="ui grid container">
        <CourseDetails />
        <CourseSelector updateStudentsArray={this.updateStudentsArray} courses={this.state.coursesArray}/>
        <StudentsList persistAttendance={this.persistAttendance} studentsArray={this.state.studentsArray}/>
      </div>
    );
  }
}

export default CourseContainer;
