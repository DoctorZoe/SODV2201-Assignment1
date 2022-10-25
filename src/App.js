import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './index.css';

import DisplayArray from './components/DisplayArray';
import ContactForm from './components/ContactForm';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';

import Landing from './pages/LandingPage';
import Header from './components/Header';

const App = () => {
  //Baseline courseData as a starting point
  const [courseData, setCourseData] = useState([
    {
      courseCode: 'PM111',
      courseName: 'Intro to Project Management',
      courseTerm: 1,
      courseStartDate: '2022-09-06',
      courseEndDate: '2022-12-16',
    },
    {
      courseCode: 'PF111',
      courseName: 'C++ Programming Fundamentals',
      courseTerm: 1,
      courseStartDate: '2022-09-06',
      courseEndDate: '2022-12-16',
    },
    {
      courseCode: 'CM111',
      courseName: 'Computer Maintenance',
      courseTerm: 1,
      courseStartDate: '2022-09-06',
      courseEndDate: '2022-12-16',
    },
    {
      courseCode: 'IS111',
      courseName: 'Information Security',
      courseTerm: 1,
      courseStartDate: '2022-09-06',
      courseEndDate: '2022-12-16',
    },
    {
      courseCode: 'NET222',
      courseName: 'Networking',
      courseTerm: 2,
      courseStartDate: '2023-01-09',
      courseEndDate: '2023-04-21',
    },
    {
      courseCode: 'WEB222',
      courseName: 'Web Technology',
      courseTerm: 2,
      courseStartDate: '2023-01-09',
      courseEndDate: '2023-04-21',
    },
    {
      courseCode: 'PM222',
      courseName: 'Project Management',
      courseTerm: 2,
      courseStartDate: '2023-01-09',
      courseEndDate: '2023-04-21',
    },
    {
      courseCode: 'PM333',
      courseName: 'Intermediate Project Management',
      courseTerm: 3,
      courseStartDate: '2023-10-04',
      courseEndDate: '2023-12-15',
    },
    {
      courseCode: 'PF333',
      courseName: 'Advanced C++ Programming Fundamentals',
      courseTerm: 3,
      courseStartDate: '2023-10-04',
      courseEndDate: '2023-12-15',
    },
    {
      courseCode: 'CM333',
      courseName: 'Advanced Computer Maintenance',
      courseTerm: 3,
      courseStartDate: '2023-10-04',
      courseEndDate: '2023-12-15',
    },
    {
      courseCode: 'IS333',
      courseName: 'Advanced Information Security',
      courseTerm: 3,
      courseStartDate: '2023-10-04',
      courseEndDate: '2023-12-15',
    },
    {
      courseCode: 'NET444',
      courseName: 'Advanced Networking',
      courseTerm: 4,
      courseStartDate: '2024-01-08',
      courseEndDate: '2024-04-19',
    },
    {
      courseCode: 'WEB444',
      courseName: 'Advanced Web Technology',
      courseTerm: 4,
      courseStartDate: '2024-01-08',
      courseEndDate: '2024-04-19',
    },
    {
      courseCode: 'PR444',
      courseName: 'Advanced Project Management',
      courseTerm: 4,
      courseStartDate: '2024-01-08',
      courseEndDate: '2024-04-19',
    },
  ]);

  return (
    <div>
      <Route exact path="/">
        <Header />
        <Landing />
      </Route>
      <Route path="/student/view">
        <Header />
        <StudentPage />
        <h1>View Available Courses</h1>
      </Route>
      <Route path="/student/search">
        <Header />
        <StudentPage />
        <h1>Search Courses</h1>
      <DisplayArray courseCode = {courseData}> </DisplayArray>
      </Route>
      <Route path="/student/signup">
        <Header />
        <StudentPage />
        <h1>Sign up</h1>
      </Route>
      <Route path="/student/form">
        <Header />
        <StudentPage />
        <h1>Send Questions</h1>
        <ContactForm />
      </Route>
      <Route path="/admin/search">
        <Header />
        <AdminPage />
        <h1>Search Courses</h1>
      </Route>
      <Route path="/admin/add">
        <Header />
        <AdminPage />
        <h1>Add Courses</h1>
      </Route>
      <Route path="/admin/delete">
        <Header />
        <AdminPage />
        <h1>Delete Courses</h1>
      </Route>
      <Route path="/admin/registered-students">
        <Header />
        <AdminPage />
        <h1>List of Registered Students for Different Programs</h1>
      </Route>
      <Route path="/admin/questions">
        <Header />
        <AdminPage />
        <h1>Student Questions</h1>
      </Route>
    </div>
    
  );
};

export default App;
