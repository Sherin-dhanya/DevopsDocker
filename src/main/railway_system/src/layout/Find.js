// import React from 'react'
// import Allservices from '../services/Allservices';
// import { Link,navigate } from 'react-router-dom'
// import { useEffect } from 'react';
// import { useState } from 'react';
// export default function Find() {

//     const [train, setTrain] = useState({
//         train_no: "",
//         train_name: "",
//         location_from: "",
//         location_to: "",
//         seat_availability: ""
//     })

   


//     // const loadTrain = async () => {
//     //     console.log(train_no);
//     //     await Allservices.FindTrainDetail(train_no).then((response) => {
//     //         setTrain(response.data);
//     //     });

//     const onsubmit = async (e) => {
//         e.preventDefault();

//         alert('Data founded successfully');
//         navigate("/view-customer");
//     };
//     return (
//         <div className='image'>
//             <div className='container' style={{ paddingTop: 100, marginLeft: 50 }}>
//                 <div className='row'>
//                     <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
//                         <h2 className='text-center m-4'>SEARCH TRAIN </h2>
//                         <form onSubmit={onsubmit}>

//                             <div className='mb-3'>
//                                 <label htmlFor='location_from' className='form-label'><b>
//                                     Location From</b>
//                                 </label>
//                                 <input
//                                     type={"text"}
//                                     className='form-control'
//                                     name="location_from"
//                                     value={location_from}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder="Enter  Location From" />
//                             </div>

//                             <div className='mb-3'>
//                                 <label htmlFor='location_to' className='form-label'><b>
//                                     Location To</b>
//                                 </label>
//                                 <input
//                                     type={"text"}
//                                     className='form-control'
//                                     name="location_to"
//                                     value={location_to}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder="Enter  Location To" />
//                             </div>





//                             <div className="d-flex justify-content-between" style={{ paddingLeft: 10, paddingRight: 50, display: 'flex', }}>

//                                 <Link className='btn btn-danger ' to={"/home"} >BACK</Link>


//                                 <button type="submit" className='btn btn-primary ' to={'book'}>BOOK TICKET</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }
