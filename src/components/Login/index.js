import { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";
import styles from "./styles.module.css";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import validations from "./validations";

function Login() {
  const { setUser } = useContext(UserDataContext);
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: validations,
    onSubmit: (values, bag) => {
      history.push("/dashboard");
      setUser(values);
    }
  });
  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <div className={styles.loginFormHeader}>
          <h2>Login</h2>
          <small>
            Don't have an account?{" "}
            <Link className={styles.signinBtn} to="/register">
              Sign Up
            </Link>
          </small>
        </div>
        <div className={styles.inputWrapper}>
          <input
            value={formik.values.username}
            onChange={formik.handleChange}
            name="username"
            type="text"
            placeholder="Username"
            autoComplete="off"
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username && (
            <small style={{ color: "#ce1212" }}>{formik.errors.username}</small>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            type="password"
            placeholder="Password"
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <small style={{ color: "#ce1212" }}>{formik.errors.password}</small>
          )}
        </div>
        <button className={styles.loginBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
