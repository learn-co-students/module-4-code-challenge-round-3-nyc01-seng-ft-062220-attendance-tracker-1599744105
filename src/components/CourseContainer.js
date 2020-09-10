import React, { Component } from "react"
import CourseDetails from "./CourseDetails"
import CourseSelector from "./CourseSelector"
import StudentsList from "./StudentsList"
import SortSelector from './SortSelector'

class CourseContainer extends Component {
  state = {
    courses: [],
    students: [],
    selectedCourse: "",
  }

  componentDidMount() {
    fetch("http://localhost:6001/courses")
      .then((response) => response.json())
      .then((courses) => this.setState({ courses: courses }))
    fetch("http://localhost:6001/students")
      .then((response) => response.json())
      .then((students) => this.setState({ students: students }))
  }

  courseSelectorHandler = (id) => {
    let selectedCourse = this.state.courses.find(
      (course) => course.id === parseInt(id)
    )
    this.setState({ selectedCourse: selectedCourse })
  }

  checkBoxHandler = (object) => {
    let attending = !object.attending
    fetch(`http://localhost:6001/students/${object.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        attending: attending
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(student => this.updateStudentState(student))
  }

  updateStudentState = (updatedStudent) => {
    let students = this.state.students
    let studentIndex = this.state.students.findIndex((student)=> student.id === updatedStudent.id)
    let student = students[studentIndex]
    student.attending = !student.attending
    this.setState({students: students})
  }

  sortStudentsByName = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="ui grid container">
        <CourseDetails course={this.state.selectedCourse} />
        <CourseSelector
          courses={this.state.courses}
          courseSelectorHandler={this.courseSelectorHandler}
        />
        <SortSelector sortStudentsByName={this.sortStudentsByName} />
        <StudentsList
          students={this.state.students}
          selectedCourse={this.state.selectedCourse}
          checkBoxHandler={this.checkBoxHandler}
        />
      </div>
    )
  }
}

export default CourseContainer
