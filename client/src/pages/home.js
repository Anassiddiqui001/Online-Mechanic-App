import React from 'react';
import DefaultLayout from '../components/defaultLayout';
import repair1 from '../repair1.jpg';
import repair2 from '../repair2.webp';
import repair3 from '../repair3.jpg';
import car from '../car.png';
import key from '../key.jpg';
import checklist from '../checkList.jpg';
import appointment from '../appointment.png';
import audi from '../audi.jpg';
import honda from '../honda.jpg';
import toyota from '../toyota.jpg';
import kia from '../kia.jpg';
import changhan from '../changhan.jpg';
import suzuki from '../suzuki.jpg';
import lexus from '../lexus.jpg';
import hyundai from '../hyundai.jpg';
import gmc from '../gmc.jpg';
import mechanicRepair from '../mechanicRepair.jpg';
import mechanicRepair2 from '../mechanicRepair2.jpeg';
function Home() {



  return (
    <DefaultLayout>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" >
          <div className="carousel-item active">
            <img className="d-block w-100" src={repair1} alt="First slide" height='500px' />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={repair2} alt="Second slide" height='500px' />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={repair3} alt="Third slide" height='500px' />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div style={{ padding: "50px 80px", textAlign: "center", backgroundColor:"#F9F9F9" }}>
        <h2>WELCOME TO CAR MAINTENANCE SERVICES</h2>
        <hr />
        <p><b>More Than 10 Years of Experience</b></p>
        <div className="row">
          <div className='col'>
            <img src={mechanicRepair} alt="" height="300px" width="300px"></img>
          </div>
          <div className='col' style={{ textAlign: "left" }}>
            <p >OverNigt Auto's is a full-service preventive maintenance center. We perform high quality,
              guaranteed service you can trust at a fair price. We work on domestic and foreign
              vehicles and are your best choice for scheduled maintenance of your car, SUV, truck and fleet vehicles.</p>
            <ul>
              <li>Same day service is provided in many instances</li>
              <li>Our work is warrantied for a full year</li>
            </ul>
            <button class="btn btn-secondary btn-lg " style={{borderRadius:"20px", backgroundColor:'#cd0000'}}><a href="http://localhost:3000/aboutUs" style={{textDecoration:"None", color:"white"}}><b>+ More Info</b></a></button>
          </div>
        </div>
      </div>

      <div className='appointment'>
        <h2>How It Works</h2>
        <hr />
        <p><b>We offer full service maintenance</b></p>
        <div className="row" style={{paddingTop:"25px"}}>
          <div className="col">
            <img src={checklist} alt='' className="rounded-circle" height="200px" width="200px" />
            <h3>1</h3>
            <p>CHOOSE YOUR SERVICE</p></div>

          <div className="col">
            <img src={appointment} alt='' className="rounded-circle" height="200px" width="200px" />
            <h3>2</h3>
            <p>MAKE AN APPOINTMENT</p></div>

          <div className="col">
            <img src={car} alt='' className="rounded-circle" height="200px" width="200px" />
            <h3>3</h3>
            <p>WE'LL COME AT YOUR DOOR STEP FOR MAINTENANCE</p></div>

          <div className="col">
            <img src={key} alt='' className="rounded-circle" height="200px" width="200px" />
            <h3>4</h3>
            <p>PICK UP YOUR CAR KEYS</p></div>
        </div>
      </div>
      <div style={{ padding: "50px 250px", textAlign: "center", backgroundColor:"#F9F9F9" }}>
        <h2>We Provide Expert Services</h2>
        <hr />
        <div className="row" style={{paddingTop:"20px"}}>
          <div className='col' style={{ textAlign: "left", lineHeight: "40px" }}>
            <ul>
              <i><b>
                <li>General Auto Maintenance</li>
                <li>Computerized Scanning</li>
                <li>Manufacturer Recommended Service</li>
                <li>Brake Service or Replacements</li>
                <li>Catalytic Converter Cleaning</li>
              </b></i>
            </ul>
          </div>
          <div className='col'>
            <img src={mechanicRepair2} alt="" height="400px" width="400px"></img>
          </div>
        </div>
      </div>
      <div className='makes' style={{ padding: "100px 0" }}>
        <h2>We Maintain All Makes of Automobiles</h2>
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

export default Home;
