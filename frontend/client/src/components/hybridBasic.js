import React from "react";

import Button from './orderBtn';
function HybridBasic(props) {
    const service = props.service;

    return (
        <div className="card" style={{ width: '22rem', textAlign: 'center', border:'none'  }}>
            <div className="card-body bg-dark" style={{ padding: '17px 0', color: 'white', lineHeight: '20px' }}>
                <h2 className="card-title"><b>Hybrid Basic</b></h2>
                <p><span style={{ fontSize: '2.1rem' }}>5000</span> onwards</p>
            </div>
            <ul className="list-group list-group-flush">
                {service.map((item) => {
                    return (
                        <li style={{textAlign:'left',fontSize:'15px',backgroundColor:'#EEEEEE' }} key={item.packageID} className="list-group-item">🛠️{item.hybridBasic}</li>
                    );
                })}
            </ul>


            <div className="card-body" style={{ padding: '20px 20px',backgroundColor:'#EEEEEE'  }}>
        

                <Button />
            </div>
        </div>
    );
}
export default HybridBasic