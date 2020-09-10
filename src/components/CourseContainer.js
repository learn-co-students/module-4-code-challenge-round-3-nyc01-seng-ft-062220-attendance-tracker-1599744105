import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
  state = {
    course: [],
    student: [],
    selectedCourse: ''
  }

  statusClick = (obj) => {
    let newArray = [...this.state.student]
    let status = !obj.attending 
    obj.attending = status
    this.setState({students: newArray})
    
     fetch(`http://localhost:6001/students/${obj.id}`, {

       method: 'PATCH',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
        },
        body: JSON.stringify({attending: status} )
      })
      }
  

  selectedCourse = (e) => {
    this.setState({
       selectedCourse: e.target.value} )
  }

  componentDidMount() {
    this.fetchCourses()
    this.fetchStudents()
  }

  fetchCourses = () => {
    fetch('http://localhost:6001/courses')
    .then(response => response.json())
    .then(course => this.setState({ course: course}))
  }

  fetchStudents = () => {
    fetch('http://localhost:6001/students')
    .then(response => response.json())
    .then(student => this.setState({ student: student}))
  }
  render() {
    return (
      <div className="ui grid container">
        <CourseDetails course={this.state.course}/>
        <CourseSelector selectedCourse={this.selectedCourse} courses={this.state.course}/>
        <StudentsList clickHandler={this.statusClick} course={this.state.selectedCourse} students={this.state.student}/>
      </div>
    );
  }
}

export default CourseContainer;
