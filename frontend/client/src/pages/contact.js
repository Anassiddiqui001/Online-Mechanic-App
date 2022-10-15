import React, { useState } from 'react';
import DefaultLayout from '../components/defaultLayout';
import Axios from 'axios';

function Contact() {
  const [Name, setName] = useState("");
  const [Subject, setSubject] = useState("");
  const [Email, setEmail] = useState("");
  const [Comment, setComment] = useState("");
  const [contactList, setContactList] = useState([]);

  const contact = () => {
    Axios.post('http://localhost:3001/contact_insert', { name: Name, subject: Subject, email: Email, comment: Comment })
    setContactList([...contactList, { name: Name, subject: Subject, email: Email, comment: Comment }])
  };
  return (
    <DefaultLayout>
      <div style={{ textAlign: 'center', fontWeight: 'bolder', padding: '40px', backgroundColor: '#EEEEEE' }}>
        <h2><b>CONTACTS</b></h2>
        <hr />
      </div>
      <div style={{ padding: '40px 80px' }}>
        <div style={{ display: 'flex' }}>
          <h3 style={{ width: '550px', paddingRight: '70px' }}><b>Call: +92 318 1144183</b></h3>
          <p style={{paddingRight:'110px'}}>
            If you have any questions or comments regarding us or your vehicle, please fill out a contact request
            form below.Or if you prefer, you can reach us at the following address:
          </p>
        </div>
        <form>
          <div className="container" style={{ margin: '0px', padding: ' 30px 0px' }}>
            <h1><b>Contact Us</b></h1>
            <div className="row contactInput">
              <div className="col">
                <input type="text" placeholder=' Name' onChange={(e) => {
                  setName(e.target.value)
                }}></input><br />
                <input style={{ marginTop: '15px' }} type="text" placeholder='  Your subject' onChange={(e) => {
                  setSubject(e.target.value)
                }}></input><br />
                <input style={{ marginTop: '15px' }} type="emial" placeholder='  Email' onChange={(e) => {
                  setEmail(e.target.value)
                }}></input><br />
              </div>
              <div className="col">
                <textarea style={{ margin: '0px', width: '600px', height: '200px' }} placeholder='  Comment' onChange={(e) => {
                  setComment(e.target.value)
                }}></textarea><br />
              </div>
            </div>
            <button type='submit' class="btn btn-secondary btn-lg"  style={{width:'100%',height:'50px' ,backgroundColor:'#cd0000', color:'white'}} onClick={contact}><b>Send message</b></button>
          </div>
        </form>
      </div>





    </DefaultLayout>
  );
}

export default Contact;