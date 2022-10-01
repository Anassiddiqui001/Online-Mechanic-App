import React from 'react';
import engine from '../engine.jpg';
import exhaust from '../exhaust.jpg';
import brakeRepair from '../brakeRepair.png';
import wheels from '../wheels.jpg';
import oilChange from '../oilChange.png';
import transmission from '../transmission.jpg';
import DefaultLayout from '../components/defaultLayout';
import services from '../services.jpg';
function Services() {

  return (
    <DefaultLayout>
      <div>
        <img src={services} alt="" width='100%'></img>
      </div>
      <div style={{ textAlign: "center" }}>
        <b>
          <h1>What We Do</h1>
          <hr />
          <p>We offer full service auto repair & maintenance</p>
        </b>
      </div>
      <div className="container" style={{ textAlign: 'center', padding: '50px 50px', backgroundColor: '#EEEEEE' }}>
        <div className="row">
          <div className="col-sm" style={{ padding: '20px 20px', justifyContent: 'space-between' }}>
            <b>
              <img src={engine} alt='' height='300px' width='300px' style={{ paddingBottom: '25px' }}></img>
              <h3>ENGINE SERVICES</h3>
              <p>The best way to minimize breakdowns is doing routine maintenance</p>
            </b>
          </div>
          <div className="col-sm" style={{ padding: '20px 20px', justifyContent: 'space-between' }}>
            <b>
              <img src={exhaust} alt='' height='300px' width='300px' style={{ paddingBottom: '25px' }}></img>
              <h3>EXHAUST SYSTEM</h3>
              <p>Exhaust service is required to keep harmful gases away from entering your vehicle</p>
            </b>
          </div>
          <div className="col-sm" style={{ padding: '20px 20px', justifyContent: 'space-between' }}>
            <b>
              <img src={transmission} alt='' height='300px' width='300px' style={{ paddingBottom: '25px' }}></img>
              <h3>TRANSMISSION SERVICE & REPAIR</h3>
              <p>The transmission is complicated and important components of your car</p>
            </b>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={{ padding: '20px 20px', justifyContent: 'space-between' }}>
            <b>
              <img src={wheels} alt='' height='300px' width='300px' style={{ paddingBottom: '25px' }}></img>
              <h3>TIRES & WHEELS</h3>
              <p>Efficient and consistent tyre service ensures the long lives of tyres of your vehicle</p>
            </b>
          </div>
          <div className="col-sm" style={{ padding: '20px 20px', justifyContent: 'space-between' }}>
            <b>
              <img src={brakeRepair} alt='' height='300px' width='300px' style={{ paddingBottom: '25px' }}></img>
              <h3>BRAKE REPAIR & SERVICES</h3>
              <p>Brakes wear out over time requiring service</p>
            </b>
          </div>
          <div className="col-sm" style={{ padding: '20px 20px', justifyContent: 'space-between' }}>
            <b>
              <img src={oilChange} alt='' height='300px' width='300px' style={{ paddingBottom: '25px' }}></img>
              <h3>PREVENTATIVE MAINTENANCE</h3>
              <p>Tuning improves the handling and performance of a car</p>
            </b>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center',padding:"100px 0"}}>
        <h1><b>Want to Get Quality Car Repair or Maintenance</b></h1>
        <p>Wanna know the repair cost ? Click on appointment</p>
        <button type="button" style={{backgroundColor:'#cd0000'}} class="btn btn-secondary btn-lg"><a href="http://localhost:3000/bookMechanic" style={{textDecoration:"None", color:"white", fontWeight:'bold'}}>APPOINTMENT</a></button>
      </div>
    </DefaultLayout>
  );
}

export default Services;