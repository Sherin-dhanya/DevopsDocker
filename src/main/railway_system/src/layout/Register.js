import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllServices from '../services/Allservices';
// import Alert from '@mui/material/Alert';
// import CheckIcon from '@mui/icons-material/Check';
// import './Home.css';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

export default function Register() {
    let navigate = useNavigate();
    const [reg, setReg] = React.useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""

    })


    const { name, email, password, confirm_password } = reg;
    const handleChange = (e) => {
        setReg({ ...reg, [e.target.name]: e.target.value });
    };

    const onsubmit = async (e) => {
        e.preventDefault();
        await AllServices.RegisterValue(reg);

        alert('Registered Successfully');
        navigate("/login");
    };
    return (
        <div className='image' style={{paddingBottom:20}}>
        <section>
            <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: (0, 0, 96) }}>
                <div class="container">
                    <div class="row gx-lg-5 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <h1 class="my-5 display-3 fw-bold ls-tight">
                                RAILWAY RESERVATION <br />
                                <span class="text-primary">Management</span>
                            </h1>
                            <p style={{ color: (217, 10, 50.8), fontSize: 20}}>
                            Passengers can travel from anywhere to anywhere
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative" style={{paddingRight:200}}>
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form onSubmit={onsubmit}>

                                        <div className="row">

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" id="form2Example17" name="name"  className="form-control form-control-lg" value={name} onChange={handleChange} required />
                                                <label className="form-label" htmlFor="Name" ><i className="login__icon fas fa-user"></i>Name</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="email" id="form2Example17" name="email"  className="form-control form-control-lg" value={email} onChange={handleChange} required />
                                                <label className="form-label" htmlFor="Email" ><i className="login__icon fas fa-user"></i>Email address</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4"> 
                                             <input type="password" id="form2Example27"  name="password"  className="form-control form-control-lg" value={password} onChange={handleChange} required />
                                                <label className="form-label" htmlFor="Password" ><i className="bi bi-lock-fill"></i>Password</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4"> 
                                             <input type="password" id="form2Example27" name="confirm_password"  className="form-control form-control-lg" value={confirm_password} onChange={handleChange} required />
                                                <label className="form-label" htmlFor="Confirm_password" ><i className="bi bi-lock-fill"></i>Confirm Password</label>
                                            </div>

                                            <button type="submit"  data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" >Register</button>

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
