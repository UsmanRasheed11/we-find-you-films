import React, { useState } from "react";
import { Formik, Field } from "formik";
import "../../../../_theme/css/style.css";
import "../../../../_theme/css/bootstrap.min.css";
import "../../../../_theme/fonts/icomoon/style.css";
import { register } from "../_redux/authCrud";
import {Input} from "../../../../_theme/_partials/controls"

export const SignUpPage = (props) => {
  const { intl } = props;
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
                <h3>Create <strong >Account</strong></h3><br />

                <Formik
                  initialValues={{
                    fname: "",
                    lname: "",
                    email: "",
                    password: "",
                  }}
                  validate={values => {
                    const errors = {};

                    if (!values.email) {
                      errors.email = intl.formatMessage({
                        id: "AUTH.VALIDATION.REQUIRED_FIELD"
                      });
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = intl.formatMessage({
                        id: "AUTH.VALIDATION.INVALID_FIELD"
                      });
                    }

                    if (!values.lname) {
                      errors.fullname = intl.formatMessage({
                        id: "AUTH.VALIDATION.REQUIRED_FIELD"
                      });
                    }

                    if (!values.fname) {
                      errors.username = intl.formatMessage({
                        id: "AUTH.VALIDATION.REQUIRED_FIELD"
                      });
                    }

                    if (!values.password) {
                      errors.password = intl.formatMessage({
                        id: "AUTH.VALIDATION.REQUIRED_FIELD"
                      });
                    }

                    if (!values.confirmPassword) {
                      errors.confirmPassword = intl.formatMessage({
                        id: "AUTH.VALIDATION.REQUIRED_FIELD"
                      });
                    } else if (values.password !== values.confirmPassword) {
                      errors.confirmPassword =
                        "Password and Confirm Password didn't match.";
                    }

                    return errors;
                  }}
                  onSubmit={(values, { setStatus, setSubmitting }) => {
                    enableLoading();
                    register(
                      values.email,
                      values.fullname,
                      values.username,
                      values.password
                    )
                      .then(({ data: { accessToken } }) => {
                        props.register(accessToken);
                        disableLoading();
                      })
                      .catch(() => {
                        setSubmitting(false);
                        setStatus(
                          intl.formatMessage({
                            id: "AUTH.VALIDATION.INVALID_LOGIN"
                          })
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
                    isSubmitting
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      autoComplete="off"
                      className="form"
                    >
                      <div className="form-group first">

                        <Field type="text" name="fname" component={Input} label="First Name" >
                          {({ field, form, meta }) => (
                            <div>
                              <input
                                type="text" {...field}
                                className="form-control"
                                placeholder="enter your first name" />
                              {meta.touched &&
                                meta.error && <div className="error invalid-feedback">{meta.error}</div>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="form-group last mb-3">
                        <Field type="text" name="lname" >
                          {({ field, form, meta }) => (
                            <div>
                              <input
                                type="text" {...field}
                                className="form-control"
                                placeholder="enter your last name" />
                              {meta.touched &&
                                meta.error && <div className="error invalid-feedback">{meta.error}</div>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="form-group first">
                        <Field type="email" name="email" >
                          {({ field, form, meta }) => (
                            <div>
                              <input
                                type="email" {...field}
                                className="form-control"
                                placeholder="enter your email" />
                              {meta.touched &&
                                meta.error && <div className="error invalid-feedback">{meta.error}</div>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="form-group last mb-3">
                        <Field type="password" name="password" >
                          {({ field, form, meta }) => (
                            <div>
                              <input
                                type="password" {...field}
                                className="form-control"
                                placeholder="enter your Password" />
                              {meta.touched &&
                                meta.error && <div className="error invalid-feedback">{meta.error}</div>}
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