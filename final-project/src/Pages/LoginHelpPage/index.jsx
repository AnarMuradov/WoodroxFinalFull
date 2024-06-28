import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Helmet } from "react-helmet-async";
const LoginHelp = () => {

  return (
    <>
    <Helmet>
      <title>Login Help</title>
    </Helmet>
    <section className="help">
      <div className="help_container">
        <div className="help_container_content">
          <p>
          Forgot your password? Write the email you entered during registration and username. A password will be sent to your email shortly!
          </p>
          <Link to={`mailto:dmurad908@gmail.com`}>
            dmurad908@gmail.com
          </Link>
          <Link to={'/login'}>Back to Login</Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default LoginHelp;
