import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import signup from "./images/signup.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import * as Yup from "yup";
function SignUp() {
  const [data, setData]=useState([]);
  const navigate = useNavigate();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <div className="vh-100 vw-100 main d-flex align-items-center justify-content-center p-2 ">
      <ToastContainer />
      <div className="signup card col-md-8 col-12">
        <div className="card-body row gap-1">
          <div className="col-md-6 col-12">
            <img
              src={signup}
              alt="signup-image"
              height={"400"}
              width={"400"}
              className="only-desktop-flex"
            />
          </div>
          <div className="col-md-5 col-12 p-4 ">
            <h2> Sign Up</h2>
            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                password: "",
                passwordConfirmation: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()

                  .max(15, "Must be 15 characters or less")

                  .required("Required"),

                phone: Yup.string()
                  .matches(phoneRegExp, "Phone number is not valid")
                  .required("Required"),

                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string().required("Password is required"),
                passwordConfirmation: Yup.string().oneOf(
                  [Yup.ref("password"), null],
                  "Passwords must match"
                ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);

                try {
                  axios
                    .post("https://skill.eviternship.com/addStudent",{
                      name:values.name,
                      email:values.email,
                      phone:values.phone,
                      password:values.password,
                      is_verified:""
                    }
                  )
                    .then(function (Response) {
                      console.log(Response);
                      setData(Response.data.message);
                      if(Response.status==201){
                        toast.success(data)
                          setTimeout(() => {
                        navigate("/");

                        setSubmitting(false);
                      }, 1000);
                      }
                    
                    
                    })
                    .catch(function (Response) {
                      toast.error('user already exists');
                      setTimeout(() => {
                        window.location.reload();
                       
                      }, 1000);
                     
                    });
                } catch (error) {
                  toast.error("Something went wrong");
                 
                }
              }}
            >
              <Form>
                <div className="row mt-4">
                  <div className="col-12">
                    <label htmlFor="name">Name</label>

                    <Field name="name" type="text" className="form-control" />

                    <ErrorMessage
                      name="name"
                      render={(msg) => (
                        <div className="text-danger small-text">Required</div>
                      )}
                    />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-12">
                    <label htmlFor="phone">Phone Number</label>

                    <Field name="phone" type="text" className="form-control" />

                    <ErrorMessage
                      name="phone"
                      render={(msg) => (
                        <div className="text-danger small-text">Required</div>
                      )}
                    />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-12">
                    <label htmlFor="email">Email Address</label>

                    <Field name="email" type="email" className="form-control" />

                    <ErrorMessage
                      name="email"
                      render={(msg) => (
                        <div className="text-danger small-text">
                          Wrong email
                        </div>
                      )}
                    />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-12">
                    <label htmlFor="password">Password</label>

                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />

                    <ErrorMessage
                      name="password"
                      render={(msg) => (
                        <div className="text-danger small-text">
                          password must match
                        </div>
                      )}
                    />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-12">
                    <label htmlFor=" passwordConfirmation">
                      Confirm Password
                    </label>

                    <Field
                      name=" passwordConfirmation"
                      type="password"
                      className="form-control"
                    />

                    <ErrorMessage
                      name="passwordConfirmation"
                      render={(msg) => (
                        <div className="text-danger small-text">
                          password must match
                        </div>
                      )}
                    />
                  </div>
                </div>

                <button type="submit" className="col-12 btn mt-3 btn-success">
                  Submit
                </button>
              </Form>
            </Formik>

            <div className="d-flex mt-2 justify-content-between">
              <div> Already have an account?</div>
              <Link to={"/"} className="btn btn-primary">
                Login{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
