import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {

  state = {
    courses: [],
    students: [],
    selectedCourse: ""
  }

  componentDidMount(){
    fetch('http://localhost:6001/courses')
    .then(response => response.json())
    .then(courses => this.setState({courses: courses}))
    fetch('http://localhost:6001/students')
    .then(response => response.json())
    .then(students => this.setState({students: students}))
  }

  courseSelectorHandler = (id) => {
    let selectedCourse = this.state.courses.find((course) => course.id === parseInt(id))
    this.setState({selectedCourse: selectedCourse})
  }
  render() {
    return (
      <div className="ui grid container">
        <CourseDetails course={this.state.selectedCourse} />
        <CourseSelector courses={this.state.courses} courseSelectorHandler={this.courseSelectorHandler} />
        <StudentsList students={this.state.students} selectedCourse={this.state.selectedCourse} />
      </div>
    );
  }
}

export default CourseContainer;
