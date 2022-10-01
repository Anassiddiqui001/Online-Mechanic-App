import React from 'react';
import DefaultLayout from '../components/defaultLayout';
import BrakeBasic from '../components/brakeBasic';
import BrakeAdvance from '../components/brakeAdvance';
import HybridBasic from '../components/hybridBasic';
import HybridPremium from '../components/hybridPremium';
import GtrPackage from '../components/gtrPackage';
import SilviaPackage from '../components/silviaPackage';
import InspectionPackage from '../components/inspectionPackage';
import SupraPackage from '../components/supraPackage';
import TurboPackage from '../components/turboPackage';
import { useEffect, useState } from 'react';
import Axios from "axios";

function Packages() {
  const [service, setService] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/packages').then(
      (response) => { setService(response.data) }
    );
  }, [])

  return (
    <DefaultLayout>
      <div className='packageContent'>
        <h1><b>CAR PACKAGES</b></h1>
        <hr />
        <p>Our mechanics are mobile. Not only do we have significantly lower overhead costs compared to the local shops, but as a national brand, we are able to negotiate better prices from the auto parts vendors. We pass these savings to you! The bigger the job, the more you save.</p>
      </div>

      <div>
        <h1 style={{ margin: '0px', textAlign: 'center', color: 'white', padding: '35px 0', backgroundColor: 'rgb(205, 0, 0)' }}><b>Popular Packages</b></h1>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ backgroundColor: '#7F8487', padding: '50px 0' }}>


        <div className="carousel-inner" style={{ paddingLeft: '540px' }}>
          <div className="carousel-item active">
            <BrakeBasic service={service} />
          </div>
          <div className="carousel-item">
            <BrakeAdvance service={service} />
          </div>
          <div className="carousel-item">
            <TurboPackage service={service} />
          </div>
          <div className="carousel-item">
            <InspectionPackage service={service} />
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


      <div>
        <h1 style={{ margin: '0px', textAlign: 'center', color: 'white', padding: '25px 0', backgroundColor: 'rgb(205, 0, 0)' }}><b>Hybrid Packages</b></h1>
      </div>
      <div style={{ backgroundColor: '#7F8487' }}>
        <div className="container" style={{ padding: '50px 0' }}>
          <div className="row justify-content-center">
            <div className="col-4">
              <HybridBasic service={service} />
            </div>
            <div className="col-4">
              <HybridPremium service={service} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ margin: '0px', textAlign: 'center', color: 'white', padding: '35px 0', backgroundColor: 'rgb(205, 0, 0)' }}><b>Premium Packages</b></h1>
      </div>
      <div style={{backgroundColor:'#7F8487'}}>
        <div className="container" style={{ padding: '50px 0'}}>
          <div className="row">
            <div className="col-md-4">
              <GtrPackage service={service} />
            </div>
            <div className="col-md-4">
              <SupraPackage service={service} />
            </div>
            <div className="col-md-4">
              <SilviaPackage service={service} />
            </div>
          </div>
        </div>
      </div>

    </DefaultLayout>
  );
}

export default Packages;