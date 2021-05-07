import React from "react";
import styles from "./styles.module.css";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import validations from "./validations";

function Register() {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
    validationSchema: validations,
    onSubmit: (values, bag) => {
      console.log(values);
      history.push("/");
    }
  });
  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <div className={styles.loginFormHeader}>
          <h2>Create Account</h2>
          <small>
            Already have an account?{" "}
            <Link className={styles.signinBtn} to="/">
              Sign in
            </Link>
          </small>
        </div>
        <div className={styles.inputWrapper}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username && (
            <small style={{ color: "#ce1212" }}>{formik.errors.username}</small>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formik.values.firstname}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          {formik.errors.firstname && formik.touched.firstname && (
            <small style={{ color: "#ce1212" }}>
              {formik.errors.firstname}
            </small>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formik.values.lastname}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.lastname && formik.touched.lastname && (
            <small style={{ color: "#ce1212" }}>{formik.errors.lastname}</small>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <small style={{ color: "#ce1212" }}>{formik.errors.email}</small>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <small style={{ color: "#ce1212" }}>{formik.errors.password}</small>
          )}
        </div>
        <button className={styles.loginBtn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
