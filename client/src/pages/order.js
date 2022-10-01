import React, { useState } from 'react';
import Axios from 'axios';

function Order(props) {

    const [Name, setName] = useState("");
    const [num, setNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [pacName, setPackage] = useState("");
    const [Message, setMessage] = useState("");
    const [orderList, setOrderList] = useState([]);

    const order = () => {
        Axios.post('http://localhost:3001/order_insert', { name: Name, number: num, email: Email, packageName: pacName, message: Message })
        setOrderList([...orderList, { name: Name, number: num, email: Email, packageName: pacName, message: Message }])
    };

    return (
        <div className='orderSpace' style={{textAlign:'center', paddingTop:'40px'}}>
            <h2>Order Now</h2>
            <p>And get some exclusive discounts</p>
            <form>
                <div className="container">
                    <div class="row">
                        <div class="col">
                            <input style={{ width: '100%', height: '40px' }} type="text" placeholder='name' onChange={(e) => {
                                setName(e.target.value)
                            }}></input><br />
                            <input style={{ width: '100%', height: '40px' }} type="number" placeholder='number' onChange={(e) => {
                                setNumber(e.target.value)
                            }}></input>
                        </div>
                        <div class="col">
                            <input style={{ width: '100%', height: '40px' }} type="emial" placeholder='email' onChange={(e) => {
                                setEmail(e.target.value)
                            }}></input><br />
                            <input style={{ width: '100%', height: '40px' }} type="text" placeholder='message' onChange={(e) => {
                                setMessage(e.target.value)
                            }}></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" style={{ width: '100%', height: '40px' }} placeholder='package Name' onChange={(e) => {
                                setPackage(e.target.value)
                            }}></input>
                            <button type="submit" class="btn btn-secondary btn-lg " style={{ width: '100%', height: '40px', color:'white', backgroundColor:'#cd0000' }} onClick={order}><b>Send</b></button>
                        </div>
                    </div>
                </div>
                <h2>Services currently Available in Karachi only</h2>
                <p>Our Sales Representative Will Contact you with in 24 hour’s</p>
                <button type="button" class="btn btn-secondary btn-lg " style={{ width: '10%', height: '40px', backgroundColor:'white'}}><a href='http://localhost:3000/packages' style={{textDecoration:'none',color:'#cd0000'}}><b>Return</b></a></button>
            </form>

        </div>
    );
}
export default Order


