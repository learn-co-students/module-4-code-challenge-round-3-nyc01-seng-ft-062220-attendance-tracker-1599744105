import React from "react";

import Title from "./Title";
import CourseContainer from "./CourseContainer";



  class App extends React.Component{

    state={
      courses: []
    }

    componentDidMount() {
      fetch("http://localhost:6001/courses")
      .then(response => response.json())
      .then(courses => this.setState({courses: courses}))
    }

    render(){
//console.log(this.state.courses)
      return(

        <div className="ui raised segment">
        <Title />
        <CourseContainer courses={this.state.courses}/>
      </div>



      )
    }





  }
  


export default App;
