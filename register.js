const express = require('express');
const { Client } = require("pg");

module.exports = function(){ // Router factory
    const router = express.Router();
    router.use(bodyParser.urlencoded({extended:true}));
    router.use(bodyParser.json());
    //"postgres://YourUserName:YourPassword@localhost:5432/YourDatabase"
    const connectionString = "pg://nxhdolvxcvolrn:58e2d892e05ef70d48a760ea0907766e1846c3228c588d5452098ad91c74afb2@ec2-174-129-29-101.compute-1.amazonaws.com:5432/deeut2ofbe819a";
    var client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
    });

    client.connect();
    router.post('/input', (req, res, next) => {
        var nama =req.body.nama;
        var email = req.body.email;
        //console.log(email);
        var sql = "INSERT INTO test(nama,email) VALUES("+"'"+nama+"','"+email+"')";
        client.query(sql);
        res.end('Data telah Terkirim');
    });
    client.end();
    return router;
}
