import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {

  state = {
    courses: [],
    selectedCourse: {},
    students: []
  }

  componentDidMount () {
    this.fetchCourses()
    this.fetchStudents()
  }

  fetchStudents = () => {
    fetch("http://localhost:6001/students")
    .then(resp => resp.json())
    .then(studentData => this.setState({students: studentData}))
  }
  
   fetchCourses = () => {
    fetch("http://localhost:6001/courses")
    .then(resp => resp.json())
    .then(data => this.setState({courses: data}))
  }

  courseSelector = (e) => {
    let courseId = e.target.value
    let courseIdNum = parseInt(courseId)
    const courseObject = this.state.courses.find(course => course.id === courseIdNum)
    this.setState({selectedCourse: courseObject})
  }


  filteredStudents = () => {
    let newArray = [...this.state.students]
    let studentsArray = newArray.filter(student => student.course === this.state.selectedCourse.name)
    return studentsArray
  }

  attendingChanger = (id) => {
    let newArray=[...this.state.students]
    let targetStudent = newArray.find(student => student.id === id)
    targetStudent.attending = !targetStudent.attending
    console.log(targetStudent)
    this.setState({students: newArray})
    fetch(`http://localhost:6001/students/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({attending: targetStudent.attending})
    })
  }

  render() {
    return (
      <div className="ui grid container">
        <CourseDetails course={this.state.selectedCourse}/>
        <CourseSelector courses={this.state.courses} courseSelector={this.courseSelector} />
        <StudentsList students = {this.filteredStudents()} attendingChanger={this.attendingChanger} />
      </div>
    );
  }
}

export default CourseContainer;
