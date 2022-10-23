import React from 'react';
import { useState } from 'react';

const DisplayArray = (props) => {

  const [searchValue, setSearchValue] = useState('');
  const searchGo = event => {
    
    const resultArr = [...arr].filter(course => course.courseName.includes(searchValue))
    setSearchValue(event.target.value);
  };

var arr = props.courseCode;

//const resultArr = [...arr].sort((x,y) => x.courseName < y.courseName ? -1 : 1,) (for ordering it)

const resultArr = [...arr].filter(course => course.courseName.includes(searchValue))

 return (
    <div>
      <label>Search Course: </label>
          <input
            type="text"
            value={searchValue}
            onChange={searchGo}
          />
          <div>
            <table>
              <thead>
                <tr>
                  <th>Codeee</th>
                  <th>Name</th>
                  <th>Term</th>
                  <th>StartDate</th>
                  <th>StartDate</th>
                </tr>
              </thead>
              <tbody>
                {resultArr.map((courses) => (
                  <tr>
                  <td>{courses.courseCode}</td>
                  <td>{courses.courseName}</td>
                  <td>{courses.courseTerm}</td>
                  <td>{courses.courseStartDate}</td>
                  <td>{courses.courseEndDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
    </div>
  );
};

export default DisplayArray;