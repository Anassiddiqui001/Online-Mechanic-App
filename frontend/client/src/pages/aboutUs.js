import React from 'react';
import DefaultLayout from '../components/defaultLayout';
import redCar from '../redCar.jpg';
import scrap from '../scrap.jpg'
function Aboutus() {
  return (
    <DefaultLayout>
      <div style={{ display: 'flex', fontWeight: 'bolder', padding: '50px 250px' }}>
        <div>
          <img src={redCar} alt="" ></img>
        </div>
        <div>

          <h4><b>We Ensure</b></h4>
          <h2 style={{ color: 'red' }}><b>COMMITMENT TO QUALITY</b></h2>

        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ backgroundColor: '#EEEEEE', padding:'40px 0' }}>
          <h1>About Company</h1>
          <hr />
        </div>
        <div style={{ display: 'flex', padding:'40px 200px' }}>
          <div>
            <img src={scrap} alt='' width='400px' height='300px'></img>
          </div>
          <div style={{textAlign:'left', paddingLeft:'25px'}}>
            <h3>A Reputation 10 Years in the Making</h3>
            <p>OverNight Auto's is a full-service preventive maintenance and automotive repair center. We perform high quality, guaranteed service you can trust at a fair price. We repair domestic and foreign vehicles and are your best choice for scheduled maintenance of your car, SUV, truck and fleet vehicles.</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Aboutus;