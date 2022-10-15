const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'sqluser',
    password: 'password',
    database: 'overnight',
});


app.post('/order_insert', (req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;
    const packageName = req.body.packageName;
    const message = req.body.message;
    const sqlinsert = "INSERT INTO orders(name,number,email,packageName,message) VALUES (?,?,?,?,?);"
    db.query(sqlinsert, [name, number, email, packageName, message], (error, result) => {
        if (error) console.log(error);
    })
});


/*
app.get("/services", (req, res) => {
    const sqlget = "SELECT * FROM services;"
    db.query(sqlget, (err, result) => {
        res.send(result);
    })
})
*/


app.post('/contact_insert', (req, res) => {
    const name = req.body.name;
    const subject = req.body.subject;
    const email = req.body.email;
    const comment = req.body.comment;
    const sqlinsert = "INSERT INTO contact(name,subject,email,comment) VALUES (?,?,?,?);"
    db.query(sqlinsert, [name, subject, email, comment], (error, result) => {
        if (error) console.log(error);
    })
});


/*
app.get("/makes", (req, res) => {
    const sqlget = "SELECT * FROM makes;"
    db.query(sqlget, (err, result) => {
        res.send(result);
    })
})
*/


app.post('/booking_insert', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const number = req.body.number;
    const email = req.body.email;
    const date = req.body.date;
    const time = req.body.time;
    const vehicleDetail = req.body.vehicleDetail;
    const kilometer = req.body.kilometer;
    const reqService = req.body.reqService;
    const sqlinsert = "INSERT INTO booking(fname,lname,number,email,date,time,vehicleDetail,kilometer,reqService) VALUES (?,?,?,?,?,?,?,?,?);"
    db.query(sqlinsert, [fname, lname, number, email, date, time, vehicleDetail, kilometer, reqService], (error, result) => {
        if (error) console.log(error);
    })
});


app.get("/packages", (req, res) => {
    const sqlget = "SELECT * FROM packages;"
    db.query(sqlget, (err, result) => {
        res.send(result);
    })
})


const port = process.env.port || 3001;


app.listen(port, () => { console.log(`running on port ${port}`) });