import React from 'react';
import { useState } from 'react';

const DisplayQuestions = props => {
  // const [searchValue, setSearchValue] = useState('');
  // const searchGo = event => {
  //   const resultArr = [...arr].filter(course =>
  //     course.courseName.includes(searchValue)
  //   );
  //   setSearchValue(event.target.value);
  // };

  var studentQuestions = props.studentQuestions;

  // const resultArr = [...arr].filter(course =>
  //   course.courseName.includes(searchValue)
  // );

  return (
    <div className="questions">
      <h1 style={{ fontSize: '2rem' }}>Student Questions:</h1>
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {studentQuestions.map((question, index) => (
              <tr key={index}>
                <td>{question.firstName}</td>
                <td>{question.lastName}</td>
                <td>{question.email}</td>
                <td>{question.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayQuestions;
