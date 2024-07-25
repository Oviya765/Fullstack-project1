import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateForm, setErrors } from "../Redux/Action";
import "../Assets/Styles/Register.css";
import registerImage from "../Assets/Images/register-image.png";

function Register() {
  const dispatch = useDispatch();
  const formValues = useSelector((state) => state.form.formValues);
  const errors = useSelector((state) => state.form.errors);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateForm(name, value));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let tempErrors = { ...errors };

    if (name === "username" && !value) {
      tempErrors.username = "Username is required";
    } else if (name === "username") {
      delete tempErrors.username;
    }

    if (name === "email" && !value) {
      tempErrors.email = "Email is required";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      tempErrors.email = "Email is not valid";
    } else if (name === "email") {
      delete tempErrors.email;
    }

    if (name === "password" && !value) {
      tempErrors.password = "Password is required";
    } else if (name === "password" && value.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
    } else if (name === "password") {
      delete tempErrors.password;
    }

    if (name === "dateOfBirth" && !value) {
      tempErrors.dateOfBirth = "Date of Birth is required";
    } else if (name === "dateOfBirth") {
      delete tempErrors.dateOfBirth;
    }

    if (name === "registerNumber" && !value) {
      tempErrors.registerNumber = "Register Number is required";
    } else if (name === "registerNumber") {
      delete tempErrors.registerNumber;
    }

    if (name === "year" && !value) {
      tempErrors.year = "Year is required";
    } else if (name === "year") {
      delete tempErrors.year;
    }

    if (name === "department" && !value) {
      tempErrors.department = "Department is required";
    } else if (name === "department") {
      delete tempErrors.department;
    }

    if (name === "section" && !value) {
      tempErrors.section = "Section is required";
    } else if (name === "section") {
      delete tempErrors.section;
    }

    dispatch(setErrors(tempErrors));
  };

  const validate = () => {
    let valid = true;
    for (let field in formValues) {
      validateField(field, formValues[field]);
      if (errors[field]) valid = false;
    }
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form data:", formValues);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-img">
          <img src={registerImage} alt="Register Illustration" />
        </div>
        <div className="register-subcls">
          <h1>Register</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <div>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formValues.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formValues.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <input
                id="registerNumber"
                type="text"
                name="registerNumber"
                placeholder="Enter Register Number"
                value={formValues.registerNumber}
                onChange={handleChange}
              />
              {errors.registerNumber && <p className="error">{errors.registerNumber}</p>}
            </div>
            <div className="row">
              <div className="col">
                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  value={formValues.dateOfBirth}
                  onChange={handleChange}
                />
                {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
              </div>
              <div className="col">
                <select
                  id="year"
                  name="year"
                  value={formValues.year}
                  onChange={handleChange}
                >
                  <option value="">Select Year</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </select>
                {errors.year && <p className="error">{errors.year}</p>}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <select
                  id="department"
                  name="department"
                  value={formValues.department}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="IT">IT</option>
                </select>
                {errors.department && <p className="error">{errors.department}</p>}
              </div>
              <div className="col">
                <select
                  id="section"
                  name="section"
                  value={formValues.section}
                  onChange={handleChange}
                >
                  <option value="">Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
                {errors.section && <p className="error">{errors.section}</p>}
              </div>
            </div>
            
            <button type="submit">Register</button>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
