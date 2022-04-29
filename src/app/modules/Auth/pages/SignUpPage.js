import React, { useState } from "react";
import { Formik, Field } from "formik";
import {connect} from "react-redux";
import "../../../../_theme/css/style.css";
import "../../../../_theme/css/bootstrap.min.css";
import "../../../../_theme/fonts/icomoon/style.css";
import * as auth from "../_redux/authRedux";
import { register } from "../_redux/authCrud";
import {Input} from "../../../../_theme/_partials/controls"

const SignUpPage = (props) => {
  const [loading, setLoading] = useState(false);

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };
  return (
    <>
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{ backgroundImage: "url(/images/cinema.jpg)" }}></div>
        <div className="contents order-2 order-md-1">

          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
              <h3 className="text-white d-flex h2">Create <span className="mx-2"><strong >Account</strong></span></h3><br />

                <Formik
                  initialValues={{
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Password: "",
                    Gener1: "",
                    Gener2: "",
                    Gener3: "",
                    Age: 0,
                  }}
                  validate={values => {
                    const errors = {};

                    if (!values.Email) {
                      errors.Email = "Required Fields";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
                    ) {
                      errors.Email = "Invalid Value";
                    }

                    if (!values.LastName) {
                      errors.LastName = "Required Fields";
                    }

                    if (!values.FirstName) {
                      errors.FirstName = "Required Fields";
                    }

                    if (!values.Password) {
                      errors.Password = "Required Fields";
                    }
                    if (!values.Gener1) {
                      errors.Gener1 = "Required Fields";
                    }
                    if (!values.Gener2) {
                      errors.Gener2 = "Required Fields";
                    }
                    if (!values.Gener3) {
                      errors.Gener3 = "Required Fields";
                    }
                    if (values.Age <= 1) {
                      errors.Age = "Required Fields";
                    }

                    return errors;
                  }}
                  onSubmit={(values, { setStatus, setSubmitting }) => {
                    console.log(values)
                    enableLoading();
                    register(
                      values.Email,
                      values.FirstName,
                      values.LastName,
                      values.Password,
                      values.Gener1,
                      values.Gener2,
                      values.Gener3,
                      values.Age
                    )
                      .then(({ data: { accessToken } }) => {
                        props.register(accessToken);
                        disableLoading();
                      })
                      .catch(() => {
                        setSubmitting(false);
                        setStatus(
                          "Required Fields"
                        );
                        disableLoading();
                      });
                  }}
                >
                  {({
                    values,
                    status,
                    errors,
                    touched,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      autoComplete="off"
                      className="form"
                    >
                      <div className="form-group first">

                        <Field type="text" name="FirstName" component={Input} label="First Name" >
                          {({ field }) => (
                            <div>
                              <input
                                type="text" {...field}
                                className="form-control"
                                placeholder="enter your first name" />
                              {touched.FirstName &&
                                errors.FirstName && <div className="text-white">{errors.FirstName}</div>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="form-group last mb-3">
                        <Field type="text" name="LastName" component={Input} label="Last Name" >
                          {({ field }) => (
                            <div>
                              <input
                                type="text" {...field}
                                className="form-control"
                                placeholder="enter your last name" />
                              {touched.LastName &&
                                errors.LastName && <div className="text-white">{errors.LastName}</div>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="form-group first">
                        <Field type="email" name="Email" component={Input} label="Email" >
                          {({ field }) => (
                            <div>
                              <input
                                type="email" {...field}
                                className="form-control"
                                placeholder="enter your email" />
                              {touched.Email &&
                                errors.Email && <div className="text-white">{errors.Email}</div>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="form-group last mb-3">
                        <Field type="password" name="Password" component={Input} label="Password">
                          {({ field }) => (
                            <div>
                              <input
                                type="password" {...field}
                                className="form-control"
                                placeholder="enter your Password" />
                              {touched.Password &&
                                errors.Password && <div className="text-white">{errors.Password}</div>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="form-group last mb-3">
                      <Field type="text" name="Gener1" component={Input} label="Gener1">
                          {({ field }) => (
                            <div>
                              <input
                                type="text" {...field}
                                className="form-control"
                                placeholder="enter your Gener1" />
                              {touched.Gener1 &&
                                errors.Gener1 && <div className="text-white">{errors.Gener1}</div>}
                            </div>
                          )}
                        </Field>
                        </div>
                        <div className="form-group last mb-3">
                        <Field type="text" name="Gener2" component={Input} label="Gener2">
                          {({ field }) => (
                            <div>
                              <input
                                type="text" {...field}
                                className="form-control"
                                placeholder="enter your Gener2" />
                              {touched.Gener2 &&
                                errors.Gener2 && <div className="text-white">{errors.Gener2}</div>}
                            </div>
                          )}
                        </Field>
                        </div>
                        <div className="form-group last mb-3">
                        <Field type="text" name="Gener3" component={Input} label="Gener3">
                          {({ field }) => (
                            <div>
                              <input
                                type="text" {...field}
                                className="form-control"
                                placeholder="enter your Gener3" />
                              {touched.Gener3 &&
                                errors.Gener3 && <div className="text-white">{errors.Gener3}</div>}
                            </div>
                          )}
                        </Field>
                        </div>
                        <div className="form-group last mb-3">
                        <Field type="number" name="Age" component={Input} label="Age">
                          {({ field }) => (
                            <div>
                              <input
                                type="number" {...field}
                                className="form-control"
                                placeholder="enter your Age" />
                              {touched.Age &&
                                errors.Age && <div className="text-white">{errors.Age}</div>}
                            </div>
                          )}
                        </Field>
                        </div>
                      <div className="d-flex mb-5 align-items-center">
                        <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                          <input type="checkbox" defaultChecked />
                          <div className="control__indicator"></div>
                        </label>
                        <span className="ml-auto"><a href="/" className="forgot-pass">Forgot Password</a></span>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-block btn-primary" id="btn"
                      >
                        <span className={`${loading ? "pr-3" : ""}`}>Sign up</span>
                        {loading && (
                          <span className="spinner-border text-light"></span>
                        )}
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
export default connect(null, auth.actions)(SignUpPage);