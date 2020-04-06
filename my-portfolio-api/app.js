const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');
const app = express();

app.use(bodyParser.json());

app.use(cors());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: cool')
});

app.post('/api/email', (req, res, next) => {
    
    sendGrid.setApiKey('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');
    const msg = {
        to: 'thunder_axe_90@hotmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message,
      };

      sendGrid.send(msg)
        .then (result => {
            res.status(200).json({
                success: true
            });
        })
        .catch (err => {
            console.log(err)
            res.status(401).json({
                success: false
            })
        })
});



app.listen(3030, '0.0.0.0');