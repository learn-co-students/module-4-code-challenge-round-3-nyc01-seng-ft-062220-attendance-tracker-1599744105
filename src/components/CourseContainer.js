import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {

  state = {
    students: [],
    textDisplay: false
  }

  //I know you cant do 2 component did mounts in the same component however
  //I am freaking out because i have never seen something with 2 component did
  // componentDidMount() {
  //   fetch("http://localhost:6001/courses")
  //   .then(response => response.json())
  //   .then(courses => this.setState({courses: courses}))
  // }




  componentDidMount() {
    fetch("http://localhost:6001/students")
    .then(response => response.json())
    .then(students => this.setState({students: students}))
  }

 
  toggleStudent = () => {
    this.setState((currentState) => ({
      textDisplay: currentState.textDisplay
    }))
  }

  courseDets = () => {
    return this.props.courses.map(courseObj => <CourseDetails key={courseObj.id} course={courseObj}/>)
  }
  


  render() {
    console.log(this.courseDets())
    return (
      <div className="ui grid container">
        <CourseDetails course={this.courseDets()}/>
        <CourseSelector />
        <StudentsList students={this.state.students} toggleStudent={()=>this.toggleStudent()}/>
      </div>
    );
  }
}

export default CourseContainer;
