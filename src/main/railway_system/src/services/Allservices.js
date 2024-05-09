import { Component } from 'react'
import axios from "axios"

const viewAllTrain="http://localhost:2355/ViewAllTrain";
const registerValue="http://localhost:2355/InsertValue";
const loginValue="http://localhost:2355/GetValue/";
const getTrainById="http://localhost:2355/FindTrain/";
const autopop="http://localhost:2355/Autopop";


class Allservices extends Component {

   
    ViewAllTrain=()=>{
        return axios.get(viewAllTrain);
    }

    RegisterValue(register){
        return axios.post(registerValue,register);
    }
    LoginValue(email){
        return axios.get(loginValue+email);
    }
    FindTrainDetail(train_no){
        return axios.get(getTrainById+train_no);
    }
    AutoPop(){
        return axios.get(autopop);
    }
    
}
const allservicesInstance = new Allservices();

export default allservicesInstance;