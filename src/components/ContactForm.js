import React, { useState } from 'react';

const ContactForm = props => {
  const [firstnameInput, setFirstnameInput] = useState('');
  const [lastnameInput, setLastnameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  // Event handlers
  const firstnameChangeHandler = event => {
    setFirstnameInput(event.target.value);
  };
  const lastnameChangeHandler = event => {
    setLastnameInput(event.target.value);
  };
  const emailChangeHandler = event => {
    setEmailInput(event.target.value);
  };
  const messageChangeHandler = event => {
    setMessageInput(event.target.value);
  };
  const submitFormHandler = event => {
    event.preventDefault();

    alert('Your message has been sent.');

    const submittedFormData = {
      firstName: firstnameInput,
      lastName: lastnameInput,
      email: emailInput,
      message: messageInput,
    };

    // Log form data to the console
    //console.log(submittedFormData);
    props.onSubmitForm(submittedFormData);
    setFirstnameInput('');
    setLastnameInput('');
    setEmailInput('');
    setMessageInput('');
  };

  return (
    <div>
      <form onSubmit={submitFormHandler} className="questions">
        <div className="input-field">
          <label>First Name: </label>
          <input
            type="text"
            maxLength="30"
            required
            value={firstnameInput}
            onChange={firstnameChangeHandler}
          />
        </div>
        <div className="input-field">
          <label>Last Name: </label>
          <input
            type="text"
            maxLength="30"
            required
            value={lastnameInput}
            onChange={lastnameChangeHandler}
          />
        </div>
        <div className="input-field">
          <label>Email: </label>
          <input
            type="email"
            maxLength="50"
            required
            value={emailInput}
            onChange={emailChangeHandler}
          />
        </div>
        <div className="input-field">
          <label>Message: </label>
          <textarea
            maxLength="500"
            value={messageInput}
            onChange={messageChangeHandler}
          />
        </div>
        <div className="button-div">
          <button type="submit" className="submitBtn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
