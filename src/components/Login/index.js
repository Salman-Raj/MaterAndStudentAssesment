import React, { useState } from "react";
import { Alert } from "react-bootstrap";
// import Home from "../Home";
// import FacultySection from "../Home"
import Calculator from "../Home"


function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  //     Here, we are declaring four state variables using the `useState` hook:
  //   - `emaillog`: it is used to store the email entered by the user
  //   - `passwordlog`: it is used to store the password entered by the user
  //   - `flag`: it is used to check if the user has entered correct login credentials or not
  //   - `home`: it is used to keep track if the user has logged in or not, if not the user is directed to a calculator component

  function handleLogin(e) {
    // It prevents Default Behaviour
    e.preventDefault();
    // Here we are getting username and password from localstorage
    let pass = localStorage.getItem("PasswordEntered").replace(/"/g, "");
    let mail = localStorage.getItem("EmailEntered").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Calculator />
      )}
    </div>
  );
}

export default Login;