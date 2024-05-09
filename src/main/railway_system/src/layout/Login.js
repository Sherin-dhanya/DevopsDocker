import React from 'react'
import {  useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllServices from '../services/Allservices';
// import './Home.css'

export default function Login() {
    let navigate = useNavigate();

    const [login, setLogin] = React.useState({

        email: "",
        password: "",
    })


    const { email, password } = login;
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        AllServices.LoginValue(email).then((res) => {
            setLogin(res);
            if (res.data.password === login.password) {
                alert("Login Success");
                navigate("/home");

            } else {
                alert("Username and Password  is not match");
            }


        })

    };
    return (
        <div className='image'  style={{paddingBottom:70}}>
        <section>
            <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: (0, 0, 96) }}>
                <div class="container">
                    <div class="row gx-lg-5 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <h1 class="my-5 display-3 fw-bold ls-tight">
                                RAILWAY RESERVATION<br />
                                <span class="text-primary">Management</span>
                            </h1>
                            <p style={{ color: (217, 10, 50.8) }}>
                                Passengers can travel from anywhere to anywhere
                            </p>
                        </div>


                        <div class="col-lg-6 mb-5 mb-lg-0 position-relative" style={{paddingRight:200}}>
                            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                            <div class="card bg-glass">
                                <div class="card-body px-4 py-5 px-md-5">
                                    <form onSubmit={handleSubmit}>

                                        <div class="row">

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <input type="email" id="form2Example17" name="email" className="form-control form-control-lg"  value={email} onChange={handleChange} required />
                                                <label className="form-label" htmlFor="Email" ><i class="login__icon fas fa-user"></i>Email address</label>
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-4">  <input type="password" id="form2Example27" name="password" className="form-control form-control-lg" value={password} onChange={handleChange} required />
                                                <label className="form-label" htmlFor="Password" ><i class="bi bi-lock-fill"></i>Password</label>
                                            </div>


                                            <div class="row mb-4">
                                                <div class="col d-flex justify-content-center">

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                                                    </div>
                                                </div>

                                                <div class="col">

                                                    <a href="#!">Forgot password?</a>
                                                </div>
                                            </div>

                                            <button type="submit" data-mdb-button-init data-mdb-ripple-init 
                                            class="btn  btn-block mb-4"  style={{ backgroundColor: "rgb(208,125,17)" }}>Sign in</button>


                                            <div class="text-center" >
                                                <p>Not a member? <a href="Register" >Register</a></p>
                                                <p>or sign up with:</p>
                                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                                    <i class="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                                    <i class="fab fa-google"></i>
                                                </button>

                                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                                    <i class="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                                    <i class="fab fa-github"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        </div>

    )

}
