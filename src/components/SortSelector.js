import React from "react";

const SortSelector = props => {
  return (
    <div className="sixteen wide column">
      <select
        className="ui dropdown"
        onChange={(e) => props.sortStudentsByName(e)}
        defaultValue="select"
      >
        <option value="select" disabled>
          Select how to sort
        </option>
       
          return (
            <option >Name</option>
            <option >Attending</option>
          );
      </select>
    </div>
  );
};

// This makes it so, when no courses are passed
// CourseDetails will still get courses, but it will be an empty array.
SortSelector.defaultProps = {
  students: []
};

export default SortSelector;