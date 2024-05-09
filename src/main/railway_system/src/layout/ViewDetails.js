import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import Allservices from '../services/Allservices';
import { useState } from 'react';
import { useEffect } from 'react';
import './ViewDetails.css';

const ViewDetails = () => {
    const { train_no } = useParams();

    const [train, setTrain] = useState({
        train_name: "",
        location_from: "",
        location_to: "",
        seat_availability: "",
    });

    useEffect(() => {
        loadTrain();
    },);

    const loadTrain = async () => {
        console.log(train_no);
        await Allservices.FindTrainDetail(train_no).then((response) => {
            setTrain(response.data);
        });
    };
    let navigate = useNavigate();
    const onsubmit = async (e) => {
        e.preventDefault();

        alert('Ticket Booked successfully');
        navigate("/home");
    };
    return (
        <div className='image'>
            <div className='container' style={{ paddingTop: 100, marginLeft: 50 }}>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text-center m-4'>TRAIN DETAILS</h2>
                        <form onSubmit={onsubmit}>
                            <div className='mb-3'>
                                <th>
                                    
                                    <label className='form-label'><b>
                                        TRAIN NUMBER</b>
                                        
                                        <h5>{`${train.train_no} `}</h5>
                                    </label>
                                </th>
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'><b>
                                    TRAIN NAME</b><h5>{`${train.train_name} `}</h5>
                                </label>

                            </div>

                            <div className='mb-3'>
                                <label className='form-label'><b>
                                    LOCATION FROM</b><h5>{`${train.location_from} `}</h5>
                                </label>

                            </div>

                            <div className='mb-3'>
                                <label className='form-label'><b>
                                    LOCATION TO</b><h5>{`${train.location_to} `}</h5>
                                </label>

                            </div>

                            <div className='mb-3'>
                                <label className='form-label'><b>
                                    SEAT AVAILABILITY</b><h5>{`${train.seat_availability} `}</h5>
                                </label>

                            </div>



                            <div className="d-flex justify-content-between" style={{ paddingLeft: 10, paddingRight: 50, display: 'flex', }}>

                                <Link className='btn btn-danger ' role='backbutton' to={"/home"} >BACK</Link>


                                <button type="submit" className='btn btn-primary ' to={'book'} >BOOK TICKET</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ViewDetails