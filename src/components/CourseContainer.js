import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
  state = {
    students: [],
    courses: [], 
    selected: null
  }

  componentDidMount(){
    fetch('http://localhost:6001/courses')
    .then(resp => resp.json())
    .then(courses => this.setState({
      courses: courses
    }))

    fetch('http://localhost:6001/students')
    .then(resp => resp.json())
    .then(info => this.setState({
      students: info
    }))
  }
  
  selectHandler = (courseObj) => {
    let course = this.state.courses.find(course => course.id == courseObj)
    this.setState({
      selected: course.name
    }) 
  }

  checkHandler = (checkObj) => {
    console.log(checkObj)
    
  }

  patchStudent = (checkObj) => {
    fetch(`http://localhost:6001/students/${checkObj.id}`)
  }

  render() {
    console.log(this.state.selected)
    return (
      <div className="ui grid container">
        <CourseDetails courses={this.state.courses} selected={this.state.selected} />
        <CourseSelector courses={this.state.courses} selectHandler={this.selectHandler} />
        <StudentsList students={this.state.students} course={this.state.selected} checkHandler={this.checkHandler} />
      </div>
    );
  }
}

export default CourseContainer;
