import React, { useState } from 'react'
import './login.css'
import signInImage from "../Images/signin.png"
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { InputGroup, Form, Spinner } from "react-bootstrap";

const Login = () => {

   const [show, setShow] = useState(false);
   const [check, setCheck] = useState(false);
   const [input, setInput] = useState({ email: "", password: "" });
   const [loading, setLoading] = useState(false);
   const handleChange = (e) => {
      const { name } = e.target;
      setInput({ ...input, [name]: e.target.value });
  };
   return (
      <div>
         <div className="signin-main">
            <div className="row align-items-center">
               <div className="col-lg-6 col-md-12">
                  <img
                     src={signInImage}
                     alt="vector"
                     width="90%"
                  />
               </div>
               <div className="col-lg-6 col-md-12">
                  <h3>Login</h3>
                  <Form
                     className="form-main"
                  // onSubmit={submitForm}
                  >
                     <InputGroup>
                        <InputGroup.Text id="basic-addon1">
                           <FiUser
                              size="20"
                              color="#c4c4c4"
                           />
                        </InputGroup.Text>
                        <Form.Control
                           placeholder="Email"
                           type="text"
                           aria-label="Username"
                           disabled={
                              loading ? true : false
                           }
                           name="email"
                           value={input.email}
                           onChange={handleChange}
                           className="basic-addon2"
                           required
                        />
                     </InputGroup>
                     <InputGroup className="mb-0">
                        <InputGroup.Text id="basic-addon1">
                           <FiLock
                              size="20"
                              color="#c4c4c4"
                           />
                        </InputGroup.Text>
                        <Form.Control
                           placeholder="Password"
                           aria-label="Password"
                           type={
                              show
                                 ? "text"
                                 : "password"
                           }
                           aria-describedby="basic-addon1"
                           name="password"
                           disabled={
                              loading ? true : false
                           }
                           value={input.password}
                           onChange={handleChange}
                           required
                           id="basic-addon3"
                        />
                        <InputGroup.Text
                           className="basic-addon2"
                           onClick={() =>
                              show
                                 ? setShow(false)
                                 : setShow(true)
                           }
                        >
                           {show ? (
                              <FiEyeOff
                                 size="20"
                                 color="#c4c4c4"
                                 title="hide"
                                 cursor="pointer"
                              />
                           ) : (
                              <FiEye
                                 size="20"
                                 color="#c4c4c4"
                                 title="show"
                                 cursor="pointer"
                              />
                           )}
                        </InputGroup.Text>
                     </InputGroup>
                     <div className="d-flex justify-content-start flex-column flex-md-row justify-content-md-between gap-2 gap-md-0">
                        <small>
                        </small>
                        <small
                           style={{
                              cursor: "pointer",
                           }}
                        >
                           Forgot Password ?
                        </small>
                     </div>
                     <InputGroup className="my-5">
                        <button
                           type="submit"
                           disabled={
                              loading ? true : false
                           }
                           className="login-btn btn-ripple"
                        >
                           {loading ? (
                              <>
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                 />
                                 &nbsp; Loading...
                              </>
                           ) : (
                              "Login"
                           )}
                        </button>
                     </InputGroup>
                     <h5>
                        Don't Have An Account?{" "}
                        <span
                           style={{
                              cursor: "pointer",
                           }}
                        >
                           Sign up
                        </span>
                     </h5>
                  </Form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login