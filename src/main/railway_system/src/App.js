import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './layout/Login';
import Register from './layout/Register';
import Home from './layout/Home';
import ViewDetails from './layout/ViewDetails';

import Navbar from './layout/Navbar ';
import AdminLogin from './layout/AdminLogin';
import AdminPage from './layout/AdminPage';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/viewdetails/:train_no" element={<ViewDetails />}></Route>
        {/* <Route exact path="/search" element={<Find/>}></Route> */}

        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>

        {/* <Route exact path="/view-cart" element={<HomeCart/>}></Route> */}
      </Routes>
      <Routes>

        <Route exact path="/adminlogin" element={<AdminLogin />}></Route>
        <Route exact path="/adminpage" element={<AdminPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
