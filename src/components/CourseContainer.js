import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
  state = {
    courses: [], 
    selected: null
  }

  componentDidMount(){
    fetch('http://localhost:6001/courses')
    .then(resp => resp.json())
    .then(courses => this.setState({
      courses: courses
    }))
  }
  
  selectHandler = (courseObj) => {
    let course = this.state.courses.find(course => course.id == courseObj)
    this.setState({
      selected: course.name
    }) 
  }

  

  render() {
    console.log(this.state.selected)
    return (
      <div className="ui grid container">
        <CourseDetails courses={this.state.courses} selected={this.state.selected} />
        <CourseSelector courses={this.state.courses} selectHandler={this.selectHandler} />
        <StudentsList course={this.state.selected}  />
      </div>
    );
  }
}

export default CourseContainer;
