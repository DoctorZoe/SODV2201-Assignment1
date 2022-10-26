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
    <div className='wrapper'>
      <form onSubmit={submitFormHandler}>
        <div>
          <h2>First Name: </h2>
          <input
            type="text"
            maxLength="30"
            required
            value={firstnameInput}
            onChange={firstnameChangeHandler}
          />
        </div>
        <div>
          <h2>Last Name: </h2>
          <input
            type="text"
            maxLength="30"
            required
            value={lastnameInput}
            onChange={lastnameChangeHandler}
          />
        </div>
        <div>
          <h2>Email: </h2>
          <input
            type="email"
            maxLength="50"
            required
            value={emailInput}
            onChange={emailChangeHandler}
          />
        </div>
        <div>
          <h2>Message: </h2>
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
