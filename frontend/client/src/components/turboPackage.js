import React from "react";

import Button from './orderBtn';
function TurboPackage(props) {
    const service = props.service;

    return (
        <div className="card" style={{ width: '22rem', textAlign: 'center', border:'none' }}>
            <div className="card-body bg-dark" style={{ padding: '17px 0', color: 'white', lineHeight: '20px' }}>
                <h2 className="card-title"><b>Turbo Package</b></h2>
                <p><span style={{ fontSize: '2.1rem' }}>3000</span> Starts From</p>
            </div>
            <ul className="list-group list-group-flush">
                {service.map((item) => {
                    return (
                        <li style={{textAlign:'left', fontSize:'15px',backgroundColor:'#EEEEEE' }} key={item.packageID} className="list-group-item">🛠️{item.turboPackage}</li>
                    );
                })}
            </ul>


            <div className="card-body" style={{ padding: '20px 20px',backgroundColor:'#EEEEEE'  }}>
        

                <Button />
            </div>
        </div>
    );
}
export default TurboPackage