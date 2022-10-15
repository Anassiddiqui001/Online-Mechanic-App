import React, { useState } from 'react';
import DefaultLayout from '../components/defaultLayout';
import audi from '../audi.jpg';
import honda from '../honda.jpg';
import toyota from '../toyota.jpg';
import kia from '../kia.jpg';
import changhan from '../changhan.jpg';
import suzuki from '../suzuki.jpg';
import lexus from '../lexus.jpg';
import hyundai from '../hyundai.jpg';
import gmc from '../gmc.jpg';

import Axios from 'axios';


function Bookmechanic() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [Num, setNumber] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [VehicleDetail, setVehicleDetail] = useState("");
  const [Kilometer, setkilometer] = useState("");
  const [ReqService, setReqService] = useState("");
  const [bookingList, setBookingList] = useState([]);

  const book = () => {
    Axios.post('http://localhost:3001/booking_insert', { fname: fName, lname: lName, number: Num, email: Email, date: Date, time: Time, vehicleDetail: VehicleDetail, kilometer: Kilometer, reqService: ReqService })
    setBookingList([...bookingList, { fname: fName, lname: lName, number: Num, email: Email, date: Date, time: Time, vehicleDetail: VehicleDetail, kilometer: Kilometer, reqService: ReqService }])
  };

  return (
    <DefaultLayout>
      <div style={{ textAlign: 'center', padding: '50px 0', backgroundColor: 'rgb(238, 238, 238)' }}>

        <h1 style={{ fontWeight: 'bold' }}>Book<span style={{ color: '#1F4690' }}>Mechanic</span></h1>
        <hr />

      </div>
      <div className='booking'>
        <form>

          <h2><b>Contact Information</b></h2>

          <input type='text' placeholder='First Name' onChange={(e) => {
            setFName(e.target.value)
          }}></input>
          <input type='text' placeholder='Last Name' onChange={(e) => {
            setLName(e.target.value)
          }}></input>
          <input type='number' placeholder='Phone Number' onChange={(e) => {
            setNumber(e.target.value)
          }}></input>
          <input type='email' placeholder='Email' onChange={(e) => {
            setEmail(e.target.value)
          }}></input>

          <h2><b>Appointment Details</b></h2>

          <input type='date' placeholder='date' onChange={(e) => {
            setDate(e.target.value)
          }}></input>
          <input type='time' placeholder='time' onChange={(e) => {
            setTime(e.target.value)
          }}></input>
          <input type='text' placeholder='Vehicle Year, Make and Model' onChange={(e) => {
            setVehicleDetail(e.target.value)
          }}></input>
          <input type='number' placeholder='Vehicle Kilometer' onChange={(e) => {
            setkilometer(e.target.value)
          }}></input>
          <textarea placeholder='Service Required' onChange={(e) => {
            setReqService(e.target.value)
          }}></textarea><br />
          <button style={{backgroundColor:'#cd0000'}} type="submit" class="btn btn-secondary btn-lg" onClick={book}><b>submit</b></button>
          <p style={{ paddingTop: "10px" }}><i><b>NOTE : </b>Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.</i></p>
        </form>
      </div>
      <div className='makes' style={{ padding: "100px 0" }}>
        <h2>We Repair All Makes of Automobiles</h2>
        <hr />
        <p><b>Some of the popular makers</b></p>
        <div className="row">

          <div className="col">
            <img src={honda} alt='' height="130px" width="130px" style={{ border: "1px solid #CFD2CF" }} />
          </div>

          <div className="col">
            <img src={toyota} alt='' height="130px" width="130px" style={{ border: "1px solid #CFD2CF" }} />
          </div>

          <div className="col">
            <img src={kia} alt='' height="130px" width="130px" style={{ border: "1px solid #CFD2CF" }} />
          </div>

          <div className="col">
            <img src={audi} alt='' height="130px" width="130px" style={{ border: "1px solid #CFD2CF" }} />
          </div>

          <div className="col">
            <img src={gmc} alt='' height="130px" width="130px" style={{ border: "1px solid #CFD2CF" }} />
          </div>

          <div className="col">
            <img src={changhan} alt='' height="130px" width="130px" style={{ border: "1px solid #CFD2CF" }} />
          </div>

          <div className="col">
            <img src={lexus} alt='' height="130px" width="130px" style={{ border: "1px solid #CFD2CF" }} />
          </div>

          <div className="col">
            <img src={suzuki} alt='' height="130px" width="130px" style={{ border: "1px solid #CFD2CF" }} />
          </div>

          <div className="col">
            <img src={hyundai} alt='' height="130px" width="130px" style={{ border: "1px solid #CFD2CF" }} />
          </div>

        </div>
      </div>
    </DefaultLayout>
  );
}

export default Bookmechanic;