import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../Funciones/funciones";
import { logIn } from "../../Actions/index";
import "./Login.css";
import swal from "sweetalert";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="inicio_container">
      <p className="inicio_titulo">Log In</p>
      <div className="form_inicio">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(valores) => {
            let errors = {};
            if (!valores.email) errors.email = "Need an E-Mail";
            if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              )
            )
              errors.email = "E-Mail not valid";

            if (!valores.password) errors.password = "Need a Password";
            if (!/^[A-Za-z0-9]{4,8}$/.test(valores.password))
              errors.password = "Must contain";
            if (valores.password.length < 4 || valores.password.length > 8)
              errors.password = "Must contain 4 to 8 characters";
            return errors;
          }}
          onSubmit={async (values, { resetForm }) => {
            let loginUser = await login(values.email, values.password);

            resetForm();

            if (loginUser.ok) {
              swal(`¡${loginUser.msg}! `, {
                icon: "error",
                button: false,
              });
            } else {
              dispatch(logIn(loginUser));
              history.push("/home");
            }
          }}
        >
          {({ errors, values }) => (
            <Form className="form">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <Field
                  className="form-control"
                  autoComplete="username"
                  type="email"
                  placeholder="challenge@alkemy.org"
                  id="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component={() => <p className="form_error">{errors.email}</p>}
                />
              </div>
              <div className="form-group">
                <label className="exampleInputPassword1">Password</label>
                <Field
                  className="form-control"
                  autoComplete="current-password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="react"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <p className="form_error">{errors.password}</p>
                  )}
                />
              </div>
              {!errors.email &&
                !errors.password &&
                values.password.length > 0 &&
                values.email.length > 0 && (
                  <button type="submit" className="btn btn-success">
                    Send
                  </button>
                )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
