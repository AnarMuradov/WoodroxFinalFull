import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { UserContext } from "../../Context/UserContext";
import { Helmet } from "react-helmet-async";
const LoginPage = () => {
  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  function handleSubmit({ email, password }) {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "User not found" || data === "wrong password") {
          navigate("/login");
          setError("Invalid password or email");
          return;
        }
        addToken(data);
        navigate("/");
      });
  }
  return (
   <>
   <Helmet>
    <title>
      Login
    </title>
   </Helmet>
   <section className="login">
      <div className="login_container">
        <div className="login_container_content">
          <div className="login_container_content_title">Login</div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required(<span>Required</span>),
              password: Yup.string()
                .min(4, "Too short!")
                .required(<span>Required</span>),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" />

              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" />

              <span className="errorMessage">{error}</span>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
          <Link to={"/login/help"}>Lost your Password?</Link>
        </div>
      </div>
      <p>
      Don't have an account?
        <Link to={"/register"}>Sign up here!</Link>
      </p>
    </section>
   </>
  );
};

export default LoginPage;