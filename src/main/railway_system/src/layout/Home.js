import React, { useEffect, useState } from 'react'
import Allservices from '../services/Allservices';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
//import { Button } from '@mui/material';

function Home() {
  const [train, setTrain] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllDetails = async () => {
      const res = await Allservices.ViewAllTrain();
      setTrain(res.data);
    };
    getAllDetails();
  }, [search]);

  const filteredTrains = Array.isArray(train) ? train.filter((item) => {
    return item && item.train_name && item.train_name.toLowerCase().includes(search.toLowerCase());
  }) : [];

  return (
    <div >
      <div className='image' style={{ paddingBottom: 340, }}>
        <div className='search bar' style={{ paddingTop: 30, paddingLeft: 500, paddingRight: 500 }}>

          <form class="d-flex justify-content-center">
            <input class="form-control " type="search" role='search'  id='search' xplaceholder="Enter the Train name " aria-label="Search" onChange={(e) => setSearch(e.target.value)} />

          </form>

        </div>
        <div class="thead-dark" style={{ paddingTop: 30, marginLeft: 180, marginRight: 180 }}>


          <table className="table  table-striped " style={{ paddingTop: 200, fontSize: 20, borderColor: 'black', }}>
            <thead style={{ color: "white" }}>
              <tr>
                <th className="text-center text-secondary "  style={{ width: "30px" }}>TRAIN NO</th>
                <th className="text-center text-secondary " style={{ width: "50px" }}>TRAIN NAME</th>
                <th className="text-center text-secondary "  style={{ width: "10px" }}>LOCATION FROM</th>
                <th className="text-center text-secondary "  style={{ width: "80px" }}>LOCATION TO</th>
                <th className="text-center text-danger "  style={{ width: "80px" }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrains.map((item) => (
                <tr key={item.train_no}>
                  <td>{item.train_no}</td>
                  <td>{item.train_name}</td>
                  <td>{item.location_from}</td>
                  <td>{item.location_to}</td>
                  <div title="abc">
                  <td className="d-flex justify-content-between" data-testid="viewdetail">
                    <Link to={`/viewdetails/${item.train_no}`} className="btn btn-info btn-md" >
                      View details
                    </Link>
                  </td></div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home