const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extened:false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Sup yo!');
});

app.get('/status', (req, res) => {
  res.status(200).json({message: "It's fine.", status: 200});
});

app.post('/signup' , (req, res, next) => {
  if(!request.body) {
    res.status(400).json({message: "Bad request: invalid body", status: 400});
   } else {
     res.status(200).json({message: "Signup successful", status: 200});
   }
});

app.post('/login' , (req, res) => {
  console.log(req.body);
  if(!request.body) {
    res.status(400).json({message: "Bad request: invalid body", status: 400});
   } else {
     res.status(200).json({message: "Signup successful", status: 200});
   }
});

app.post('/logout' , (req, res) => {
  console.log(req.body);
  if(!request.body) {
    res.status(400).json({message: "Bad request: invalid body", status: 400});
   } else {
     res.status(200).json({message: "Signup successful", status: 200});
   }
});

app.post('/token' , (req, res) => {
  if(!request.body || !req.body.refreshToken) {
    res.status(400).json({message: "Bad request: invalid body", status: 400});
   } else{
     const { refreshToken } = req.body;
     res.status(200).json({message: `refresh token requested for token: ${refreshToken}`, status: 200});
   }
});

app.post('/forgot-password' , (req, res) => {
  if(!request.body || !req.body.email) {
    res.status(400).json({message: "Bad request: invalid body", status: 400});
   } else{
     const { email } = req.body;
     res.status(200).json({message: `"forgot password" requested for email: ${email}`, status: 200});
   }
});

app.post('/reset-password' , (req, res) => {
  if(!request.body || !req.body.email) {
    res.status(400).json({message: "Bad request: invalid body", status: 400});
   } else{
     const { email } = req.body;
     res.status(200).json({message: `password reset requested for email: ${email}`, status: 200});
   }
});

app.use((req, res) => {
  res.status(404).json({message: "404 - Not found", status: 404});
});

app.use((error, request, response, next) => {
  console.log(error);
  response.status(error.status || 500).json({ error: error.message, status: 500 });
});


app.listen(port, () => {
  console.log(`Server is up on port: ${3000}`)
}); 

 